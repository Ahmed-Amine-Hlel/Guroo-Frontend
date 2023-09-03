import { UseCase } from "./UseCase";
import { BusinessPlanService } from "../domain/adapters/BusinessPlanService";
import { BusinessPlanQuestionsWithAnswersResponse } from "../adapters/realDependencies/GurooBusinessPlanService";

export interface GetQuestionsWithAnswersRequest {
  sectionId: number;
  businessPlanUid: string;
}

export class GetBusinessPlanQuestionsWithAnswers
  implements
    UseCase<
      GetQuestionsWithAnswersRequest,
      Promise<BusinessPlanQuestionsWithAnswersResponse>
    >
{
  constructor(private businessPlanService: BusinessPlanService) {}

  async execute(
    request: GetQuestionsWithAnswersRequest
  ): Promise<BusinessPlanQuestionsWithAnswersResponse> {
    return await this.businessPlanService.getBusinessPlanQuestionsWithAnswers(
      request.sectionId,
      request.businessPlanUid
    );
  }
}
