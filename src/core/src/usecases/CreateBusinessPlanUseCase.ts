import { UseCase } from "./UseCase";
import { BusinessPlan } from "../domain/entities/BusinessPlan";
import { BusinessPlanService } from "../domain/adapters/BusinessPlanService";

export class CreateBusinessPlanUseCase
  implements UseCase<BusinessPlan, Promise<BusinessPlan>>
{
  constructor(private businessPlanService: BusinessPlanService) {}

  async execute(businessPlan: BusinessPlan): Promise<BusinessPlan> {
    return this.businessPlanService.createBusinessPlan(businessPlan);
  }
}
