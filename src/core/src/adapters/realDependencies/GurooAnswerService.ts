import { AnswerService } from "../../domain/adapters/AnswerService";
import api from "../../domain/adapters/api";
import { Answer } from "../../domain/entities/Answer";

export class GurooAnswerService implements AnswerService {
  async submitAnswers(answers: Answer[]): Promise<void> {
    try {
      await api.post("https://guroo-back.onrender.com/answers", { answers });
    } catch (e) {
      console.log(e);
      throw Error("Submitting answers failed");
    }
  }
}
