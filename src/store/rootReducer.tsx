import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import businessPlanSlice from "./businessPlan/businessPlanSlice";
import StepperSlice from "./StepperSlice";
import QuestionsSlice from "./QuestionsSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  businessPlan: businessPlanSlice,
  stepper: StepperSlice,
  questions: QuestionsSlice,
});

export default rootReducer;
