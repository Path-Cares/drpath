"use client";

import { useState } from "react";
import { FaTimes, FaSearch } from "react-icons/fa";

interface CouponsSidebarProps {
  showCoupons: boolean;
  setShowCoupons: (value: boolean) => void;
}

export default function CouponsSidebar({
  showCoupons,
  setShowCoupons,
}: CouponsSidebarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const coupons = [
    {
      id: 1,
      code: "ORANGE15",
      description: "Save ₹114 with this coupon",
      details: "Get 15% off on your first order.",
    },
    {
      id: 2,
      code: "OHFAMILY",
      description: "Get 20% off with this coupon",
      details: "Add a Family Member & Get 30% Off up to ₹800.",
    },
    {
      id: 3,
      code: "HEALTH100",
      description: "Save ₹100 on orders above ₹1000.",
      details: "Applicable for orders above ₹1000.",
    },
    {
      id: 4,
      code: "SUPER50",
      description: "Flat ₹50 off on all tests.",
      details: "Valid for all test bookings.",
    },
  ];

  const filteredCoupons = coupons.filter(
    (coupon) =>
      coupon.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coupon.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {showCoupons && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-end"
          onClick={() => setShowCoupons(false)} // Clicking on the blur closes sidebar
        >
          {/* Sidebar */}
          <div
            className="w-96 h-full bg-white shadow-lg border-l border-gray-200 p-6 overflow-y-auto transition-transform"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside sidebar
          >
            {/* Sidebar Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">All Coupons</h2>
              <FaTimes
                className="text-gray-600 cursor-pointer text-xl"
                onClick={() => setShowCoupons(false)}
              />
            </div>

            {/* Search Input */}
            <div className="relative mb-4">
              <FaSearch className="absolute left-3 top-3 text-gray-500" />
              <input
                type="text"
                placeholder="Enter coupon code"
                className="w-full p-2 pl-10 border rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Available Coupons */}
            <h3 className="text-gray-600 font-semibold mb-2">
              Available coupons
            </h3>
            {filteredCoupons.length > 0 ? (
              filteredCoupons.map((coupon) => (
                <div
                  key={coupon.id}
                  className="bg-gray-100 p-4 rounded-lg mb-4 shadow-sm flex justify-between items-center"
                >
                  <div>
                    <span className="font-medium text-green-600">
                      {coupon.code}
                    </span>
                    <p className="text-gray-700">{coupon.description}</p>
                    <p className="text-sm text-gray-500">{coupon.details}</p>
                  </div>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-md">
                    Apply
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No coupons found.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
