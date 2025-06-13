"use client";

import { useModal } from "@/context/ModalContext";
import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Import useRouter
import { X } from "lucide-react";

export default function AddTest() {
  const { isModalOpen, closeModal } = useModal();
  const router = useRouter(); // ✅ Use Next.js router for navigation
  const [activeTab, setActiveTab] = useState<"tests" | "checkups">("tests");
  const [cart, setCart] = useState<
    { id: number; name: string; price: number }[]
  >([]);

  const tests = [
    {
      id: 1,
      name: "Complete Blood Count (CBC)",
      price: 380,
      originalPrice: 420,
    },
    {
      id: 2,
      name: "Glycosylated Haemoglobin (HbA1c)",
      price: 490,
      originalPrice: 618,
    },
    { id: 3, name: "Lipid Profile", price: 700, originalPrice: 850 },
    {
      id: 4,
      name: "Liver Function Test (LFT)",
      price: 600,
      originalPrice: 750,
    },
    {
      id: 5,
      name: "Thyroid Function Test (TFT)",
      price: 550,
      originalPrice: 700,
    },
  ];

  const checkups = [
    { id: 6, name: "Full Body Checkup", price: 1200, originalPrice: 1500 },
    { id: 7, name: "Heart Health Checkup", price: 900, originalPrice: 1100 },
    { id: 8, name: "Diabetes Screening", price: 800, originalPrice: 950 },
    { id: 9, name: "Kidney Function Test", price: 700, originalPrice: 850 },
    {
      id: 10,
      name: "Vitamin Deficiency Panel",
      price: 1300,
      originalPrice: 1600,
    },
  ];

  // ✅ Handle Add & Remove from Cart
  const toggleCart = (test: { id: number; name: string; price: number }) => {
    if (cart.some((item) => item.id === test.id)) {
      setCart(cart.filter((item) => item.id !== test.id)); // Remove from cart
    } else {
      setCart([...cart, test]); // Add to cart
    }
  };

  // ✅ Handle Proceed Button Click → Close modal & Redirect to /login
  const handleProceed = () => {
    closeModal(); // ✅ Close the modal before redirection
    router.push("/login-city"); // ✅ Redirect to Login page
  };

  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-lg z-[9999]"
      onClick={closeModal}
    >
      <div
        className="bg-white w-[90%] sm:w-[70%] md:w-[60%] lg:w-[40%] p-6 rounded-lg shadow-lg max-h-[90vh] overflow-y-auto relative z-[10000] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search & Close Button */}
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search for tests or checkups"
            className="w-full p-2 border rounded-lg"
          />
          <button onClick={closeModal} className="ml-3">
            <X className="w-6 h-6 text-gray-600 hover:text-gray-800" />
          </button>
        </div>

        {/* Tabs for Tests & Checkups */}
        <div className="flex space-x-2 border-b pb-2 flex-wrap sm:flex-nowrap">
          <button
            className={`w-full sm:w-1/2 py-2 text-center ${
              activeTab === "tests"
                ? "bg-[#00B7AB] text-white rounded-lg"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("tests")}
          >
            Tests
          </button>
          <button
            className={`w-full sm:w-1/2 py-2 text-center ${
              activeTab === "checkups"
                ? "bg-[#00B7AB] text-white rounded-lg"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("checkups")}
          >
            Checkups
          </button>
        </div>

        {/* Display List Based on Active Tab */}
        <div className="mt-4 h-[55vh] overflow-y-auto flex-1">
          {(activeTab === "tests" ? tests : checkups).map((item) => (
            <div key={item.id} className="p-4 border rounded-lg mb-3">
              <div className="flex justify-between">
                <h3 className="font-semibold">{item.name}</h3>
                <button
                  className={`px-3 py-1 rounded-lg ${
                    cart.some((i) => i.id === item.id)
                      ? "bg-gray-400 text-white"
                      : "bg-[#00B7AB] text-white"
                  }`}
                  onClick={() => toggleCart(item)}
                >
                  {cart.some((i) => i.id === item.id) ? "Added" : "+ Add"}
                </button>
              </div>
              <p className="text-sm text-gray-500">Reports within 6 hours</p>
              <p className="text-sm text-gray-400">
                <span className="line-through text-gray-400">
                  ₹{item.originalPrice}
                </span>{" "}
                <span className="font-bold">₹{item.price}</span>
              </p>
            </div>
          ))}
        </div>

        {/* View Cart & Proceed (Inside Modal at the Bottom) */}
        {cart.length > 0 && (
          <div className="w-full bg-white p-4 border-t shadow-lg flex flex-col sm:flex-row justify-between items-center mt-4">
            <div className="mb-4 sm:mb-0">
              <p className="text-sm font-bold">
                ₹{cart.reduce((total, item) => total + item.price, 0)}
              </p>
              <p className="text-xs text-gray-500">{cart.length} Item(s)</p>
              <button className="text-sm text-[#00B7AB] underline">
                View Cart
              </button>
            </div>
            <button
              className="px-4 py-2 bg-[#00B7AB] text-white rounded-lg"
              onClick={handleProceed} // ✅ Click → Close Modal & Redirect
            >
              Proceed
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
