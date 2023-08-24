import {Mapper} from "../../../domain/models/Mappers";
import {Question} from "../../../domain/entities/Question";

export class QuestionMapper implements Mapper<Question, any> {
    toDomain(raw: any): Question {
        return {
            id: raw.id,
            uid: raw.uid,
            blockId: raw.blockId,
            label: raw.labels,
            inputType: raw.inputType,
            options: raw.options,
            validation: raw.validation,
            logic: raw.logic,
            ai: raw.ai,
            rowNumber: raw.rowNumber,
        };
    }
}
