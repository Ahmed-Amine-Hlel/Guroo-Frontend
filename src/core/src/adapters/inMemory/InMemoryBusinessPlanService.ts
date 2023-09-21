import { BusinessPlanService } from "../../domain/adapters/BusinessPlanService";
import { BusinessPlan } from "../../domain/entities/BusinessPlan";
import { BusinessPlanQuestionsWithAnswersResponse } from "../realDependencies/GurooBusinessPlanService";

export class InMemoryBusinessPlanService implements BusinessPlanService {
  private businessPlans: BusinessPlan[];

  constructor(businessPlanFixtures: BusinessPlan[]) {
    this.businessPlans = [...businessPlanFixtures];
  }
  getBusinessPlanQuestionsWithAnswers(
    _sectionId: number,
    _businessPlanUid: string
  ): Promise<BusinessPlanQuestionsWithAnswersResponse> {
    throw new Error("Method not implemented.");
  }
  markBusinessPlanAsDone(_uid: string): Promise<any> {
    throw new Error("Method not implemented.");
  }

  getBusinessPlans(): Promise<BusinessPlan[]> {
    return Promise.resolve(this.businessPlans);
  }

  createBusinessPlan(businessPlan: BusinessPlan): Promise<BusinessPlan> {
    businessPlan.uid = Math.random().toString(36).substring(2, 11);
    this.businessPlans.push(businessPlan);
    return Promise.resolve(businessPlan);
  }

  deleteBusinessPlans(id: string): Promise<string> {
    this.businessPlans = this.businessPlans.filter((bp) => bp.uid !== id);
    return Promise.resolve(`BusinessPlan with ID ${id} deleted successfully.`);
  }

  async createBusinessPlanRevision(
    businessPlanUid: string
  ): Promise<BusinessPlan> {
    const businessPlan = this.businessPlans.find(
      (bp) => bp.uid === businessPlanUid
    );
    if (!businessPlan) {
      throw new Error("Business Plan not found.");
    }
    const revision = { ...businessPlan, uid: Math.random().toString() };
    this.businessPlans.push(revision);
    return revision;
  }
}
