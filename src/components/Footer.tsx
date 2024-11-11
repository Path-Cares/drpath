import Image from "next/image";
import footerlogo from "@/../public/images/mainlogo.png";
import Link from "next/link";
import Cities from "./pages/Cities";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Cities />
      <footer className="bg-[#1F2259] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Logo and Description */}
            <div className="flex flex-col items-center space-y-6">
              <Image
                src={footerlogo}
                alt="logo"
                width={385} 
                height={231}
                className="w-full object-contain"
              />
              <p className="text-sm text-white opacity-75 text-center">
                We have been caring for you in our clinics for over 100 years.
              </p>
            </div>

            {/* Services Section */}
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-lg font-medium pb-3">Services</p>
              <div className="flex flex-col space-y-3 text-sm">
                <Link href="/">Basic Package</Link>
                <Link href="/aboutus">Standard Package</Link>
                <Link href="/contact">Classic Men Package</Link>
                <Link href="/contact">Classic Women Package</Link>
                <Link href="/contact">Platinum Package</Link>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-lg font-medium pb-3">Quick Links</p>
              <div className="flex flex-col space-y-3 text-sm">
                <Link href="#">About Us</Link>
                <Link href="#">Contact Us</Link>
                <Link href="/disclaimer">Disclaimer</Link>
                <Link href="/terms&condition">Terms & Condition</Link>
              </div>
            </div>

            {/* Follow Us Section */}
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-lg font-medium pb-3">Follow Us</p>
              <div className="flex gap-2 text-xl">
                <a href="https://www.facebook.com/people/DrPathcares/100089185585238/?mibextid=LQQJ4d">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/drpathcares/">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/company/dr-path-cares">
                  <FaLinkedin />
                </a>
                <a href="https://www.youtube.com/@dr.pathcares">
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Contact Us Section */}
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-lg font-medium pb-3">Contact Us</p>
              <div className="flex flex-col space-y-3 text-sm">
                <p>+91 89290 62906</p>
                <p>Info@Drpathcares.com</p>
                <p>E-30, Sec-3 Noida, Uttar Pradesh, 201301</p>
              </div>
            </div>
          </div>

          {/* Footer Divider */}
          <div className="mt-10">
            <hr className="bg-white opacity-50 mx-auto w-full sm:w-3/4 lg:w-1/2" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
