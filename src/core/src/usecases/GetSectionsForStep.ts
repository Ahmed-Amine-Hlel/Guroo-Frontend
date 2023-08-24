import { SectionService } from "../domain/adapters/SectionService";
import { Section } from "../domain/entities/Section";

export class GetSectionsForStep {
  constructor(private sectionService: SectionService) {}

  async execute(stepId: number): Promise<Section> {
    return this.sectionService.getSections(stepId);
  }
}
