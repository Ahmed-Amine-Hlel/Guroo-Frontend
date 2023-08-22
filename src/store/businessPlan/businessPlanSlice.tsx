// src/redux/businessPlanSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BusinessPlan } from "../../core/src/domain/entities/BusinessPlan";
import { GurooBusinessPlanService } from "../../core/src/adapters/realDependencies/GurooBusinessPlanService";
import { BusinessPlanMapper } from "../../core/src/adapters/realDependencies/mappers/BusinessPlanMapper";
import { GetBusinessPlans } from "../../core/src/usecases/GetBusinessPlans";
import { CreateBusinessPlanUseCase } from "../../core/src/usecases/CreateBusinessPlanUseCase";
import { DeleteBusinessPlan } from "../../core/src/usecases/DeleteBusinessPlanUseCase";

interface businessPlanState {
  businessPlan: BusinessPlan[] | null;
  loadingBusinessPlan: boolean;
  error: string | null;
}

const initialState: businessPlanState = {
  businessPlan: [],
  loadingBusinessPlan: false,
  error: null,
};

const businessPlanMapper = new BusinessPlanMapper();
const gurooBusinessPlanService = new GurooBusinessPlanService(
  businessPlanMapper
);

const getBusinessPlansUseCase = new GetBusinessPlans(gurooBusinessPlanService);
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

export const createBusinessPlanAsync = createAsyncThunk(
  "businessPlan/create",
  async (businessPlan: BusinessPlan) => {
    try {
      return await createBusinessPlanUseCase.execute(businessPlan);
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
  async (id: string, thunkAPI) => {
    try {
      await deleteBusinessPlanUseCase.execute({ id });
      thunkAPI.dispatch(getBusinessPlanAsync());
      return id;
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
              (plan) => plan.id !== action.payload
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
