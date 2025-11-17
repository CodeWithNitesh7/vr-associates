import axiosInstance from "./axiosInstance";

// Create Razorpay Order
export const createOrder = async (amount) => {
  try {
    const response = await axiosInstance.post("/razorpay/create-order", {
      amount,
    });
    return response.data;
  } catch (error) {
    console.log("Error creating Razorpay order:", error);
    throw error;
  }
};

// Verify Razorpay Payment
export const verifyPayment = async (paymentData) => {
  try {
    const response = await axiosInstance.post("/razorpay/verify-payment", paymentData);
    return response.data;
  } catch (error) {
    console.log("Error verifying Razorpay payment:", error);
    throw error;
  }
};
