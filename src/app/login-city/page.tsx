"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Import useRouter for navigation

export default function Login() {
  const router = useRouter(); // ✅ Initialize useRouter
  const [mobile, setMobile] = useState("");

  const handleOTPRequest = () => {
    if (mobile.length === 10) {
      alert(`OTP sent to +91 ${mobile}`);
      router.push("/otp"); // ✅ Redirect to OTP page
    } else {
      alert("Please enter a valid 10-digit mobile number");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-[400px]">
        {/* NABL Certified Info Section */}
        <div className="mb-6 flex items-center justify-center">
          <div className="w-full">
            <img
              src="/images/login-city.png"
              alt="NABL Certified"
              className="w-full rounded-md"
            />
          </div>
        </div>

        {/* Login Heading */}
        <h2 className="text-xl font-semibold text-center mb-2">
          Sign in to continue
        </h2>
        <p className="text-sm text-gray-600 text-center mb-4">
          This is to verify your mobile number.
        </p>

        {/* Mobile Number Input */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden px-3 py-2 mb-4">
          <span className="text-gray-600 mr-2">+91</span>
          <input
            type="tel"
            placeholder="999-999-9999"
            className="outline-none w-full text-gray-700"
            maxLength={10}
            value={mobile}
            onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
          />
        </div>

        {/* Get OTP Button */}
        <button
          onClick={handleOTPRequest} // ✅ Navigates to OTP page
          className="w-full py-3 text-white font-semibold rounded-lg bg-gradient-to-r bg-[#00B7AB] "
        >
          Get OTP
        </button>

        {/* Terms & Privacy */}
        <p className="text-xs text-gray-500 text-center mt-4">
          We will send order updates on this number via WhatsApp.
        </p>
        <p className="text-xs text-gray-500 text-center mt-1">
          By continuing you accept our{" "}
          <a href="#" className="text-orange-500 font-semibold">
            T&C
          </a>{" "}
          and{" "}
          <a href="#" className="text-orange-500 font-semibold">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
