"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const AppointmentContent = ({ closeModal }: { closeModal: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    location: "",
    address: "",
    date: "",
    time: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const cities = [
    "Agra",
    "Ajmer",
    "Alwar",
    "Ambala",
    "Amritsar",
    "Baghpat",
    "Bahadurgarh",
    "Ballabhgarh",
    "Bareilly",
    "Bhatinda",
    "Bikaner",
    "Bulandshahr",
    "Central Delhi",
    "Chandigarh",
    "Dehradun",
    "East Delhi",
    "Faridabad",
    "Ghaziabad",
    "Greater Noida",
    "Gurgaon (Gurugram)",
    "Hapur",
    "Haridwar",
    "Hoshiarpur",
    "Jaipur",
    "Jalandhar",
    "Jhajjar",
    "Jhunjhunu",
    "Jodhpur",
    "Kanpur",
    "Karnal",
    "Khanna",
    "Khurja",
    "Kota",
    "Kurukshetra",
    "Lucknow",
    "Ludhiana",
    "Manesar",
    "Meerut",
    "Modinagar",
    "Mohali",
    "Moradabad",
    "Moga",
    "Muzaffarnagar",
    "Noida",
    "North Delhi",
    "Palwal",
    "Panchkula",
    "Panipat",
    "Patiala",
    "Rohtak",
    "Roorki",
    "Saharanpur",
    "Sikkar",
    "Sonipat",
    "South Delhi",
    "Udaipur",
    "West Delhi",
    "Yamuna Nagar",
    "Zirakpur",
  ];

  return (
    <>
      <section className="relative px-4 md:px-10 lg:px-20 xl:px-24 2xl:px-56 py-10 pb-20 lg:pb-12 bg-white shadow-lg rounded-lg max-w-2xl mx-auto">
        <Toaster />

        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-8 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h1 className="text-3xl font-bold text-center pb-3 underline decoration-[#00B7AB]">
          Book Appointment
        </h1>

        <form action="https://formspree.io/f/mzzbwroj" method="POST">
          <div className="grid gap-5 lg:gap-8">
            <input
              type="text"
              onChange={handleChange}
              placeholder="Name"
              name="name"
              className="w-full px-3 py-2 rounded-lg outline-none border-b-2 border-[#00B7AB] focus:border-[#1F2259] hover:border-[#1F2259] focus-visible:border-[#1F2259]"
              required
            />

            <div className="flex items-center">
              <span className="mr-2 px-3 py-2 rounded-lg outline-none border-b-2 border-[#00B7AB] text-gray-500">+91</span>
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
            </div>

            <select
              name="location"
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg outline-none border-b-2 border-[#00B7AB] focus:border-[#1F2259] hover:border-[#1F2259] focus-visible:border-[#1F2259]"
              required
            >
              <option value="" disabled selected>
                Select Location
              </option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Email (Optional)"
              className="w-full px-3 py-2 rounded-lg outline-none border-b-2 border-[#00B7AB] focus:border-[#1F2259] hover:border-[#1F2259] focus-visible:border-[#1F2259]"
            />

            <input
              type="date"
              name="date"
              onChange={handleChange}
              placeholder="Date (Optional)"
              className="w-full px-3 py-2 rounded-lg outline-none border-b-2 border-[#00B7AB] focus:border-[#1F2259] hover:border-[#1F2259] focus-visible:border-[#1F2259]"
            />

            <input
              type="time"
              name="time"
              onChange={handleChange}
              placeholder="Time (Optional)"
              className="w-full px-3 py-2 rounded-lg outline-none border-b-2 border-[#00B7AB] focus:border-[#1F2259] hover:border-[#1F2259] focus-visible:border-[#1F2259]"
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
    </>
  );
};

export default AppointmentContent;
