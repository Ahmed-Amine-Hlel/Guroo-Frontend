import { PaymentPrice } from "../entities/Payment";

export interface CheckoutSessionResponse {
  stripe_checkout_url: string;
}

export interface PaymentService {
  fetchPaymentPrices(): Promise<PaymentPrice[]>;
  initiateCheckoutSession(
    priceId: string,
    businessPlanUid: string
  ): Promise<CheckoutSessionResponse>;
}
