import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

const HealthCheckup = () => {
  return (
    <div>
      <Nav />

      <div className="flex flex-col items-center">
        <div className="w-full h-64 bg-cover bg-center relative" style={{ backgroundImage: "url('/images/banner-background.webp')" }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-[#002D62]">Health Checkup Packages</h1>
          </div>
        </div>

        <div className="max-w-5xl mx-auto p-6 text-center space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800">Dr. Path Cares Comprehensive Health Checkup Packages</h2>
          <p className="text-gray-600">
            These packages are designed to ensure your overall well-being by incorporating imaging, blood work, and screenings. Detect early warning signs for potential health issues and get effective treatments to ensure long-term benefits. Customize packages based on age, gender, or health conditions.
          </p>
        </div>

        {/* Health Checkup Package Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8 max-w-7xl mx-auto">
          {[
            {
              img: "/images/Thyroid.jpeg",
              title: "DRP007 Healthy India (Thyroid)",
              price: "₹899",
              originalPrice: "₹1499",
              link: "/thyroid"
            },
            {
              img: "/images/Diabetic.jpeg",
              title: "DRP007 Healthy India (Diabetic)",
              price: "₹899",
              originalPrice: "₹1499",
              link: "/diabetic"
            },
            {
              img: "/images/Fitindia.jpeg",
              title: "DRP055 Fit India",
              price: "₹599",
              originalPrice: "₹999",
              link: "/fit-india"
            },
            {
              img: "/images/Thyroid&Diabetic.jpeg",
              title: "DRP082 Healthy India (Thyroid & Diabetic)",
              price: "₹999",
              originalPrice: "₹1599",
              link: "/thyroid&diabetic"
            },
            {
              img: "/images/Standard-Package.jpeg",
              title: "Standard Package",
              price: "₹1650",
              originalPrice: "₹4500",
              link: "/standard-package"
            },
            {
              img: "/images/Classic-Package-Men.jpeg",
              title: "Classic Package Men",
              price: "₹2250",
              originalPrice: "₹4999",
              link: "/classic-men-package"
            },
            {
              img: "/images/Platinum-Package.jpeg",
              title: "Platinum Package",
              price: "₹3999",
              originalPrice: "₹7500",
              link: "/platinum-package"
            },
            {
              img: "/images/Basic-Package.jpeg",
              title: "Basic Package",
              price: "₹1150",
              originalPrice: "₹3499",
              link: "/basic-package"
            },
            
            
            {
              img: "/images/Classic-Package-Women.jpeg",
              title: "Classic Package Women",
              price: "₹2250",
              originalPrice: "₹4500",
              link: "/classic-women-package"
            },
            {
              img: "/images/Senior-Citizen-Package.jpeg",
              title: "Senior Citizen Package",
              price: "₹2999",
              originalPrice: "₹6500",
              link: "/senior-citizens-package"
            },
            
            // {
            //   img: "/images/Platinum-Healthcare-Package.jpeg",
            //   title: "Platinum Healthcare Package",
            //   price: "₹3499",
            //   originalPrice: "₹7999",
            //   link: "/platinum-package"
            // },
            {
              img: "/images/Full-Body-Checkup-With-IGG-Antibody.jpeg",
              title: "Full Body Checkup With IGG Antibody",
              price: "₹1749",
              originalPrice: "₹3499",
              link: "#"
            },
            {
              img: "/images/Health-Checkup-Special-Combo-Package.jpeg",
              title: "Health Checkup Special Combo Package",
              price: "₹2999",
              originalPrice: "₹4999",
              link: "#"
            },
            
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg flex flex-col items-center h-full p-4">
              <div className="relative h-48 w-full flex items-center justify-center">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  style={{ objectFit: "contain" }}
                  className="object-contain"
                />
              </div>
              <div className="text-center mt-4">
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-500 line-through">{item.originalPrice}</p>
                <p className="text-green-500 text-lg font-bold">{item.price}</p>
                <Link href={item.link}>
                  <button className="mt-4 w-full bg-[#002D62] text-white py-2 px-4 rounded">Book Now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-100 p-8 max-w-5xl mx-auto my-10 rounded-lg">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Common Tests in Our Health Checkup Packages</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mr-2 mt-1" />
              <p><strong>Complete Blood Count (CBC):</strong> Detects potential anemia or infection issues by measuring components such as hemoglobin, WBCs, RBCs, and platelets.</p>
            </li>
            {/* Additional list items omitted for brevity */}
          </ul>
        </div>

        <div className="bg-[#002D62] text-white p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Stay Healthy with Dr. Path Cares</h2>
          <p className="mb-4">Regular checkups are key to detecting health problems early and preventing further issues. Contact us today to schedule an appointment or learn more about our comprehensive health packages!</p>
          <button className="bg-green-500 text-white py-2 px-4 rounded">Schedule Appointment</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HealthCheckup;
