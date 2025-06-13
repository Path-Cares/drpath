"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function OtpPage() {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Handle OTP Input Change
  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return; // Allow only digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input field
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle Verify Button Click
  const handleVerify = () => {
    // Navigate to /member when Verify is clicked
    router.push("/member");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-[400px]">
        {/* Back Button */}
        <button onClick={() => router.back()} className="text-gray-600 mb-4">
          ← Back
        </button>

        {/* OTP Heading */}
        <h2 className="text-xl font-semibold text-center mb-2">Enter OTP</h2>
        <p className="text-sm text-gray-600 text-center mb-4">
          Please enter the OTP that has been sent to{" "}
          <span className="font-semibold">+91-7011855275</span>
        </p>

        {/* OTP Input Fields */}
        <div className="flex justify-center space-x-4 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }} // Set ref without returning anything
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-lg"
            />
          ))}
        </div>

        {/* Resend OTP */}
        <p className="text-sm text-gray-600 text-center">
          Didn’t receive the OTP?{" "}
          <span className="font-semibold text-gray-500">Resend in 0:21</span>
        </p>

        {/* Verify Button */}
        <button
          onClick={handleVerify} // Navigate to /member on click
          className="w-full mt-4 py-3 text-white font-semibold rounded-lg bg-gradient-to-r bg-[#00B7AB]"
        >
          Verify
        </button>
      </div>
    </div>
  );
}
