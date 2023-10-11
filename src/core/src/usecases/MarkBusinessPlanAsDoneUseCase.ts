import { UseCase } from "./UseCase";
import { BusinessPlanService } from "../domain/adapters/BusinessPlanService";

export class MarkBusinessPlanAsDoneUseCase
  implements UseCase<string, Promise<any>>
{
  constructor(private businessPlanService: BusinessPlanService) {}

  async execute(uid: string): Promise<any> {
    return this.businessPlanService.markBusinessPlanAsDone(uid);
  }
}
