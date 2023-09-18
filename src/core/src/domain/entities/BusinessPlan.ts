import { Payment } from "./Payment";

export interface BusinessPlan {
  uid?: string;
  userId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  title: string;
  description?: string;
  section?: number;
  isDone?: boolean;
  isRevision?: boolean;
  isPaid?: boolean;
  doneAt?: Date;
  availableRevisions?: number;
  parentId?: string;
  children?: BusinessPlan[];
  payments?: Payment[];
}
