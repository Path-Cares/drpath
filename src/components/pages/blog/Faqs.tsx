import Nav from "@/components/Nav";
import {
  FaHeartbeat,
  FaVirus,
  FaThermometerHalf,
  FaCandyCane,
  FaCarrot,
  FaTint,
} from "react-icons/fa";

const Faqs = () => {
  const infoData = [
    {
      icon: <FaVirus size={40} className="text-green-500" />,
      title: "Where do Coronaviruses originate?",
      content:
        "Coronaviruses can infect and spread among various animal species including cats, dogs, and pigs. Human coronaviruses are believed to originate from animal reservoirs.",
    },
    {
      icon: <FaHeartbeat size={40} className="text-red-500" />,
      title: "What causes a heart attack?",
      content:
        "Atherosclerosis is one of the primary contributors to coronary artery diseases. It results from fat accumulation in arteries, leading to blockages.",
    },
    {
      icon: <FaTint size={40} className="text-blue-500" />,
      title: "Why should my blood glucose level be between 120 and 200?",
      content:
        "Uncontrolled blood sugar levels can lead to kidney disease, heart attacks, or strokes.",
    },
    {
      icon: <FaCarrot size={40} className="text-orange-500" />,
      title: "What Foods Contain Carbohydrates?",
      content:
        "Carbohydrates are found in grains, fruits, vegetables, sweets, and snacks. Check your nutrition label for accurate carb counts!",
    },
    {
      icon: <FaThermometerHalf size={40} className="text-yellow-500" />,
      title: "What is the temperature that is considered a fever?",
      content:
        "Fever is usually defined as a core body temperature greater than 100.4°F. The threshold may vary for older adults.",
    },
    {
      icon: <FaCandyCane size={40} className="text-pink-500" />,
      title: "What is the healthiest sugar?",
      content:
        "Brown sugar is a healthier option than white sugar because it retains more vitamins and minerals from sugarcane.",
    },
  ];

  return (
    <div>
      <div
        className="w-full  bg-cover bg-center bg-no-repeat py-10"
        style={{ backgroundImage: `url('/images/banner-background.wbp')` }}
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Title Section */}
          <div className="text-center mb-10">
            <h3 className="text-4xl font-bold text-gray-800">
              Health & Wellness Information
            </h3>
            <p className="text-lg text-gray-600 mt-4">
              Get insights into various health topics to keep yourself informed.
            </p>
          </div>

          {/* Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infoData.map((info, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-12">
                  {info.icon}
                  <h2 className="text-xl font-bold ml-4">{info.title}</h2>
                </div>
                <p className="text-gray-700">{info.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
