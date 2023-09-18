import { Mapper } from "../../../domain/models/Mappers";
import { BusinessPlan } from "../../../domain/entities/BusinessPlan";

export class BusinessPlanMapper implements Mapper<BusinessPlan> {
  toDomain(raw: any): BusinessPlan {
    const {
      uid,
      userId,
      createdAt,
      updatedAt,
      title,
      description,
      section,
      isDone,
      isRevision,
      isPaid,
      doneAt,
      availableRevisions,
      parentId,
      children,
      payments,
    } = raw;
    return {
      uid,
      userId,
      createdAt,
      updatedAt,
      title,
      description,
      section,
      isDone,
      isRevision,
      isPaid,
      doneAt,
      availableRevisions,
      parentId,
      children,
      payments,
    };
  }
}
