import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Section } from "../core/src/domain/entities/Section";
import { GetSectionsForStep } from "../core/src/usecases/GetSectionsForStep";
import { GurooSectionService } from "../core/src/adapters/realDependencies/GurooSectionService";
import api from "../core/src/domain/adapters/api";

interface AIResponses {
  [questionUid: string]: string;
}

interface QuestionsState {
  section: Section | null;
  loading: boolean;
  error: string | null;
  aiResponses: AIResponses;
}

const initialState: QuestionsState = {
  section: null,
  loading: false,
  error: null,
  aiResponses: {},
};

const gurooSectionService = new GurooSectionService();
const getSectionsForStep = new GetSectionsForStep(gurooSectionService);

export const fetchSectionsForStep = createAsyncThunk(
  "questions/fetchForStep",
  async (stepId: number) => {
    return await getSectionsForStep.execute(stepId);
  }
);

// ---------------------------------------------------------------------------------------------------------------------
export const fetchNetSalary = createAsyncThunk(
  "questions/fetchNetSalary",
  async (town: string) => {
    const response = await api.post(
      "https://fundr-ia.onrender.com/net_salary",
      { town }
    );
    return response.data.message;
  }
);

export const fetchPredictLoyer = createAsyncThunk(
  "questions/fetchPredictLoyer",
  async (body: { pays: string; code_postal: string; surface: number }) => {
    const response = await api.post(
      "https://fundr-ia.onrender.com/predict_loyer",
      body
    );
    return response.data.message;
  }
);

export const fetchCotisationsSalariales = createAsyncThunk(
  "questions/fetchCotisationsSalariales",
  async (body: {
    gross_monthly_salary_employee1: number;
    gross_monthly_salary_employee2: number;
    gross_monthly_salary_employee3: number;
    gross_monthly_salary_employee4: number;
    gross_monthly_salary_employee5: number;
    gross_monthly_salary_employee6: number;
    gross_monthly_salary_employee7: number;
    gross_monthly_salary_employee8: number;
    gross_monthly_salary_employee9: number;
    gross_monthly_salary_employee10: number;
  }) => {
    const response = await api.post(
      "https://fundr-ia.onrender.com/Cotisations_salariales",
      body
    );
    return response.data.message;
  }
);
// ---------------------------------------------------------------------------------------------------------------------

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSectionsForStep.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchSectionsForStep.fulfilled,
        (state, action: PayloadAction<Section>) => {
          state.loading = false;
          state.section = action.payload;
        }
      )
      .addCase(fetchSectionsForStep.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message ||
          "An error occurred while fetching the sections.";
      })

      .addCase(
        fetchNetSalary.fulfilled,
        (state, action: PayloadAction<string>) => {
          const uids = [
            "5f4800c7-e289-4885-b6bf-f5897e3850fd",
            "12732041-22ea-4fb5-af30-4a96bd4bb369",
            "e466fa89-043c-41b7-90c4-c264af9cc736",
            "24a1f8ad-ddf1-4dcf-9878-f3bf3e6c3be5",
            "acca41fb-1edc-4dba-a13d-bc47d5821b8f",
            "dfddfb23-5480-4676-92e2-8be02faef6d8",
            "97648262-8f5a-4629-8e6c-7bdcd1dd7b40",
            "eb92aafb-852c-4cbe-8bc6-9ee444d12005",
            "03688503-02a9-4df7-8c60-4b16c8d54d4b",
            "74c48ae7-5e75-4d8d-88c4-836d21f52816",
          ];
          uids.forEach((uid) => {
            state.aiResponses[uid] = action.payload;
          });
        }
      )
      .addCase(
        fetchPredictLoyer.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.aiResponses["e025396f-8782-42ab-9d0e-d8ad097bce7e"] =
            action.payload;
        }
      )
      .addCase(
        fetchCotisationsSalariales.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.aiResponses["6f0256f5-2e43-4088-bc12-468b7ad680e3"] =
            action.payload;
        }
      );
  },
});

export default questionsSlice.reducer;
