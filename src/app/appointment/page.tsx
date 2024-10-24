"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Image from "next/image";

const AppointmentContent = ({ closeModal }: { closeModal: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    address: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/email`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 200) {
        toast.success("Email sent successfully");
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <section className="relative px-5 lg:px-20 xl:px-24 2xl:px-56 pb-20 lg:my-12 py-10">
      <Toaster />
      
      {/* Close button */}
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" // Adjusted margin and position
      >
        ✕
      </button>
      
      <h1 className="text-3xl font-bold text-center pb-3">Book Appointment</h1>
      <form method="POST" onSubmit={handleSubmit}>
        <div className="grid gap-5 lg:gap-8">
          <input
            type="text"
            onKeyDown={(e) => /[a-z]/i.test(e.key)}
            onChange={handleChange}
            placeholder="Name"
            name="name"
            className="px-3 py-2 rounded-lg outline-none border-b-2 border-[#00B7AB] focus:border-[#1F2259] hover:border-[#1F2259] focus-visible:border-[#1F2259]"
            required
          />
          <input
            type="text"
            name="number"
            maxLength={10}
            minLength={10}
            onChange={handleChange}
            placeholder="Phone Number"
            className="px-3 py-2 rounded-lg outline-none border-b-2 border-[#00B7AB] focus:border-[#1F2259] hover:border-[#1F2259] focus-visible:border-[#1F2259]"
            required
          />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Email"
            className="px-3 py-2 rounded-lg outline-none border-b-2 border-[#00B7AB] focus:border-[#1F2259] hover:border-[#1F2259] focus-visible:border-[#1F2259]"
            required
          />
          <input
            type="date"
            name="date"
            onChange={handleChange}
            className="px-3 py-2 rounded-lg outline-none border-b-2 border-[#00B7AB] focus:border-[#1F2259] hover:border-[#1F2259] focus-visible:border-[#1F2259]"
            required
          />
          <input
            type="time"
            name="time"
            onChange={handleChange}
            className="px-3 py-2 rounded-lg outline-none border-b-2 border-[#00B7AB] focus:border-[#1F2259] hover:border-[#1F2259] focus-visible:border-[#1F2259]"
            required
          />
          <button
            type="submit"
            className="bg-[#00B7AB] text-white px-3 py-2 rounded-2xl mt-5 hover:bg-[#46716f] duration-300"
          >
            Book An Appointment
          </button>
        </div>
      </form>
    </section>
  );
};

export default AppointmentContent;
