/* eslint-disable @typescript-eslint/no-namespace */
export class DomainError extends Error {
  cause?: any;

  constructor(message: string, cause?: any) {
    super(message);
    this.name = this.constructor.name;
    this.cause = cause;
  }
}

//TODO : Check those !
export namespace AuthenticationServiceError {
  export class GoogleAuthFailed extends DomainError {}
}

export namespace PaymentServiceError {
  export class PaymentFailed extends DomainError {}
}
