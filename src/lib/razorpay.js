"use client"

export function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export function getRazorpyaOptions(res) {
  return {
    key: process.env.NEXT_PUBLIC_RAZORPAY_CLIENT_ID,
    amount: res.amount,
    currency: "INR",
    name: "WellnessZ",
    description: "Payment",
    order_id: res.orderId,
    handler: function () { },
    prefill: {
      name: "Client Name",
      email: "abc@gmail.com",
      contact: "+91 XXXXX XXXXX",
    },
    theme: { color: "#EE3324" }, // Updated to emerald color
  };
}