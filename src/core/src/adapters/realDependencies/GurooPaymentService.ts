import {
  CheckoutSessionResponse,
  PaymentService,
} from "../../domain/adapters/PaymentService";
import api from "../../domain/adapters/api";
import { PaymentPrice } from "../../domain/entities/Payment";

class GurooPaymentService implements PaymentService {
  async fetchPaymentPrices(): Promise<PaymentPrice[]> {
    try {
      const response = await api.get("/payment/prices");
      return response.data as PaymentPrice[];
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch payment prices");
    }
  }

  async initiateCheckoutSession(
    priceId: string,
    businessPlanUid: string
  ): Promise<CheckoutSessionResponse> {
    try {
      const response = await api.get(`/payment/session-checkout`, {
        params: {
          priceId: priceId,
          businessPlanUid: businessPlanUid,
        },
      });
      return response.data as CheckoutSessionResponse;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to initiate checkout session");
    }
  }
}

export default GurooPaymentService;
