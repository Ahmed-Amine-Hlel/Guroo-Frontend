import { Mapper } from "../../../domain/models/Mappers";
import { Block } from "../../../domain/entities/Block";
import { QuestionMapper } from "./QuestionMapper";

export class BlockMapper implements Mapper<Block, any> {
  private questionMapper = new QuestionMapper();

  toDomain(raw: any): Block {
    return {
      id: raw.id,
      label: raw.label,
      startRow: raw.startRow,
      endRow: raw.endRow,
      questions: raw.questions.map((questionData: any) =>
        this.questionMapper.toDomain(questionData)
      ),
      blocks: raw.blocks.map((blockData: any) => this.toDomain(blockData)),
    };
  }
}
