import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import businessPlanSlice from "./businessPlan/businessPlanSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  businessPlan: businessPlanSlice,
});

export default rootReducer;
