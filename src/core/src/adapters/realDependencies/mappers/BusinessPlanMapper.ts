import { Mapper } from "../../../domain/models/Mappers";
import { BusinessPlan } from "../../../domain/entities/BusinessPlan";

export class BusinessPlanMapper implements Mapper<BusinessPlan> {
  toDomain(raw: any): BusinessPlan {
    const {
      createdAt,
      description,
      uid,
      isDone,
      availableRevisions,
      section,
      title,
      updatedAt,
      userId,
    } = raw;
    return {
      createdAt,
      description,
      uid,
      isDone,
      availableRevisions,
      section,
      title,
      updatedAt,
      userId,
    };
  }
}
