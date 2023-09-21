import api from "../../domain/adapters/api";
import { BusinessPlanService } from "../../domain/adapters/BusinessPlanService";
import { Block } from "../../domain/entities/Block";
import { BusinessPlan } from "../../domain/entities/BusinessPlan";
import { BusinessPlanMapper } from "./mappers/BusinessPlanMapper";

export interface BusinessPlanQuestionsWithAnswersResponse {
  id: number;
  startRow: number;
  endRow: number;
  createdAt: string;
  updatedAt: string;
  labels: string;
  blocks: Block[];
}

export class GurooBusinessPlanService implements BusinessPlanService {
  constructor(private businessPlanMapper: BusinessPlanMapper) {}

  async getBusinessPlans(): Promise<BusinessPlan[]> {
    try {
      const response = await api.get("/business-plan");
      console.log("response from GurooBusinessPlanService ", response.data);
      const businessPlansData = response.data;
      return businessPlansData.map((data: any) =>
        this.businessPlanMapper.toDomain(data)
      );
    } catch (e) {
      console.log(e);
      throw Error("fetching BusinessPlan failed");
    }
  }

  async getBusinessPlanQuestionsWithAnswers(
    sectionId: number,
    businessPlanUid: string
  ): Promise<BusinessPlanQuestionsWithAnswersResponse> {
    try {
      const response = await api.get(
        `/questions?sectionId=${sectionId}&businessPlanUid=${businessPlanUid}`
      );
      return response.data;
    } catch (e) {
      console.log(e);
      throw Error("Fetching questions with answers failed");
    }
  }

  async createBusinessPlan(businessPlan: BusinessPlan): Promise<BusinessPlan> {
    try {
      const response = await api.post("/business-plan/create", businessPlan);
      return response.data.businessPlanProperties || response.data;
    } catch (e) {
      console.log(e);
      throw Error("Creating BusinessPlan failed");
    }
  }

  async deleteBusinessPlans(uid: string): Promise<string> {
    try {
      const response = await api.delete(`/business-plan/${uid}`);
      return response.data.message;
    } catch (e) {
      console.log(e);
      throw Error("deleting BusinessPlan failed");
    }
  }

  async markBusinessPlanAsDone(uid: string): Promise<any> {
    try {
      const response = await api.post("/business-plan/done", {
        businessPlanUid: uid,
      });
      return response.data;
    } catch (e) {
      console.log(e);
      throw Error("Marking BusinessPlan as done failed");
    }
  }

  async createBusinessPlanRevision(
    businessPlanUid: string
  ): Promise<BusinessPlan> {
    try {
      const response = await api.get(
        `/business-plan/revision/${businessPlanUid}`
      );
      return this.businessPlanMapper.toDomain(response.data);
    } catch (e) {
      console.log(e);
      throw Error("Creating BusinessPlan revision failed");
    }
  }
}
