export interface Question {
    id: number;
    uid: string;
    label: string;
    blockId: number;
    inputType: 'number' | 'string' | 'boolean' | 'date' | 'list' | 'percent' | 'MultiInput' | 'GooglePlaces' | 'amount' | 'MultiUnitNumber';
    options?: string;
    validation?: string;
    logic?: string;
    ai: boolean;
    rowNumber: number;
}
