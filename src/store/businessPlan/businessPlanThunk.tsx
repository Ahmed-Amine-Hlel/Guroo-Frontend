// src/redux/paymentThunks.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
// //import {IPaymentService} from '../core/payment/IPaymentService';
//
// // Define the async thunk action with the IPaymentService as a parameter
export const processPaymentAsync = createAsyncThunk(
  "payment/processPayment",
  async (_amount: number, {}) => {
    // const paymentService: IPaymentService = getState().payment.paymentService;
    // const clientSecret = await paymentService.processPayment(amount);
    //return clientSecret;
    return true;
  }
);
