import { AnswerService } from "../domain/adapters/AnswerService";
import { Answer } from "../domain/entities/Answer";
import { UseCase } from "./UseCase";

export class SubmitAnswersUseCase implements UseCase<Answer[], Promise<void>> {
  constructor(private answerService: AnswerService) {}

  async execute(answers: Answer[]): Promise<void> {
    return this.answerService.submitAnswers(answers);
  }
}
