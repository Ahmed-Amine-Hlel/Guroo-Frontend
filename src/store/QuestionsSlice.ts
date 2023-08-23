import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Section } from "../core/src/domain/entities/Section";
import { GetSectionsForStep } from "../core/src/usecases/GetSectionsForStep";
import { GurooSectionService } from "../core/src/adapters/realDependencies/GurooSectionService";

interface QuestionsState {
  section: Section | null;
  loading: boolean;
  error: string | null;
}

const initialState: QuestionsState = {
  section: null,
  loading: false,
  error: null,
};

const gurooSectionService = new GurooSectionService();
const getSectionsForStep = new GetSectionsForStep(gurooSectionService);

export const fetchSectionsForStep = createAsyncThunk(
  "questions/fetchForStep",
  async (stepId: number) => {
    return await getSectionsForStep.execute(stepId);
  }
);

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
      });
  },
});

export default questionsSlice.reducer;
