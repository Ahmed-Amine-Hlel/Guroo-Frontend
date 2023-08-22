import { BusinessPlanService } from "../../domain/adapters/BusinessPlanService";
import { BusinessPlan } from "../../domain/entities/BusinessPlan";

export class InMemoryBusinessPlanService implements BusinessPlanService {
  private businessPlans: BusinessPlan[];

  constructor(businessPlanFixtures: BusinessPlan[]) {
    this.businessPlans = [...businessPlanFixtures];
  }

  getBusinessPlans(): Promise<BusinessPlan[]> {
    return Promise.resolve(this.businessPlans);
  }

  createBusinessPlan(businessPlan: BusinessPlan): Promise<BusinessPlan> {
    businessPlan.id = Math.random().toString(36).substring(2, 11);
    this.businessPlans.push(businessPlan);
    return Promise.resolve(businessPlan);
  }

  deleteBusinessPlans(id: string): Promise<string> {
    this.businessPlans = this.businessPlans.filter((bp) => bp.id !== id);
    return Promise.resolve(`BusinessPlan with ID ${id} deleted successfully.`);
  }
}
