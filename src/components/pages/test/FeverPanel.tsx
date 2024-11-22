"use client";
import { useState } from "react";

const FeverPanel = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Complete Blood Count with ESR",
    },
    {
      title: "Typhi Dot IGG",
    },
    {
      title: "Typhi Dot IGM",
    },
    {
      title: "Malaria Parasite",
    },
    {
      title: "Urine Profile (R/M)",
    },
    {
      title: "NS1 Dengue",
    },
    {
      title: "Widal",
    },
  ];

  const toggleService = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-5 lg:px-28 xl:px-32 2xl:px-72 pb-20">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-center">
        Included Tests
      </h2>
      {services.map((service, index) => (
        <div key={index} className="mb-4 border-b border-gray-200">
          <button
            className="w-full text-left py-4 px-5 bg-[#00B7AB] text-white focus:outline-none focus:bg-[#1F2259]"
            onClick={() => toggleService(index)}
          >
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium text-white">
                {service.title}
              </span>
              <span className="text-lg">{openIndex === index ? "-" : "+"}</span>
            </div>
          </button>
          {openIndex === index && (
            <div className="p-5 bg-white text-gray-700">{service.title}</div>
          )}
        </div>
      ))}
    </section>
  );
};

export default FeverPanel;
