import { AxiosInstance } from "axios";
import { GurooAuthenticationService } from "./src/adapters/realDependencies/GurooAuthenticationService";
// import {StripePaymentService} from "./src/adapters/realDependencies/StripePaymentGateway";
import { GoogleAuth } from "./src/usecases/GoogleAuth";
// import {StripePayment} from "./src/usecases/StripePayment";
import { InMemoryAuthenticationService } from "./src/adapters/inMemory/InMemoryAuthenticationService";
import { userFixtures } from "./src/fixtures/userFixtures";
import { UserMapper } from "./src/adapters/realDependencies/mappers/UserMapper";
// import {PaymentMapper} from "./src/adapters/realDependencies/mappers/PaymentMapper";
// import {paymentFixtures} from "./src/fixtures/paymentFixtures";
// import {InMemoryPaymentService} from "./src/adapters/inMemory/InMemoryPaymentService";

export interface CoreConfiguration {
  httpClient: AxiosInstance;
  realDependencies: boolean;
}

export function Core(configuration: CoreConfiguration) {
  const authenticationService = configuration.realDependencies
    ? new GurooAuthenticationService(new UserMapper())
    : new InMemoryAuthenticationService(userFixtures);

  // const PaymentService = configuration.realDependencies
  //     ? new StripePaymentService(new PaymentMapper())
  //     : new InMemoryPaymentService(paymentFixtures);

  const googleAuth = new GoogleAuth(authenticationService);
  // const stripePayment = new StripePayment(PaymentService)
  return {
    googleAuth,
    // stripePayment
  };
}
