import React from "react";

export default function PaymentSuccess() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-green-50">
      <h1 className="text-4xl font-bold text-green-700 mb-4">
        Payment Successful 🎉
      </h1>
      <p className="text-lg text-gray-700">
        Thank you for subscribing! Our team will contact you soon.
      </p>
    </div>
  );
}
