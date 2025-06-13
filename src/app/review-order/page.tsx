"use client";

import { useRouter } from "next/navigation";
import {
  FaUser,
  FaChevronRight,
  FaClock,
  FaTag,
  FaCheckCircle,
} from "react-icons/fa";

export default function ReviewOrder() {
  const router = useRouter();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Navbar */}
      <div className="flex flex-col md:flex-row justify-between items-center py-4 px-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl md:text-3xl font-bold text-[#00B7AB]">
          Dr <span className="text-green-600">PathLabs</span>
        </h1>
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-2 text-gray-400 font-medium">
          <span className="flex items-center gap-1 opacity-50">
            <FaCheckCircle className="text-[#00B7AB]" /> Member Details
          </span>
          <span className="flex items-center gap-1 opacity-50">
            <FaChevronRight /> <FaCheckCircle className="text-[#00B7AB]" />{" "}
            Address
          </span>
          <span className="flex items-center gap-1 opacity-50">
            <FaChevronRight /> <FaCheckCircle className="text-[#00B7AB]" /> Slot
          </span>
        </div>
      </div>

      {/* Review Order Section */}
      <div className="flex flex-col md:flex-row mt-6 gap-6">
        <div className="w-full md:w-3/5 bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Review your order</h2>

          {/* Order Summary */}
          <div className="mt-4">
            <h1 className="font-semibold">Order Summary</h1>
          </div>
          <div className="p-4 border rounded-md">
            <div className="flex justify-between">
              <h3 className="text-md font-semibold">Yawar</h3>
              <button className="text-[#00B7AB] font-medium">Edit</button>
            </div>
            <p className="text-gray-700 text-sm">1 Test</p>
            <p className="text-gray-500 text-sm">
              Final reports by Mar 18, 12:30 PM
            </p>
          </div>

          {/* Sample Collection */}
          <div className="mt-4">
            <h1 className="font-semibold">Sample Collection</h1>
          </div>
          <div className="p-4 border rounded-md mt-1">
            <div className="flex justify-between">
              <h3 className="text-md font-semibold">From Home</h3>
              <button className="text-[#00B7AB] font-medium">Edit</button>
            </div>
            <p className="text-gray-600 text-sm">
              4444, 94, 16th B Main Rd, 4th Block, Koramangala, Bengaluru,
              Karnataka 560095, India
            </p>
            <div className="flex justify-between mt-3">
              <h3 className="text-md font-semibold">Collection 01</h3>
              <button className="text-[#00B7AB] font-medium">Edit</button>
            </div>
            <p className="text-gray-500 text-sm">
              Tuesday | March 18, 2025 | 06:30 AM
            </p>
          </div>

          {/* Additional Information */}
          <div className="flex justify-between mt-4 p-4 bg-gray-100 rounded-md text-gray-700 font-medium">
            <p>Zero Cancellation & Rescheduling Fee</p>
            <p>1 Mn+ samples collected on time</p>
          </div>

          {/* Payment & Refund Policy */}
          <div className="p-4 border rounded-md mt-4">
            <h3 className="text-md font-semibold">Payment & Refund Policy</h3>
            <ul className="text-gray-600 text-sm mt-2 list-disc pl-4">
              <li>We do not accept cash payments.</li>
              <li>All modes of online payments are accepted.</li>
              <li>
                Refunds will be credited back to the source of payment within 3
                hours of order cancellation.
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side Summary */}
        <div className="w-full md:w-2/5 bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">Offers</h3>
          <div className="p-4 border rounded-md">
            <div className="flex justify-between">
              <h3 className="text-md font-semibold">'ORANGE15' applied</h3>
              <button className="text-red-500 font-medium">Remove</button>
            </div>

            <p className="text-gray-500 text-sm mt-2">
              $200 savings in this order.
            </p>
            <button className=" w-full mt-4 flex justify-center items-center gap-2 text-[#00B7AB] font-medium">
              <FaTag /> View all coupons
            </button>
          </div>

          {/* Payment Summary */}
          <h3 className="text-lg font-semibold mt-4">Payment Summary</h3>
          <div className="mt-2 p-4 border rounded-md">
            <div className="flex justify-between mt-3">
              <p>Total MRP </p>
              <p>₹618</p>
            </div>

            <div className="flex justify-between mt-3">
              <p className="text-[#00B7AB]">Discount on MRP </p>
              <p className="text-[#00B7AB]">-₹128</p>
            </div>
            <div className="flex justify-between mt-3">
              <p className="text-gray-600 ">Collection Charges</p>
              <p>
                <span className="text-green-600">FREE</span>
              </p>
            </div>
            <div className="flex justify-between mt-3">
              <p className="font-semibold text-lg">To Pay</p>
              <p className=" text-lg">₹490</p>
            </div>

            <p className="bg-[#d0ebe9] mt-3 text-[#00B7AB] flex w-full items-center justify-center gap-2 rounded-2xl">
              You will save ₹278 on this order.
            </p>
          </div>

          {/* Timer and Payment Button */}
          <div className="mt-4 p-4 border rounded-md flex items-center justify-between">
            <p className="flex w-full items-center justify-center gap-2 rounded-2xl">
              <FaClock className="text-gray-500" />
              06m : 34s left to pay & confirm order
            </p>
          </div>

          <button
            className="mt-4 w-full bg-[#00B7AB] text-white font-medium p-3 rounded-md"
            // onClick={() => router.push("/payment")}
          >
            Pay ₹490 & Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
