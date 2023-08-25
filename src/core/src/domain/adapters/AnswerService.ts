import { Answer } from "../entities/Answer";

export interface AnswerService {
  submitAnswers(answers: Answer[]): Promise<void>;
}
