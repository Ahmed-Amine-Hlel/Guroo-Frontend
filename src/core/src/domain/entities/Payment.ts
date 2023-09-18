export interface Payment {
  uid: string;
  userId: string;
  //   paymentStatus: PaymentStatus;
  priceId: string;
  stripeSessionId: string;
  createdAt: Date;
  businessPlanId: string;
}
