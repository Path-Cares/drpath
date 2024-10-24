"use client";
import { useState } from "react";

const HeartPackage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const services = [
    {
      title: "Complete Blood Count (CBC) 27 Test",
      description: (
        <ul className="list-disc pl-5">
          <li>HB</li>
          <li>TLC</li>
          <li>Neutrophil</li>
          <li>Lymphocyte</li>
          <li>Eosinophil</li>
          <li>Monocyte</li>
          <li>Basophil</li>
          <li>Platelet Count</li>
          <li>CT</li>
          <li>RBC</li>
          <li>HCT</li>
          <li>MCV</li>
          <li>MCH</li>
          <li>MCHC</li>
          <li>HDW</li>
          <li>MPV</li>
          <li>PDW</li>
          <li>RDW-SD</li>
          <li>RDW-CV</li>
          <li>Absolute</li>
          <li>Neutrophil Count</li>
          <li>Absolute</li>
          <li>Lymphocyte Count</li>
          <li>Absolute Monocyte Count</li>
          <li>Absolute Basophil Count</li>
          <li>Absolute Eosinophil Count</li>
          <li>ESR</li>
        </ul>
      ),
    },
    {
      title: "Urine Profile (20 Test)",
      description: (
        <ul className="list-disc pl-5">
          <li>Quantity</li>
          <li>Colour</li>
          <li>Transparency</li>
          <li>Specific Gravity</li>
          <li>Ph</li>
          <li>Blood</li>
          <li>Albumin</li>
          <li>Glucose</li>
          <li>UBG</li>
          <li>Bilirubin</li>
          <li>Nitrite</li>
          <li>Pus Cells</li>
          <li>RBC</li>
          <li>Casts</li>
          <li>Crystals</li>
          <li>Epithelial</li>
          <li>Bacteria</li>
          <li>Urine Protein</li>
          <li>Urine Bilirubin</li>
          <li>Keton</li>
        </ul>
      ),
    },
    {
      title: "Liver Function Test (LFT 12 Test)",
      description: (
        <ul className="list-disc pl-5">
          <li>SGPT</li>
          <li>SGOT</li>
          <li>Total Proteins</li>
          <li>Albumin</li>
          <li>Globliin</li>
          <li>A:G Ratio</li>
          <li>Bilirubin-Direct</li>
          <li>Bilirubin Indirect</li>
          <li>Bilirubin Total</li>
          <li>Serum Protien</li>
          <li>SGOT/SGPT Ratio</li>
          <li>Gamma GT</li>
        </ul>
      ),
    },
    {
      title: "Kidney Function Test (KFT 7 Test)",
      description: (
        <ul className="list-disc pl-5">
          <li>Urea</li>
          <li>Uric Acid</li>
          <li>Blood Urea Nitrogen</li>
          <li>Creatinine</li>
          <li>Serum Protein</li>
          <li>Urea/ Creatinine Ratio</li>
          <li>BUN Creatinine Ratio</li>
        </ul>
      ),
    },
    {
      title: "Lipid Profile (8 Test)",
      description: (
        <ul className="list-disc pl-5">
          <li>Total Cholesterol</li>
          <li>Triglycerides</li>
          <li>HDL</li>
          <li>LDL</li>
          <li>VLDL</li>
          <li>Total Cholesterol/ HDL Cholesterol Ratio</li>
          <li>LDL/HDL Ratio</li>
          <li>NON/ HDL Ratio</li>
        </ul>
      ),
    },
    {
      title: "BONE PROFILE( 3 TEST)",
      description: (
        <ul className="list-disc pl-5">
          <li>Calcium</li>
          <li>Phosphorus</li>
          <li>Alkaline Phosphatase</li>
        </ul>
      ),
    },
    {
      title: "IRON PROFILE ( 4 TEST )",
      description: (
        <ul className="list-disc pl-5">
          <li>IRON Serum</li>
          <li>TIBC</li>
          <li>UIBC</li>
          <li>Transferrin Saturation</li>
        </ul>
      ),
    },
    {
      title: "DIABETES PROFILE ( 3 TEST )",
      description: (
        <ul className="list-disc pl-5">
          <li>Blood Sugar</li>
          <li>Urine Sugar</li>
          <li>HbA1c</li>
        </ul>
      ),
    },
    {
      title: "VITAMIN PROFILE ( 2 TEST )",
      description: (
        <ul className="list-disc pl-5">
          <li>Vitamin B12</li>
          <li>Vitamin D</li>
        </ul>
      ),
    },
  ];

  const toggleService = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-5 lg:px-28 xl:px-32 2xl:px-72 pb-20">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-center">Included Tests</h2>
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
            <div className="p-5 bg-white text-gray-700">
              {service.description}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default HeartPackage;
