import { BusinessPlan } from "../entities/BusinessPlan";

export interface BusinessPlanService {
  getBusinessPlans(): Promise<BusinessPlan[]>;
}
