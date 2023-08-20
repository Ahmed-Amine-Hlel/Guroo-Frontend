import api from "../../domain/adapters/api";
import { BusinessPlanService } from "../../domain/adapters/BusinessPlanService";
import { BusinessPlan } from "../../domain/entities/BusinessPlan";
import { BusinessPlanMapper } from "./mappers/BusinessPlanMapper";

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
}
