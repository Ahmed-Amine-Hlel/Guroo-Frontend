export interface PaymentPrice {
  id: string;
  amount: number;
  currency: string;
  nickname: "premium" | "plus" | "free" | "classic";
}
