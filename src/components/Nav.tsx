"use client";
import { useState } from "react";
import Link from "next/link";
import CartBadge from "./pages/cart/CartBadge";
import SidebarToggle from "@/hooks/cart/SidebarToggle";
import CartSidebar from "./pages/cart/CartSidebar";
import Image from "next/image";
import AppointmentContent from "@/app/appointment/page"; // Import your form component

const Nav: React.FC = () => {
  const [isNavMenuVisible, setIsNavMenuVisible] = useState(false);
  const [isCartOpen, toggleCart] = SidebarToggle(false);

  // State to handle the appointment modal visibility
  const [isAppointmentModalOpen, setAppointmentModalOpen] = useState(false);

  const toggleNavMenu = () => {
    setIsNavMenuVisible(!isNavMenuVisible);
  };

  // Functions to open and close the appointment modal
  const openAppointmentModal = () => setAppointmentModalOpen(true);
  const closeAppointmentModal = () => setAppointmentModalOpen(false);

  return (
    <>
      <header className="xl:px-24 sticky top-0 z-50 bg-white shadow-xl">
        <div className="flex items-center lg:items-start rounded-b-xl">
          {/* Logo */}
          <div className="p-4 sm:p-8 flex justify-center items-center lg:shadow-lg h-full shadow-[#00b7ab7d] rounded-b-xl">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="alt"
                width={350}
                height={350}
                className="h-full"
                priority={false}
              />
            </Link>
          </div>

          <div className="flex-grow w-full">
            {/* Contact Info for Desktop */}
            <div className="hidden lg:flex justify-end pr-4 xl:pr-8 gap-6 bg-[#00B7AB] text-white py-4">
              <a href="tel:+0120 4157 233" className="flex items-center gap-2">
                <Image
                  src="/images/phone.svg"
                  alt="alt"
                  width={30}
                  height={30}
                />
                +0120 4157 233
              </a>
              <a href="tel:+91 89290 62906" className="flex items-center gap-2">
                <Image
                  src="/images/phone.svg"
                  alt="alt"
                  width={30}
                  height={30}
                />
                +91 89290 62906
              </a>
              <a href="mailto:dr.pathcare@gmail.com" className="flex items-center gap-2">
                <Image
                  src="/images/mail.svg"
                  alt="alt"
                  width={30}
                  height={30}
                />
                dr.pathcare@gmail.com
              </a>
              <a
                href="tel:+91 89290 62906"
                className="flex items-center bg-white py-2 px-4 rounded-lg text-[#00B7AB] shadow"
              >
                <Image
                  src="/images/phone-call.svg"
                  alt="alt"
                  width={16}
                  height={16}
                />
                Call
              </a>
              <a
                href="https://wa.me/+918929062906"
                className="flex items-center bg-white py-2 px-4 rounded-lg text-[#00B7AB] shadow"
              >
                <Image
                  src="/images/Whatsapp.svg"
                  alt="alt"
                  width={16}
                  height={16}
                />
                Whatsapp
              </a>
            </div>

            {/* Main Navigation */}
            <div className="flex items-center justify-end py-4 gap-6 xl:gap-12 pr-6 xl:pr-20">
              <nav className="relative">
                {/* Mobile Menu Toggle */}
                <button
                  onClick={toggleNavMenu}
                  className="md:hidden p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 17 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>

                {/* Navigation Links */}
                <div
                  className={`${
                    isNavMenuVisible ? "block" : "hidden"
                  } md:block w-full md:w-auto duration-100 transition-all`}
                >
                  <ul className="absolute md:static right-0 w-1/2 lg:w-full flex flex-col p-4 md:p-0 mt-4 bg-gray-50 md:flex-row md:space-x-8">
                    <li>
                      <Link href="/" className="py-2 px-3 text-gray-900">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/aboutus" className="py-2 px-3 text-gray-900">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/socialActivity" className="py-2 px-3 text-gray-900">
                        Social Activity
                      </Link>
                    </li>
                    <li>
                      <Link href="/healthPackage" className="py-2 px-3 text-gray-900">
                        Health Package
                      </Link>
                    </li>
                    <li>
                      <Link href="/awards" className="py-2 px-3 text-gray-900">
                        Awards
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="py-2 px-3 text-gray-900">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>

              {/* Buttons for Test and Book Appointment */}
              <a
                href="/test"
                className="hidden lg:flex items-center bg-white py-2 px-5 rounded-lg text-[#00B7AB] shadow"
              >
                <Image
                  src="/images/microscope.svg"
                  alt="alt"
                  width={18}
                  height={18}
                />
                Test
              </a>

              <button
                onClick={openAppointmentModal}
                className="hidden lg:flex items-center bg-white py-2 px-5 rounded-lg text-[#00B7AB] shadow"
              >
                <Image
                  src="/images/statoscope.svg"
                  alt="alt"
                  width={18}
                  height={18}
                />
                Book Appointment
              </button>

              <CartBadge onClick={toggleCart} />
            </div>
          </div>
        </div>
      </header>

      {/* Cart Sidebar */}
      {isCartOpen && <CartSidebar isOpen={isCartOpen} onClose={toggleCart} />}

      {/* Modal for Book Appointment */}
      {isAppointmentModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl mx-auto relative">
            <button
              onClick={closeAppointmentModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <AppointmentContent closeModal={closeAppointmentModal} /> {/* Include the Appointment Form here */}
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
