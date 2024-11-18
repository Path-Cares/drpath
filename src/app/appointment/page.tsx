"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

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
    <section className="relative px-4 md:px-10 lg:px-20 xl:px-24 2xl:px-56 py-10 pb-20 lg:pb-12 bg-white shadow-lg rounded-lg max-w-2xl mx-auto">
      <Toaster />
      
      {/* Close button */}
      <button
        onClick={closeModal}
        className="absolute top-8 right-4 text-gray-500 hover:text-gray-700"
      >
        ✕
      </button>
      
      <h1 className="text-3xl font-bold text-center pb-3 underline decoration-[#00B7AB]">Book Appointment</h1>

      <form action="https://formspree.io/f/mwpkqvnb" method="POST" >
        <div className="grid gap-5 lg:gap-8">
          <input
            type="text"
            onChange={handleChange}
            placeholder="Name"
            name="name"
            className="w-full px-3 py-2 rounded-lg outline-none border-b-2 border-[#00B7AB] focus:border-[#1F2259] hover:border-[#1F2259] focus-visible:border-[#1F2259]"
            required
          />
          <input
            type="text"
            name="phonenumber"
            maxLength={10}
            minLength={10}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full px-3 py-2 rounded-lg outline-none border-b-2 border-[#00B7AB] focus:border-[#1F2259] hover:border-[#1F2259] focus-visible:border-[#1F2259]"
            required
          />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-3 py-2 rounded-lg outline-none border-b-2 border-[#00B7AB] focus:border-[#1F2259] hover:border-[#1F2259] focus-visible:border-[#1F2259]"
            required
          />
          <input
            type="date"
            name="date"
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg outline-none border-b-2 border-[#00B7AB] focus:border-[#1F2259] hover:border-[#1F2259] focus-visible:border-[#1F2259]"
            required
          />
          <input
            type="time"
            name="time"
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg outline-none border-b-2 border-[#00B7AB] focus:border-[#1F2259] hover:border-[#1F2259] focus-visible:border-[#1F2259]"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#00B7AB] text-white px-3 py-2 rounded-2xl mt-5 hover:bg-[#46716f] duration-300"
          >
            Book An Appointment
          </button>
        </div>
      </form>
    </section>
  );
};

export default AppointmentContent;
