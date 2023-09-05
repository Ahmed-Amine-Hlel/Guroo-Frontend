import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GurooAnswerService } from "../core/src/adapters/realDependencies/GurooAnswerService";
import { SubmitAnswersUseCase } from "../core/src/usecases/SubmitAnswersUseCase";
import { Answer } from "../core/src/domain/entities/Answer";

interface AnswersState {
  answers: Record<string, any>;
  loading: boolean;
  error: string | null;
}

const initialState: AnswersState = {
  answers: {},
  loading: false,
  error: null,
};

const gurooAnswerService = new GurooAnswerService();
const submitAnswersUseCase = new SubmitAnswersUseCase(gurooAnswerService);

export const submitAnswersAsync = createAsyncThunk(
  "answers/submit",
  async (answers: Answer[]) => {
    try {
      await submitAnswersUseCase.execute(answers);
    } catch (error) {
      throw new Error(`Submit Answers Failed: ${error}`);
    }
  }
);

const answersSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      state.answers[action.payload.questionUid] = action.payload.value;
    },
    resetAnswers: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitAnswersAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitAnswersAsync.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(submitAnswersAsync.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message ||
          "An error occurred while submitting the answers.";
      });
  },
});

export const { setAnswer, resetAnswers } = answersSlice.actions;

export default answersSlice.reducer;
