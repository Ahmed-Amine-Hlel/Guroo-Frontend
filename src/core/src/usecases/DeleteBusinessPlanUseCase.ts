import { UseCase } from "./UseCase";
import { BusinessPlanService } from "../domain/adapters/BusinessPlanService";

export interface DeleteBusinessPlanCommand {
  id: string;
}

export class DeleteBusinessPlan
  implements UseCase<DeleteBusinessPlanCommand, Promise<string>>
{
  constructor(private businessPlanService: BusinessPlanService) {}

  async execute(request: DeleteBusinessPlanCommand): Promise<string> {
    const { id } = request;
    return await this.businessPlanService.deleteBusinessPlans(id);
  }
}
