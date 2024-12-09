"use client";
import { useState } from "react";
import Link from "next/link";
import SidebarToggle from "@/hooks/cart/SidebarToggle";
import CartSidebar from "./pages/cart/CartSidebar";
import Image from "next/image";
import AppointmentContent from "@/app/appointment/page";
import { FaCartArrowDown } from "react-icons/fa";

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
      <header className="px-6 lg:px-12 sticky top-0 z-50 bg-white shadow">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:items-start rounded-b-xl">
          {/* Logo Section */}
          <div className="p-4 bg-white flex items-center">
            <Image
              src="/images/mainlogo.png"
              alt="Logo"
              width={240} 
              height={240} 
              priority={true}
            />
          </div>

          {/* Contact Info for Desktop */}
          <div className="hidden lg:flex justify-evenly pr-4 xl:px-4 gap-6 bg-[#00B7AB] 2xl:justify-center 2xl:gap-24 text-white py-6 w-full">
            <a href="tel:+0120 4157 233" className="flex items-center gap-2">
              <Image
                src="/images/phone.svg"
                alt="Phone"
                width={30}
                height={30}
              />
              +0120 4157 233
            </a>
            <a href="tel:+91 89290 62906" className="flex items-center gap-2">
              <Image
                src="/images/phone.svg"
                alt="Phone"
                width={30}
                height={30}
              />
              +91 89290 62906
            </a>
            <a
              href="mailto:dr.pathcare@gmail.com"
              className="flex items-center gap-2"
            >
              <Image
                src="/images/mail.svg"
                alt="Email"
                width={30}
                height={30}
              />
              Info@Drpathcares.com
            </a>
            <a
              href="tel:+91 89290 62906"
              className="flex items-center bg-white py-2 px-4 rounded-lg gap-2 text-[#00B7AB]"
            >
              <Image
                src="/images/phone-call.svg"
                alt="Call"
                width={16}
                height={16}
              />
              Call
            </a>
            <a
              href="https://wa.me/+918929062906"
              className="flex items-center bg-white py-2 px-4 gap-2 rounded-lg text-[#00B7AB]"
            >
              <Image
                src="/images/Whatsapp.svg"
                alt="WhatsApp"
                width={16}
                height={16}
              />
              Whatsapp
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4 gap-3 xl:gap-6 px-6 max-w-screen-lg mx-auto">
          <nav className="flex-grow">
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
              className={`absolute md:relative top-full left-0 bg-white  ${
                isNavMenuVisible ? "block" : "hidden"
              } md:block w-full md:w-auto duration-100 transition-all`}
            >
              <ul className="flex flex-col md:flex-row md:justify-center md:space-x-8">
                <li>
                  <Link
                    href="/"
                    className="py-2 px-3 text-gray-900 whitespace-nowrap"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/aboutus"
                    className="py-2 px-3 text-gray-900 whitespace-nowrap"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/socialActivity"
                    className="py-2 px-3 text-gray-900 whitespace-nowrap"
                  >
                    Social Activity
                  </Link>
                </li>
                <li>
                  <Link
                    href="/healthPackage"
                    className="py-2 px-3 text-gray-900 whitespace-nowrap"
                  >
                    Health Package
                  </Link>
                </li>
                <li>
                  <Link
                    href="/certificates"
                    className="py-2 px-3 text-gray-900 whitespace-nowrap"
                  >
                    All Certificate
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="py-2 px-3 text-gray-900 whitespace-nowrap"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <button
            onClick={openAppointmentModal}
            className="flex items-center bg-[#00B7AB] py-2 px-4 rounded-lg text-white whitespace-nowrap"
          >
            Book Appointment
          </button>
          <div className="ml-4">
            <FaCartArrowDown className="w-7 h-7 text-[#00B7AB] cursor-pointer" />
          </div>
        </div>
      </header>

      {/* Cart Sidebar */}
      {isCartOpen && <CartSidebar isOpen={isCartOpen} onClose={toggleCart} />}

      {/* Modal for Book Appointment */}
      {isAppointmentModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl mx-auto relative">
            <AppointmentContent closeModal={closeAppointmentModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;