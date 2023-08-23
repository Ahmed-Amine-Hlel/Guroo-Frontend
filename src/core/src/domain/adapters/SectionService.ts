import { Section } from "../entities/Section";

export interface SectionService {
  getSections(id: number): Promise<Section>;
}
