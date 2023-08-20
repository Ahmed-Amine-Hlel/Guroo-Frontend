import { BusinessPlanService } from "../../domain/adapters/BusinessPlanService";
import { BusinessPlan } from "../../domain/entities/BusinessPlan";

export class InMemoryBusinessPlanService implements BusinessPlanService {
  constructor(private paymentFixtures: BusinessPlan[]) {}

  getBusinessPlans(): Promise<BusinessPlan[]> {
    return Promise.resolve(this.paymentFixtures);
  }
}
