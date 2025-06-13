"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaChevronRight, FaClock } from "react-icons/fa";

export default function SlotSelection() {
  const router = useRouter();
  const [selectedDay, setSelectedDay] = useState("MAR 18");
  const [selectedSlot, setSelectedSlot] = useState("06:30 AM");

  const days = [
    "MAR 18 TUE",
    "MAR 19 WED",
    "MAR 20 THU",
    "MAR 21 FRI",
    "MAR 22 SAT",
    "MAR 23 SUN",
    "MAR 24 MON",
  ];

  const slots = {
    Morning: [
      "06:30 AM",
      "08:00 AM",
      "10:15 AM",
      "10:45 AM",
      "11:15 AM",
      "11:45 AM",
    ],
    Afternoon: [
      "12:45 PM",
      "01:15 PM",
      "01:45 PM",
      "02:15 PM",
      "03:30 PM",
      "04:00 PM",
      "04:30 PM",
      "05:00 PM",
      "05:30 PM",
      "06:00 PM",
    ],
    Evening: [
      "07:00 PM",
      "07:30 PM",
      "08:00 PM",
      "08:30 PM",
      "09:00 PM",
      "09:30 PM",
    ],
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Navbar */}
      <div className="flex flex-col md:flex-row justify-between items-center py-4 px-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl md:text-3xl font-bold text-[#00B7AB]">
          Dr <span className="text-green-600">PathLabs</span>
        </h1>
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-2 text-gray-600 font-medium">
          <span className="flex items-center gap-1">
            <FaUser /> Member Details
          </span>
          <span className="flex items-center gap-1">
            <FaChevronRight /> Address
          </span>
          <span className="text-[#00B7AB] flex items-center gap-1">
            <FaChevronRight /> Slot
          </span>
        </div>
      </div>

      {/* Slot Selection Section */}
      <h1 className="text-lg font-semibold mt-6">
        When should we collect the sample?
      </h1>
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        {/* Left Side: Days and Slots */}
        <div className="w-full md:w-3/5 bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Select day</h2>
          <div className="flex gap-2 overflow-x-auto pb-4">
            {days.map((day) => (
              <button
                key={day}
                className={`px-4 py-2 rounded-md border ${
                  selectedDay === day
                    ? "bg-[#00B7AB] text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => setSelectedDay(day)}
              >
                {day}
              </button>
            ))}
          </div>

          <h2 className="text-lg font-semibold mt-6">
            Select preferred time slot
          </h2>
          {Object.entries(slots).map(([time, slotArray]) => (
            <div key={time} className="mt-4">
              <h3 className="text-md font-medium flex items-center gap-2">
                <FaClock /> {time}
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {slotArray.map((slot) => (
                  <button
                    key={slot}
                    className={`px-4 py-2 rounded-md border ${
                      selectedSlot === slot
                        ? "bg-[#00B7AB] text-white"
                        : "bg-gray-100"
                    }`}
                    onClick={() => setSelectedSlot(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Side Summary */}
        <div className="w-full md:w-2/5 bg-white p-6 shadow-md rounded-lg">
          <div className="bg-gray-100 p-5 rounded-md">
            <h3 className="text-lg font-semibold">1 member added</h3>
            <div className="flex gap-2">
              <p className="text-gray-600 mt-3 line-through">₹510</p>
              <p className="text-[#00B7AB] mt-2 text-xl font-bold">₹490</p>
            </div>
          </div>
          <div className="mt-4 bg-gray-100 p-4 rounded-md">
            <h4 className="font-semibold">Collection from</h4>
            <p className="text-gray-700 mt-1">Home</p>
            <p className="text-gray-600 text-sm">
              4444, 94, 16th B Main Rd, Koramangala, Bengaluru
            </p>
            <button className="mt-2 text-[#00B7AB] underline">
              Change Address
            </button>
          </div>
          <button
            className="mt-4 w-full bg-[#00B7AB] text-white font-medium p-3 rounded-md"
            onClick={() => router.push("/review-order")}
          >
            Review Order
          </button>
        </div>
      </div>
    </div>
  );
}
