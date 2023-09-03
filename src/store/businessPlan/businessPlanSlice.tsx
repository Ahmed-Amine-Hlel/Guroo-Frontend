// src/redux/businessPlanSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BusinessPlan } from "../../core/src/domain/entities/BusinessPlan";
import {
  BusinessPlanQuestionsWithAnswersResponse,
  GurooBusinessPlanService,
} from "../../core/src/adapters/realDependencies/GurooBusinessPlanService";
import { BusinessPlanMapper } from "../../core/src/adapters/realDependencies/mappers/BusinessPlanMapper";
import { GetBusinessPlans } from "../../core/src/usecases/GetBusinessPlans";
import { CreateBusinessPlanUseCase } from "../../core/src/usecases/CreateBusinessPlanUseCase";
import { DeleteBusinessPlan } from "../../core/src/usecases/DeleteBusinessPlanUseCase";
import {
  GetBusinessPlanQuestionsWithAnswers,
  GetQuestionsWithAnswersRequest,
} from "../../core/src/usecases/GetBusinessPlanQuestionsWithAnswers";

interface businessPlanState {
  businessPlan: BusinessPlan[] | null;
  currentBusinessPlan: BusinessPlan | null;
  currentQuestionsWithAnswers: BusinessPlanQuestionsWithAnswersResponse | null;
  loadingBusinessPlan: boolean;
  error: string | null;
}

const initialState: businessPlanState = {
  businessPlan: [],
  currentBusinessPlan: null,
  currentQuestionsWithAnswers: null,
  loadingBusinessPlan: false,
  error: null,
};

const businessPlanMapper = new BusinessPlanMapper();
const gurooBusinessPlanService = new GurooBusinessPlanService(
  businessPlanMapper
);

const getBusinessPlansUseCase = new GetBusinessPlans(gurooBusinessPlanService);
const getBusinessPlanQuestionsWithAnswersUseCase =
  new GetBusinessPlanQuestionsWithAnswers(gurooBusinessPlanService);
const createBusinessPlanUseCase = new CreateBusinessPlanUseCase(
  gurooBusinessPlanService
);

const deleteBusinessPlanUseCase = new DeleteBusinessPlan(
  gurooBusinessPlanService
);

export const getBusinessPlanAsync = createAsyncThunk(
  "businessPlan/fetch",
  async () => {
    try {
      return await getBusinessPlansUseCase.execute();
    } catch (error) {
      throw new Error(`fetch BusinessPlan Failed: ${error}`);
    }
  }
);

export const getBusinessPlanQuestionsWithAnswersAsync = createAsyncThunk(
  "businessPlan/fetchQuestionsWithAnswers",
  async ({ sectionId, businessPlanUid }: GetQuestionsWithAnswersRequest) => {
    try {
      const response = await getBusinessPlanQuestionsWithAnswersUseCase.execute(
        {
          sectionId,
          businessPlanUid,
        }
      );
      // console.log("Questions + Answers :", response);
      return response;
    } catch (error) {
      throw new Error(`Fetching questions with answers failed: ${error}`);
    }
  }
);

export const createBusinessPlanAsync = createAsyncThunk(
  "businessPlan/create",
  async (businessPlan: BusinessPlan) => {
    try {
      const response = await createBusinessPlanUseCase.execute(businessPlan);
      console.log("Backend Response:", response);
      return response;
    } catch (error) {
      throw new Error(`Create BusinessPlan Failed: ${error}`);
    }
  }
);

// export const deleteBusinessPlanAsync = createAsyncThunk(
//   "businessPlan/delete",
//   async (id: string) => {
//     try {
//       await deleteBusinessPlanUseCase.execute({ id });
//       return id;
//     } catch (error) {
//       throw new Error(`delete BusinessPlant Failed: ${error}`);
//     }
//   }
// );

export const deleteBusinessPlanAsync = createAsyncThunk(
  "businessPlan/delete",
  async (uid: string, thunkAPI) => {
    try {
      await deleteBusinessPlanUseCase.execute({ uid });
      thunkAPI.dispatch(getBusinessPlanAsync());
      return uid;
    } catch (error) {
      throw new Error(`delete BusinessPlant Failed: ${error}`);
    }
  }
);

const businessPlanSlice = createSlice({
  name: "businessPlan",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBusinessPlanAsync.pending, (state) => {
        state.loadingBusinessPlan = true;
        state.error = null;
      })
      .addCase(
        getBusinessPlanAsync.fulfilled,
        (state, action: PayloadAction<BusinessPlan[]>) => {
          state.loadingBusinessPlan = false;
          state.businessPlan = action.payload;
        }
      )
      .addCase(getBusinessPlanAsync.rejected, (state, action) => {
        state.loadingBusinessPlan = false;
        state.error =
          action.error.message ||
          "An error occurred while fetching the BusinessPlans.";
      })
      .addCase(getBusinessPlanQuestionsWithAnswersAsync.pending, (state) => {
        state.loadingBusinessPlan = true;
        state.error = null;
      })
      .addCase(
        getBusinessPlanQuestionsWithAnswersAsync.fulfilled,
        (
          state,
          action: PayloadAction<BusinessPlanQuestionsWithAnswersResponse>
        ) => {
          state.loadingBusinessPlan = false;
          state.currentQuestionsWithAnswers = action.payload;
        }
      )
      .addCase(
        getBusinessPlanQuestionsWithAnswersAsync.rejected,
        (state, action) => {
          state.loadingBusinessPlan = false;
          state.error =
            action.error.message ||
            "An error occurred while fetching the questions and answers.";
        }
      )
      .addCase(createBusinessPlanAsync.pending, (state) => {
        state.loadingBusinessPlan = true;
        state.error = null;
      })
      // Handle the fulfilled state for createBusinessPlanAsync
      .addCase(
        createBusinessPlanAsync.fulfilled,
        (state, action: PayloadAction<BusinessPlan>) => {
          state.currentBusinessPlan = action.payload;
        }
      )
      // Handle the rejected state for createBusinessPlanAsync
      .addCase(createBusinessPlanAsync.rejected, (state, action) => {
        state.loadingBusinessPlan = false;
        state.error =
          action.error.message ||
          "An error occurred while creating the BusinessPlan.";
      })
      .addCase(deleteBusinessPlanAsync.pending, (state) => {
        state.loadingBusinessPlan = true;
        state.error = null;
      })
      .addCase(
        deleteBusinessPlanAsync.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.loadingBusinessPlan = false;
          if (state.businessPlan) {
            state.businessPlan = state.businessPlan.filter(
              (plan) => plan.uid !== action.payload
            );
          }
        }
      )
      .addCase(deleteBusinessPlanAsync.rejected, (state, action) => {
        state.loadingBusinessPlan = false;
        state.error =
          action.error.message ||
          "An error occurred while deleting the BusinessPlans.";
      });
  },
});

export default businessPlanSlice.reducer;
