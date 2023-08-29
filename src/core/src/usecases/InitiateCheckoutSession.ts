import {
  CheckoutSessionResponse,
  PaymentService,
} from "../domain/adapters/PaymentService";

export class InitiateCheckoutSession {
  private paymentService: PaymentService;

  constructor(paymentService: PaymentService) {
    this.paymentService = paymentService;
  }

  async execute(
    priceId: string,
    businessPlanUid: string
  ): Promise<CheckoutSessionResponse> {
    return this.paymentService.initiateCheckoutSession(
      priceId,
      businessPlanUid
    );
  }
}
