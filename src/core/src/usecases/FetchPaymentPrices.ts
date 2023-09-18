import { PaymentService } from "../domain/adapters/PaymentService";
import { PaymentPrice } from "../domain/entities/PaymentPrice";

export class FetchPaymentPrices {
  private paymentService: PaymentService;

  constructor(paymentService: PaymentService) {
    this.paymentService = paymentService;
  }

  async execute(): Promise<PaymentPrice[]> {
    return this.paymentService.fetchPaymentPrices();
  }
}
