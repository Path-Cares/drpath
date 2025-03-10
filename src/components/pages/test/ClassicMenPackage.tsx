"use client";
import Head from "next/head";
import Script from "next/script";
import { useState } from "react";

const ClassicMenPackage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Complete Blood Count (25 Tests)",
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
          <li>RDW-SD</li>
          <li>RDW-CV</li>
          <li>Absolute Neutrophil Count</li>
          <li>Absolute Lymphocyte Count</li>
          <li>Absolute Monocyte Count</li>
          <li>Absolute Basophil Count</li>
          <li>Absolute Eosinophil Count</li>
          <li>ESR</li>
        </ul>
      ),
    },
    {
      title: "Kidney Function Test (7 Tests)",
      description: (
        <ul className="list-disc pl-5">
          <li>Urea</li>
          <li>Uric Acid</li>
          <li>Blood Urea Nitrogen</li>
          <li>Creatinine</li>
          <li>Urea/Creatinine Ratio</li>
          <li>BUN Creatinine Ratio</li>
          <li>BUN</li>
        </ul>
      ),
    },
    {
      title: "Lipid Profile (8 Tests)",
      description: (
        <ul className="list-disc pl-5">
          <li>Total Cholesterol</li>
          <li>Triglycerides</li>
          <li>HDL</li>
          <li>LDL</li>
          <li>VLDL</li>
          <li>Total Cholesterol/HDL Cholesterol Ratio</li>
          <li>LDL/HDL Ratio</li>
          <li>Non-HDL Ratio</li>
        </ul>
      ),
    },
    {
      title: "Bone Profile (3 Tests)",
      description: (
        <ul className="list-disc pl-5">
          <li>Calcium</li>
          <li>Phosphorous</li>
          <li>Alkaline Phosphatase</li>
        </ul>
      ),
    },
    {
      title: "Thyroid Profile (3 Tests)",
      description: (
        <ul className="list-disc pl-5">
          <li>TSH (Thyroid Stimulating Hormone)</li>
          <li>T3</li>
          <li>T4</li>
        </ul>
      ),
    },
    {
      title: "Diabetes Profile (3 Tests)",
      description: (
        <ul className="list-disc pl-5">
          <li>Blood Sugar</li>
          <li>Urine Sugar</li>
          <li>HbA1c</li>
        </ul>
      ),
    },
    {
      title: "Iron Profile (3 Tests)",
      description: (
        <ul className="list-disc pl-5">
          <li>Iron Serum</li>
          <li>TIBC</li>
          {/* <li>UIBC</li> */}
          <li>Transferrin Saturation</li>
        </ul>
      ),
    },
    {
      title: "Urine Profile (19 Tests)",
      description: (
        <ul className="list-disc pl-5">
          <li>Quantity</li>
          <li>Colour</li>
          <li>Transparency</li>
          <li>Specific Gravity</li>
          <li>pH</li>
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
          <li>Epithelial Cells</li>
          <li>Bacteria</li>
          <li>Urine Protein</li>
          <li>Urine Bilirubin</li>
        </ul>
      ),
    },
    {
      title: "Liver Function Test (12 Tests)",
      description: (
        <ul className="list-disc pl-5">
          <li>SGPT</li>
          <li>SGOT</li>
          <li>Total Proteins</li>
          <li>Albumin</li>
          <li>Globulin</li>
          <li>A/G Ratio</li>
          <li>Bilirubin Direct</li>
          <li>Bilirubin Indirect</li>
          <li>Bilirubin Total</li>
          <li>SGOT/SGPT Ratio</li>
          <li>Gamma GT</li>
        </ul>
      ),
    },
    {
      title: "Electrolyte Profile (4 Tests)",
      description: (
        <ul className="list-disc pl-5">
          <li>Sodium</li>
          <li>Potassium</li>
          <li>Chloride</li>
          <li>Bicarbonate</li>
        </ul>
      ),
    },
    {
      title: "Vitamin Profile (2 Tests)",
      description: (
        <ul className="list-disc pl-5">
          <li>Vitamin B12</li>
          <li>Vitamin D</li>
        </ul>
      ),
    },
    {
      title: "Cancer Profile (1 Test)",
      description: (
        <ul className="list-disc pl-5">
          <li>PSA Total</li>
        </ul>
      ),
    },
    {
      title: "Hormones Profile (1 Test)",
      description: (
        <ul className="list-disc pl-5">
          <li>Testosterone Total</li>
        </ul>
      ),
    },
    {
      title: "Arthritis Profile (3 Tests)",
      description: (
        <ul className="list-disc pl-5">
          <li>RA Factor</li>
          <li>CRP</li>
        </ul>
      ),
    },
  ];

  const toggleService = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Best Full Body Checkup in Noida at Home – Dr Pathcares</title>
        <meta
          name="description"
          content="Get the best full body checkup in Noida at home with Dr. PathCares. Enjoy hassle-free doorstep diagnostic services, accurate results, and comprehensive health monitoring."
        />
        <link rel="canonical" href="https://www.drpathcares.com/" />

        {/* JSON-LD Structured Data */}
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.drpathcares.com/#organization",
              url: "https://www.drpathcares.com/",
              logo: "https://drpathcares.com/_next/image?url=%2Fimages%2Fmainlogo.png&w=256&q=75",
              name: "Dr. Path Cares",
              sameAs: [
                "https://www.facebook.com/drpathcares1",
                "https://www.instagram.com/drpathcares",
                "https://www.linkedin.com/company/dr-path-cares/",
                "https://www.youtube.com/@dr.pathcares",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-8929062906",
                  contactType: "customer support",
                  email: "info@drpathcares.com",
                },
              ],
            }),
          }}
        />
      </Head>

      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
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

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5ZVV8F74"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* JSON-LD Structured Data */}
      <Script
        id="json-ld-organization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            url: "https://www.drpathcares.com/",
            logo: "https://drpathcares.com/_next/image?url=%2Fimages%2Fmainlogo.png&w=256&q=75",
            name: "Dr. Path Cares",
            sameAs: [
              "https://www.facebook.com/drpathcares1",
              "https://www.instagram.com/drpathcares",
              "https://www.linkedin.com/company/dr-path-cares/",
              "https://www.youtube.com/@dr.pathcares",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-8929062906",
              contactType: "Customer service",
              email: "Info@Drpathcares.com",
            },
          }),
        }}
      />
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
                <span className="text-lg">
                  {openIndex === index ? "-" : "+"}
                </span>
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
    </>
  );
};

export default ClassicMenPackage;
