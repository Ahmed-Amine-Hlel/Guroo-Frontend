// /domain/entities/Block.ts
import {Question} from "./Question";

export interface Block {
    id: number;
    label: string;
    startRow?: number
    endRow?: number
    questions: Question[];
    blocks: Block[];
}

