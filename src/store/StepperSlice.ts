import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const MAX_STEPS = 7;

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
    resetCurrentStep: () => initialState,
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    incrementStep: (state) => {
      if (state.currentStep < MAX_STEPS) {
        state.currentStep += 1;
      }
    },
    decrementStep: (state) => {
      if (state.currentStep > 1) {
        state.currentStep -= 1;
      }
    },
  },
});

export const {
  resetCurrentStep,
  setCurrentStep,
  incrementStep,
  decrementStep,
} = stepperSlice.actions;
export default stepperSlice.reducer;
