"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Image from "next/image";

const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    message: "",
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
        toast.success("Message sent successfully");
      } else {
        toast.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Error sending message");
    }
  };

  return (
    <section className="px-5 lg:px-20 xl:px-24 2xl:px-56 pb-20 lg:my-12 py-10">
      <Toaster />

      {/* Contact Information */}
      <div className="bg-gray-100 p-10 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center pb-5">Registered Labs</h1>
        <div className="grid gap-6 text-lg">
          <div className="text-center space-y-4">
            <p className="font-semibold">
              DrPathCares Wellness Care Laboratory
            </p>
            <p>A Unit Of Biolife Wellness Care Pvt. Ltd.</p>
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/images/address.webp"
                alt="Office Location"
                width={28}
                height={28}
              />
              <p>
                Find Office: E-30, Noida Sector 3, Noida, 201301, Uttar Pradesh
              </p>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Image
                src="/images/phone-number.webp"
                alt="Customer Care"
                width={28}
                height={28}
              />
              <p>
                Customer Care: <a href="tel:+01204157233">+0120-4157-233</a>
              </p>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Image
                src="/images/phone-number.webp"
                alt="Our Team"
                width={28}
                height={28}
              />
              <p>
                Our Team: <a href="tel:+918929062906">+91 89290 62906</a>
              </p>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Image
                src="/images/email-address.webp"
                alt="Email"
                width={28}
                height={28}
              />
              <p>
                Email:{" "}
                <a href="mailto:Info@Drpathcares.com">Info@Drpathcares.com</a>
              </p>
            </div>

            {/* Working Hours */}
            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 text-[#00B7AB]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 1a11 11 0 1 0 11 11A11.012 11.012 0 0 0 12 1Zm4.95 12.28-4-2.5a.75.75 0 0 1-.35-.65V6.75a.75.75 0 0 1 1.5 0v3.1l3.65 2.28a.75.75 0 1 1-.8 1.3Z" />
                </svg>
                <p>Working Hours: 24/7, Sunday Open</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Request a Call Back Form */}
      <div className="mt-12 bg-white p-10 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center pb-5">
          Request a Call Back
        </h1>
        <form method="POST" onSubmit={handleSubmit} className="grid gap-5">
          <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Name"
            className="px-3 py-2 rounded-lg outline-none border-b-2 border-[#00B7AB] focus:border-[#1F2259] hover:border-[#1F2259] focus-visible:border-[#1F2259]"
            required
          />
          <input
            type="text"
            name="phonenumber"
            maxLength={10}
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
          <textarea
            name="message"
            onChange={handleChange}
            placeholder="Message"
            className="px-3 py-2 h-32 rounded-lg outline-none border-b-2 border-[#00B7AB] focus:border-[#1F2259] hover:border-[#1F2259] focus-visible:border-[#1F2259]"
            required
          />
          <button
            type="submit"
            className="bg-[#00B7AB] text-white px-5 py-2 rounded-2xl mt-5 hover:bg-[#46716f] duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactContent;

{
  /* <div className="bg-gray-100 p-10 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center pb-5">Contact Information</h1>
        <div className="grid md:grid-cols-2 gap-10 text-lg cursor-pointer">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Image
                src="/images/phone-number.webp"
                alt="Emergency Number"
                width={28}
                height={28}
              />
              <p>Emergency Number: <a href="tel:+0120 4157 233">+0120 4157 233</a></p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/phone-number.webp"
                alt="Contact Number"
                width={28}
                height={28}
              />
              <p>Contact Number: <a href="tel:+918929062906">+91 89290 62906</a></p>
            </div>
          </div>
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Image
                src="/images/email-address.webp"
                alt="Email"
                width={28}
                height={28}
              />
              <p>Email: <a href="mailto:Info@Drpathcares.com">Info@Drpathcares.com</a></p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/address.webp"
                alt="Address"
                width={28}
                height={28}
              />
              <p>Address: E-30, Sec-3 Noida, Uttar Pradesh, 201301</p>
            </div>
          </div>
        </div>
      </div> */
}
