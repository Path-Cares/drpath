"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Head from "next/head";
import axios from "axios";
import Image from "next/image";

const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        setFormData({
          name: "",
          email: "",
          phonenumber: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Error sending message");
    }
  };

  return (
    <>
      <Head>
        <title>Dr. Path Cares Registered Labs | 24/7 Healthcare Services</title>
        <meta
          name="description"
          content="Dr. Path Cares Wellness Care Lab offers expert, reliable 24/7 lab tests, diagnostics, and health checkups with advanced technology and personalized care. "
        />
        <link rel="canonical" href=" https://drpathcares.com/contact" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5ZVV8F74');
            `,
          }}
        />
      </Head>

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5ZVV8F74"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      <section className="px-5 lg:px-20 xl:px-24 2xl:px-56 pb-20 lg:my-12 py-10">
        <Toaster />

        {/* Registered Labs Information */}
        <div className="bg-gradient-to-br bg-[#00B7AB] p-10 rounded-lg shadow-md mb-12">
          <h1 className="text-3xl font-bold text-center pb-5 text-white">
            Registered Labs
          </h1>
          <div className="flex justify-center text-lg text-gray-800">
            <div className="bg-white rounded-lg shadow-lg p-8 space-y-4 max-w-lg w-full">
              <h2 className="text-2xl font-bold text-[#1F2259] text-center">
                DrPathCares Wellness Care Laboratory
              </h2>
              <p className="text-center italic text-gray-600">
                A Unit Of Biolife Wellness Care Pvt. Ltd.
              </p>
              <div className="space-y-3 mt-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/address.webp"
                    alt="Location"
                    width={24}
                    height={24}
                  />
                  <p>E-45, Noida Sector 3, Noida, 201301, Uttar Pradesh</p>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/phone-number.webp"
                    alt="Customer Care"
                    width={24}
                    height={24}
                  />
                  <p>
                    Customer Care:{" "}
                    <a
                      href="tel:+01204157233"
                      className="text-[#00B7AB] hover:underline"
                    >
                      +0120-4157-233
                    </a>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/phone-number.webp"
                    alt="Our Team"
                    width={24}
                    height={24}
                  />
                  <p>
                    Our Team:{" "}
                    <a
                      href="tel:+918929062906"
                      className="text-[#00B7AB] hover:underline"
                    >
                      +91 89290 62906
                    </a>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/email-address.webp"
                    alt="Email"
                    width={24}
                    height={24}
                  />
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:Info@Drpathcares.com"
                      className="text-[#00B7AB] hover:underline"
                    >
                      Info@Drpathcares.com
                    </a>
                  </p>
                </div>
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
          <form onSubmit={handleSubmit} className="grid gap-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              aria-label="Name"
              required
              className="px-3 py-2 rounded-lg outline-none border-b-2 border-[#00B7AB] focus:border-[#1F2259]"
            />
            <input
              type="tel"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              placeholder="Phone Number"
              aria-label="Phone Number"
              maxLength={10}
              required
              className="px-3 py-2 rounded-lg outline-none border-b-2 border-[#00B7AB] focus:border-[#1F2259]"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              aria-label="Email"
              required
              className="px-3 py-2 rounded-lg outline-none border-b-2 border-[#00B7AB] focus:border-[#1F2259]"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              aria-label="Message"
              required
              className="px-3 py-2 h-32 rounded-lg outline-none border-b-2 border-[#00B7AB] focus:border-[#1F2259]"
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
    </>
  );
};

export default ContactContent;
