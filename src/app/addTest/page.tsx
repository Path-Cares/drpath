"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function AddTest() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"tests" | "checkups">("tests");

  return (
    <>
      {/* Button to Open Modal */}
      <button
        className="px-5 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600"
        onClick={() => setIsModalOpen(true)}
      >
        Add test/checkup
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white w-[40%] p-6 rounded-lg shadow-lg">
            {/* Search & Close Button */}
            <div className="flex justify-between items-center mb-4">
              <input
                type="text"
                placeholder="Search for tests or checkups"
                className="w-full p-2 border rounded-lg"
              />
              <button onClick={() => setIsModalOpen(false)} className="ml-3">
                <X className="w-6 h-6 text-gray-600 hover:text-gray-800" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex space-x-2 border-b pb-2">
              <button
                className={`w-1/2 py-2 text-center ${
                  activeTab === "tests"
                    ? "bg-green-500 text-white rounded-lg"
                    : "bg-gray-200"
                }`}
                onClick={() => setActiveTab("tests")}
              >
                Tests
              </button>
              <button
                className={`w-1/2 py-2 text-center ${
                  activeTab === "checkups"
                    ? "bg-green-500 text-white rounded-lg"
                    : "bg-gray-200"
                }`}
                onClick={() => setActiveTab("checkups")}
              >
                Checkups
              </button>
            </div>

            {/* Dynamic Content Based on Tab */}
            <div className="mt-4 h-64 overflow-y-auto">
              {activeTab === "tests" ? <TestList /> : <CheckupList />}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ✅ Tests List */
const TestList = () => {
  const tests = [
    {
      name: "Complete Blood Count (CBC)",
      price: "₹380",
      oldPrice: "₹420",
      reportsIn: "6 hours",
      description:
        "24 tests: RBC count, Hb, Haemoglobin, Haematocrit & 21 others.",
    },
    {
      name: "Glycosylated Haemoglobin (HbA1c)",
      price: "₹490",
      oldPrice: "₹618",
      reportsIn: "6 hours",
      description: "Diabetes test, Hemoglobin A1c, Glycated Hemoglobin Test.",
    },
  ];

  return (
    <div>
      {tests.map((test, index) => (
        <div key={index} className="p-4 border rounded-lg mb-3">
          <div className="flex justify-between">
            <h3 className="font-semibold">{test.name}</h3>
            <button className="px-3 py-1 bg-green-500 text-white rounded-lg">
              + Add
            </button>
          </div>
          <p className="text-sm text-gray-500">
            Reports within{" "}
            <span className="text-orange-500">{test.reportsIn}</span>
          </p>
          <p className="text-sm text-gray-400">{test.description}</p>
          <p className="text-sm text-gray-800">
            <span className="line-through text-gray-400">{test.oldPrice}</span>{" "}
            <span className="font-bold">{test.price}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

/* ✅ Checkups List */
const CheckupList = () => {
  const checkups = [
    {
      name: "Full Body Checkup",
      price: "₹1200",
      oldPrice: "₹1500",
      reportsIn: "12 hours",
      description:
        "Covers 50+ tests including liver, kidney, and blood analysis.",
    },
    {
      name: "Heart Health Checkup",
      price: "₹900",
      oldPrice: "₹1100",
      reportsIn: "24 hours",
      description: "Includes ECG, cholesterol, and blood pressure monitoring.",
    },
  ];

  return (
    <div>
      {checkups.map((checkup, index) => (
        <div key={index} className="p-4 border rounded-lg mb-3">
          <div className="flex justify-between">
            <h3 className="font-semibold">{checkup.name}</h3>
            <button className="px-3 py-1 bg-green-500 text-white rounded-lg">
              + Add
            </button>
          </div>
          <p className="text-sm text-gray-500">
            Reports within{" "}
            <span className="text-orange-500">{checkup.reportsIn}</span>
          </p>
          <p className="text-sm text-gray-400">{checkup.description}</p>
          <p className="text-sm text-gray-800">
            <span className="line-through text-gray-400">
              {checkup.oldPrice}
            </span>{" "}
            <span className="font-bold">{checkup.price}</span>
          </p>
        </div>
      ))}
    </div>
  );
};
