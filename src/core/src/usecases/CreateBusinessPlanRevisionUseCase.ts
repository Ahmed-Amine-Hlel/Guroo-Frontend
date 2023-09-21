import { UseCase } from "./UseCase";
import { BusinessPlan } from "../domain/entities/BusinessPlan";
import { BusinessPlanService } from "../domain/adapters/BusinessPlanService";

export class CreateBusinessPlanRevisionUseCase
  implements UseCase<string, Promise<BusinessPlan>>
{
  constructor(private businessPlanService: BusinessPlanService) {}

  async execute(businessPlanUid: string): Promise<BusinessPlan> {
    return await this.businessPlanService.createBusinessPlanRevision(
      businessPlanUid
    );
  }
}
