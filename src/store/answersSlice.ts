import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GurooAnswerService } from "../core/src/adapters/realDependencies/GurooAnswerService";
import { SubmitAnswersUseCase } from "../core/src/usecases/SubmitAnswersUseCase";
import { Answer } from "../core/src/domain/entities/Answer";

interface AnswersState {
  answers: Record<string, any>;
  loading: boolean;
  error: string | null;
  progress: Record<string, number>;
}

const initialState: AnswersState = {
  answers: {},
  loading: false,
  error: null,
  progress: {
    section1: 0,
    section2: 0,
    section3: 0,
    section4: 0,
    section5: 0,
    section6: 0,
    section7: 0,
  },
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
    updateProgress: (state, action) => {
      state.progress[action.payload.sectionId] = action.payload.answeredCount;
    },
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

export const { setAnswer, resetAnswers, updateProgress } = answersSlice.actions;

export default answersSlice.reducer;
