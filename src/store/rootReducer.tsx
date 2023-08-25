import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import businessPlanSlice from "./businessPlan/businessPlanSlice";
import StepperSlice from "./StepperSlice";
import QuestionsSlice from "./QuestionsSlice";
import answersSlice from "./answersSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  businessPlan: businessPlanSlice,
  stepper: StepperSlice,
  questions: QuestionsSlice,
  answers: answersSlice,
});

export default rootReducer;
