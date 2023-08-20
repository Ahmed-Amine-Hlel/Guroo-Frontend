import { UseCase } from "./UseCase";
import { BusinessPlan } from "../domain/entities/BusinessPlan";
import { BusinessPlanService } from "../domain/adapters/BusinessPlanService";

export class GetBusinessPlans
  implements UseCase<void, Promise<BusinessPlan[]>>
{
  constructor(private businessPlanService: BusinessPlanService) {}

  async execute(): Promise<BusinessPlan[]> {
    return await this.businessPlanService.getBusinessPlans();
  }
}
