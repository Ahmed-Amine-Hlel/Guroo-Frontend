// src/redux/businessPlanSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BusinessPlan } from "../../core/src/domain/entities/BusinessPlan";
import { GurooBusinessPlanService } from "../../core/src/adapters/realDependencies/GurooBusinessPlanService";
import { BusinessPlanMapper } from "../../core/src/adapters/realDependencies/mappers/BusinessPlanMapper";
import { GetBusinessPlans } from "../../core/src/usecases/GetBusinessPlans";
// import { DeleteBusinessPlan } from "../../core/src/usecases/DeleteBusinessPlanUseCase";

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

// const deleteBusinessPlanUseCase = new DeleteBusinessPlan(
//   gurooBusinessPlanService
// );

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

// export const deleteBusinessPlanAsync = createAsyncThunk(
//   "businessPlan/delete",
//   async (id: string) => {
//     try {
//       return await deleteBusinessPlanUseCase.execute({ id });
//     } catch (error) {
//       throw new Error(`delete BusinessPlant Failed: ${error}`);
//     }
//   }
// );

// export const createBusinessPlanAsync = createAsyncThunk(
//     'businessPlan/post',
//     async (payload) => {
//         console.log("payload New BP", payload)
//         api.post('/business-plan/create', payload).then(res => {
//             console.log(res)
//             if (res) {
//                 return res.data.businessPlanProperties.id
//
//             }
//         }).catch(reason => {
//             console.log(reason)
//         })
//     }
// );

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
      });
    // .addCase(deleteBusinessPlanAsync.pending, (state) => {
    //   state.loadingBusinessPlan = true;
    //   state.error = null;
    // })
    // .addCase(
    //   deleteBusinessPlanAsync.fulfilled,
    //   (state, action: PayloadAction<string>) => {
    //     state.loadingBusinessPlan = false;
    //     if (state.businessPlan) {
    //       state.businessPlan = state.businessPlan.filter(
    //         (plan) => plan.id !== action.payload
    //       );
    //     }
    //   }
    // )
    // .addCase(deleteBusinessPlanAsync.rejected, (state, action) => {
    //   state.loadingBusinessPlan = false;
    //   state.error =
    //     action.error.message ||
    //     "An error occurred while deleting the BusinessPlans.";
    // });
  },
});

export default businessPlanSlice.reducer;
