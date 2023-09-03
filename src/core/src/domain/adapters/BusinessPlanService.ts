import { BusinessPlanQuestionsWithAnswersResponse } from "../../adapters/realDependencies/GurooBusinessPlanService";
import { BusinessPlan } from "../entities/BusinessPlan";

export interface BusinessPlanService {
  getBusinessPlans(): Promise<BusinessPlan[]>;
  getBusinessPlanQuestionsWithAnswers(
    sectionId: number,
    businessPlanUid: string
  ): Promise<BusinessPlanQuestionsWithAnswersResponse>;
  createBusinessPlan(businessPlan: BusinessPlan): Promise<BusinessPlan>;
  deleteBusinessPlans(uid: string): Promise<string>;
  markBusinessPlanAsDone(uid: string): Promise<any>;
}
