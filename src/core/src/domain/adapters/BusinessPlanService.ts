import { BusinessPlan } from "../entities/BusinessPlan";

export interface BusinessPlanService {
  getBusinessPlans(): Promise<BusinessPlan[]>;
  createBusinessPlan(businessPlan: BusinessPlan): Promise<BusinessPlan>;
  deleteBusinessPlans(uid: string): Promise<string>;
  markBusinessPlanAsDone(uid: string): Promise<any>;
}
