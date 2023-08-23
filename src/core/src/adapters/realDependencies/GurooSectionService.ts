import { Section } from "../../domain/entities/Section";
import { SectionService } from "../../domain/adapters/SectionService";
import api from "../../domain/adapters/api";

export class GurooSectionService implements SectionService {
  constructor() {}

  async getSections(id: number): Promise<Section> {
    try {
      const response = await api.get(`/questions?sectionId=${id}`);
      // console.log("question response", response);
      const sectionsData = response.data as Section;
      return sectionsData;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch sections");
    }
  }
}
