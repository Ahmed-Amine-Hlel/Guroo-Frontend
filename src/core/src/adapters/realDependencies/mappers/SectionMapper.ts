import { Mapper } from "../../../domain/models/Mappers";
import { Section } from "../../../domain/entities/Section";
import { BlockMapper } from "./BlockMapper";

export class SectionMapper implements Mapper<Section, any> {
  private blockMapper = new BlockMapper();

  toDomain(raw: any): Section {
    return {
      id: raw.id,
      blocks: raw.blocks.map((blockData: any) =>
        this.blockMapper.toDomain(blockData)
      ),
    };
  }
}
