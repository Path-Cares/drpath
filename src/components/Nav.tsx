"use client";
import { useState } from "react";
import Link from "next/link";
import CartBadge from "./pages/cart/CartBadge";
import SidebarToggle from "@/hooks/cart/SidebarToggle";
import CartSidebar from "./pages/cart/CartSidebar";
import Image from "next/image";
import AppointmentContent from "@/app/appointment/page";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
      <header className="xl:px-24 sticky top-0 z-50 bg-white ">
        <div className="flex items-center justify-between lg:items-start rounded-b-xl">
          <div className=" w-full ">
            {/* Contact Info for Desktop */}
            <div className="hidden lg:flex justify-evenly pr-4 xl:px-4 gap-6 bg-[#00B7AB] 2xl:justify-center 2xl:gap-24 text-white py-4">
              <Image
                src="/images/mainlogo.png"
                alt="new"
                width={150}
                height={150}
              />
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

            {/* Main Navigation */}
            <div className="flex items-center justify-center py-4 gap-3 xl:gap-2 px-6 max-w-screen-lg mx-auto">
              <nav className="relative w-full">
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
                  <ul className="absolute md:static right-0 w-full flex flex-col p-4 md:p-0 mt-4 md:flex-row md:justify-center md:space-x-8">
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

              {/* Buttons for Test, Book Appointment, Cart Badge, and Login/Sign-up */}
              {/* <a
                href="/test"
                className="hidden lg:flex items-center bg-white py-2 px-5 rounded-lg text-[#00B7AB]"
              >
                Test
              </a> */}

              <button
                onClick={openAppointmentModal}
                className="hidden lg:flex items-center mt-4 bg-white py-2 px-5 rounded-lg text-[#00B7AB] whitespace-nowrap"
              >
                Book Appointment
              </button>

              {/* Cart Icon */}
              {/* <CartBadge onClick={toggleCart} /> */}

              {/* Login/Sign-up Tab */}
              <Link
                href="/login"
                className="hidden lg:flex items-center bg-white py-2 px-5 mt-4 pr-5 rounded-lg text-[#00B7AB] whitespace-nowrap"
                // className="hidden w-64 bg-red-300 lg:flex items-center lg:pr-10  py-2 px-10 rounded-lg text-[#00B7AB]"
              >
                Login/Sign-up
              </Link>

              {/* cart section */}

              {/* <div
                role="button"
                className="border-2 flex relative items-center mt-2 border-gray-200 rounded-full  cursor-pointer z-50"
              >
                <Image
                  src="/images/shopping-cart.png"
                  width={12} // Adjusted for a smaller, responsive size
                  height={12}
                  alt="Shopping Cart"
                  className="absolute w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 ml-2"
                />
                <span className="ml-1 sm:ml-2 inline-flex items-center justify-center mb-10 xl:ml-10 px-1.5 py-0.5 text-xs sm:text-sm font-bold leading-none text-white bg-[#00B7AB] rounded-full">
                  0
                </span>
              </div> */}
              <Image
                  src="/images/shopping-cart.png"
                  width={12} // Adjusted for a smaller, responsive size
                  height={12}
                  alt="Shopping Cart"
                  className=" w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 mt-2"
                />
              
            
              
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
            {/* <button
              onClick={closeAppointmentModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button> */}
            <AppointmentContent closeModal={closeAppointmentModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
