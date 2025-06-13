"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CouponsSidebar from "@/components/CouponsSidebar";
import {
  FaUser,
  FaRupeeSign,
  FaCheckCircle,
  FaTrash,
  FaPlus,
  FaChevronRight,
  FaTag,
} from "react-icons/fa";
import router from "next/router";

export default function MedicalTestBooking() {
  const router = useRouter(); // ✅ Initialize router
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Yawar",
      age: 25,
      gender: "male",
      tests: [{ name: "Complete Blood Count (CBC)", price: 380 }],
    },
  ]);

  const [showCoupons, setShowCoupons] = useState(false);
  const [totalMRP, setTotalMRP] = useState(420);
  const [discount, setDiscount] = useState(40);
  const [collectionCharge, setCollectionCharge] = useState(150);

  const addMember = () => {
    setMembers([
      ...members,
      { id: members.length + 1, name: "", age: 0, gender: "", tests: [] },
    ]);
  };

  const removeTest = (memberIndex: number, testIndex: number) => {
    const updatedMembers = [...members];
    updatedMembers[memberIndex].tests.splice(testIndex, 1);
    setMembers(updatedMembers);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Navbar */}
      <div className="flex flex-col md:flex-row justify-between items-center py-4 px-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-[#00B7AB] mb-4 md:mb-0">
          Dr <span className="text-green-600">PathLabs</span>
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-gray-600 font-medium">
          <span className="text-[#00B7AB] flex items-center gap-1">
            <FaUser /> Member Details
          </span>
          <span className="flex items-center gap-1">
            <FaChevronRight /> Address
          </span>
          <span className="flex items-center gap-1">
            <FaChevronRight /> Slot
          </span>
        </div>
      </div>

      {/* Main Container */}
      <h1 className="font-semibold text-lg mt-7">Who is getting tested?</h1>
      <div className="flex flex-col md:flex-row gap-6 mt-2">
        {/* Left Side */}
        <div className="w-full md:w-3/5 flex flex-col">
          {members.map((member, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg border border-gray-200 mt-2"
            >
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <FaUser className="text-[#00B7AB]" /> Member {member.id}
              </h3>

              <div className="flex flex-col md:flex-row justify-between">
                {/* Left - Member Details */}
                <div className="w-full md:w-1/2 pr-4">
                  <div className="flex items-center gap-2 mb-4 mt-5">
                    <input
                      type="checkbox"
                      checked
                      disabled
                      className="w-5 h-5 text-[#00B7AB]"
                    />
                    <label className="text-gray-700 font-medium">
                      Testing for myself
                    </label>
                  </div>
                  <div className="mb-4">
                    <label className="text-gray-600 text-sm">Full name *</label>
                    <input
                      value={member.name}
                      readOnly
                      className="mt-1 p-2 border rounded-md w-full bg-gray-100"
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <div>
                      <label className="text-gray-600 text-sm">Age *</label>
                      <input
                        type="number"
                        value={member.age}
                        readOnly
                        className="mt-1 p-2 border rounded-md w-20 bg-gray-100"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        value="male"
                        checked
                        disabled
                        className="w-4 h-4 text-[#00B7AB]"
                      />
                      <label>Male</label>
                      <input
                        type="radio"
                        value="female"
                        disabled
                        className="w-4 h-4 text-[#00B7AB]"
                      />
                      <label>Female</label>
                    </div>
                  </div>
                </div>

                {/* Right - Tests */}
                <div className="w-full md:w-1/2">
                  <h3 className="text-gray-700 font-semibold">
                    Tests / Checkups added
                  </h3>
                  {member.tests.map((test, testIndex) => (
                    <div key={testIndex} className="flex justify-between mt-4">
                      <span className="text-gray-700">{test.name}</span>
                      <span className="font-semibold flex items-center gap-1 text-gray-800">
                        <FaRupeeSign className="text-sm" /> {test.price}
                        <FaTrash
                          className="text-[#00B7AB] cursor-pointer"
                          onClick={() => removeTest(index, testIndex)}
                        />
                      </span>
                    </div>
                  ))}
                  <button className="text-[#00B7AB] mt-4 flex items-center gap-2">
                    <FaPlus /> Add test / checkup
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Add Another Member */}
          <button
            className="mt-10 w-full bg-orange-100 flex items-center justify-center gap-2 text-[#00B7AB] font-medium p-3 rounded-md border border-[#00B7AB]"
            onClick={addMember}
          >
            <FaPlus /> Add another member
          </button>

          {/* Additional Details */}
          <h3 className="text-lg font-semibold mt-10">Additional details</h3>
          <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200 mt-2">
            <div className="mt-4">
              <label className="text-gray-700 font-medium">
                Who is your referring doctor?
              </label>
              <div className="flex items-center gap-2 mt-2">
                <input
                  type="radio"
                  checked
                  className="w-4 h-4 border-2 border-gray-300 rounded-full checked:bg-[#00B7AB] checked:text-[#00B7AB] focus:ring-0"
                />

                <label>Myself</label>
              </div>
              <button className="text-[#00B7AB] mt-4 flex items-center gap-2">
                <FaPlus /> Add your doctor
              </button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-2/5 flex flex-col mt-6 md:mt-0">
          {/* Member Summary */}
          <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold">1 member added</h3>
            <button
              className="mt-4 w-full bg-[#00B7AB] flex items-center justify-center gap-2 text-white font-medium p-3 rounded-md"
              onClick={() => router.push("/address")}
            >
              <FaCheckCircle className="text-lg" /> Select Address
            </button>
          </div>

          {/* Offers Section */}
          {/* Coupons Section */}
          <h3 className="text-lg font-semibold mt-7">Offers</h3>
          <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200">
            {/* Button to Open Sidebar */}
            <button
              className="flex items-center gap-2 text-[#00B7AB] font-medium"
              onClick={() => setShowCoupons(true)}
            >
              <FaTag /> View all coupons
            </button>

            {/* Coupons Sidebar */}
            <CouponsSidebar
              showCoupons={showCoupons}
              setShowCoupons={setShowCoupons}
            />
          </div>

          {/* Payment Summary */}
          <h3 className="text-lg font-semibold mt-7">Payment Summary</h3>
          <div className="bg-white mt-2 p-4 border rounded-md">
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
        </div>
      </div>
    </div>
  );
}
