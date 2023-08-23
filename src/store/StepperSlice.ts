import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StepperState {
  currentStep: number;
}

const initialState: StepperState = {
  currentStep: 1,
};

const stepperSlice = createSlice({
  name: "stepper",
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    incrementStep: (state) => {
      state.currentStep += 1;
    },
    decrementStep: (state) => {
      if (state.currentStep > 1) {
        state.currentStep -= 1;
      }
    },
  },
});

export const { setCurrentStep, incrementStep, decrementStep } =
  stepperSlice.actions;
export default stepperSlice.reducer;
