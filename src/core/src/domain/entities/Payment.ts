import { PaymentStatus } from "./PaymentStatus";

export interface Payment {
  uid: string;
  userId: string;
  paymentStatus: PaymentStatus;
  priceId: string;
  stripeSessionId: string;
  createdAt: string;
  businessPlanId: string;
}
