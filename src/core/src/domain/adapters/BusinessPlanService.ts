import { BusinessPlan } from "../entities/BusinessPlan";

export interface BusinessPlanService {
  getBusinessPlans(): Promise<BusinessPlan[]>;
  createBusinessPlan(businessPlan: BusinessPlan): Promise<BusinessPlan>;
  deleteBusinessPlans(id: string): Promise<string>;
}
