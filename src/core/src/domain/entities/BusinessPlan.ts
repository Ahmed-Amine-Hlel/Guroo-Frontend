import { Payment } from "./Payment";

export interface BusinessPlan {
  uid?: string;
  userUid?: string;
  createdAt?: string;
  updatedAt?: string;
  title: string;
  description?: string;
  section?: number;
  isDone?: boolean;
  isRevision?: boolean;
  isPaid?: boolean;
  doneAt?: string;
  availableRevisions?: number;
  parentId?: string;
  children?: BusinessPlan[];
  payments?: Payment[];
}
