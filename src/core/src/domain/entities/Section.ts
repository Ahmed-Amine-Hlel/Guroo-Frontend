///domain/entities/Section.ts
import { Block } from "./Block";

export interface Section {
  id: number;
  blocks: Block[];
}
