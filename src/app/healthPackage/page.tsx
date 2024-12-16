import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import Image from 'next/image';
import Link from 'next/link';

const HealthCheckup = () => {
  const packages = [
    { img: "/images/Fitindia.jpeg", title: "DRP055 Fit India", price: 599, originalPrice: "₹999", link: "/fit-india" },
    { img: "/images/Thyroid.jpeg", title: "DRP077 Healthy India (Thyroid)", price: 899, originalPrice: "₹1499", link: "/thyroid" },
    { img: "/images/Diabetic.jpeg", title: "DRP077 Healthy India (Diabetic)", price: 899, originalPrice: "₹1499", link: "/diabetic" },
    { img: "/images/Thyroid&Diabetic.jpeg", title: "DRP082 Healthy India (Thyroid & Diabetic)", price: 999, originalPrice: "₹1599", link: "/thyroid&diabetic" },
    { img: "/images/Fever Panel1.jpeg", title: "Fever Panel", price: 1499, originalPrice: "₹1999", link: "/fever-panel" },
    { img: "/images/Standard-Package.jpeg", title: "Standard Package", price: 1650, originalPrice: "₹4500", link: "/standard-package" },
    { img: "/images/Health-Checkup-Special-Combo-Package.jpeg", title: "Health Checkup Special Combo Package", price: 2999, originalPrice: "₹4999", link: "/health-checkup-special" },
    { img: "/images/Senior-Citizen-Package.jpeg", title: "Senior Citizen Package", price: 2999, originalPrice: "₹6500", link: "/senior-citizens-package" },
    { img: "/images/Classic-Package-Men.jpeg", title: "Classic Package Men", price: 2250, originalPrice: "₹4999", link: "/classic-men-package" },
    { img: "/images/Classic-Package-Women.jpeg", title: "Classic Package Women", price: 2250, originalPrice: "₹4500", link: "/classic-women-package" },
    { img: "/images/Platinum-Package.jpeg", title: "Platinum Package", price: 3999, originalPrice: "₹7500", link: "/platinum-package" },
    { img: "/images/pcodprofile1.jpeg", title: "Pcod Profile", price: 2800, originalPrice: "₹4200", link: "/pcod-profile" },
    { img: "/images/hepititisPanel1.jpeg", title: "Hepititis Panel", price: 4499, originalPrice: "₹4999", link: "#" },
    { img: "/images/allergy.jpeg", title: "Allergy Package", link: "/allergy" },
    { img: "/images/hepititisPanel1.jpeg", title: "Multiple Myoloma", price: 7000, originalPrice: "₹8000", link: "/multiple-myoloma" },
  ];

  const sortedPackages = packages.sort((a, b) => {
    // Place "Multiple Myoloma" at the last position
    if (a.title === "Multiple Myoloma") return 1;
    if (b.title === "Multiple Myoloma") return -1;

    // Place "Allergy Package" at the second last position
    if (a.title === "Allergy Package") return 1;
    if (b.title === "Allergy Package") return -1;

    // Default sorting by price for the rest
    const priceA = a.price || Infinity;
    const priceB = b.price || Infinity;
    return priceA - priceB;
  });

  return (
    <div>
      <Nav />
      <div className="flex flex-col items-center">
        <div className="w-full h-64 bg-cover bg-center relative" style={{ backgroundImage: "url('/images/banner-background.webp')" }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-2xl md:text-4xl font-bold text-[#002D62]">Health Checkup Packages</h1>
          </div>
        </div>
        <div className="max-w-5xl mx-auto p-6 text-center space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800">Dr. Path Cares Comprehensive Health Checkup Packages</h2>
          <p className="text-gray-600">
            These packages are designed to ensure your overall well-being by incorporating imaging, blood work, and screenings. Detect early warning signs for potential health issues and get effective treatments to ensure long-term benefits.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8 max-w-7xl mx-auto">
          {sortedPackages.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg flex flex-col items-center h-full p-4">
              <div className="relative h-48 w-full flex items-center justify-center">
                <Image src={item.img} alt={item.title} fill style={{ objectFit: "contain" }} className="object-contain" />
              </div>
              <div className="text-center mt-4 flex-grow">
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                {item.originalPrice && <p className="text-gray-500 line-through">{item.originalPrice}</p>}
                {item.price && <p className="text-green-500 text-lg font-bold">₹{item.price}</p>}
              </div>
              <Link href={item.link} className="w-full">
                <button className="w-full bg-[#002D62] text-white py-2 px-4 rounded hover:bg-[#001a42] transition-all duration-200">
                  Book Now
                </button>
              </Link>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HealthCheckup;
