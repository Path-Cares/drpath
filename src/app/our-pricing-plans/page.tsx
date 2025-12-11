"use client";

import React, { useEffect, useMemo, useState } from "react";

type TestItem = {
  id: number;
  testDetails: string;
  sampleType?: string;
  method?: string;
  mrp?: number | string;
};

const ITEMS_PER_PAGE = 50;

/**
 * First 50 tests extracted exactly from the uploaded PDF.
 * Source: uploaded PDF. :contentReference[oaicite:1]{index=1}
 */
const PRICE_LIST_FIRST_50: TestItem[] = [
  {
    id: 1,
    testDetails: "17-Alpha Hydroxy Progesterone (17- OHP)",
    sampleType: "Serum (1 ml)",
    method: "CUA/ELISA",
    mrp: 1250,
  },
  {
    id: 2,
    testDetails: "A4 (Androstenedione)",
    sampleType: "Serum (2 ml)",
    method: "CLIA",
    mrp: 1350,
  },
  {
    id: 3,
    testDetails: "ABO Group & RH Type (Blood Group)",
    sampleType: "WB-EDTA (3ml)",
    method: "Agglutination",
    mrp: 120,
  },
  {
    id: 4,
    testDetails: "Absolute Eosinophil Count (AEC)",
    sampleType: "WB-EDTA (3ml)",
    method: "Cell Counter & Microscopy",
    mrp: 150,
  },
  {
    id: 5,
    testDetails: "ACE (Angiotensin Converting Enzyme)",
    sampleType: "Serum (2 ml)",
    method: "Spectrophotometry",
    mrp: 900,
  },
  {
    id: 6,
    testDetails: "Acid Fast Bacilli Stain (Z. N. Stain)",
    sampleType:
      "Pulmonary/Extra Pulmonary (Sputum/ BAL/Urine/Pus/CSF/ Body Fluids/Blood/ Tissue)",
    method: "Microscopy",
    mrp: 180,
  },
  {
    id: 7,
    testDetails: "Active Vitamin B-12 (Holotranscoblamin)",
    sampleType: "Serum (2 ml)",
    method: "CLIA",
    mrp: 1400,
  },
  {
    id: 8,
    testDetails: "Aldosterone to Renin Activity",
    sampleType: "2 ml EDTA & 2 ml Serum",
    method: "EINRIA",
    mrp: 6500,
  },
  {
    id: 9,
    testDetails: "Acid Phosphatase- Total",
    sampleType: "Serum (1 ml) add 1 drop (30ul) of 5% acetic acid to serum",
    method: "Spectrophotometry",
    mrp: 250,
  },
  {
    id: 10,
    testDetails: "ACTH (Adreno Cortico Trophic Hormone)",
    sampleType: "EDTA Plasma (5 ml)",
    method: "CLIA",
    mrp: 1100,
  },
  {
    id: 11,
    testDetails: "Activated Partial Thromboplastin Time (APTT / PTTK)",
    sampleType: "Plasma Citrated (1ml)",
    method: "Clotting (Coagulometry)",
    mrp: 350,
  },
  {
    id: 12,
    testDetails: "Adenosine Deaminase (ADA) (Ascitic Fluid)",
    sampleType: "Ascitic fluid (5 ml)",
    method: "Spectrophotometry",
    mrp: 500,
  },
  {
    id: 13,
    testDetails: "Adenosine Deaminase (ADA) (Body Fluid)",
    sampleType: "Any Other Body Fluid",
    method: "Spectrophotometry",
    mrp: 500,
  },
  {
    id: 14,
    testDetails: "Adenosine Deaminase (ADA) (Pericardial Fluid)",
    sampleType: "Pericardial Fluid (1 ml)",
    method: "Spectrophotometry",
    mrp: 500,
  },
  {
    id: 15,
    testDetails: "Adenosine Deaminase (ADA) (Pleural Fluid)",
    sampleType: "Pleural Fluid (1 ml)",
    method: "Spectrophotometry",
    mrp: 500,
  },
  {
    id: 16,
    testDetails: "Adenosine Deaminase (ADA) (Pus)",
    sampleType: "Pus (1 ml)",
    method: "Spectrophotometry",
    mrp: 500,
  },
  {
    id: 17,
    testDetails: "Adenosine Deaminase (ADA) (CSF)",
    sampleType: "CSF (1.0 ml)",
    method: "Spectrophotometry",
    mrp: 500,
  },
  {
    id: 18,
    testDetails: "Adenosine Deaminase (ADA) (Serum)",
    sampleType: "Serum (1 ml)",
    method: "Spectrophotometry",
    mrp: 500,
  },
  {
    id: 19,
    testDetails: "AFP (Alpha Feto Protein)",
    sampleType: "Serum (1 ml)",
    method: "CLIA",
    mrp: 650,
  },
  {
    id: 20,
    testDetails: "Albumin",
    sampleType: "Serum (1 ml)",
    method: "Spectrophotometry",
    mrp: 130,
  },
  {
    id: 21,
    testDetails: "Alkaline Phosphatase (ALP)",
    sampleType: "Serum (1 ml)",
    method: "Spectrophotometry",
    mrp: 130,
  },
  {
    id: 22,
    testDetails: "Allergy- Food (Non Vegetarian Only)",
    sampleType: "Serum (2 ml)",
    method: "ELISA",
    mrp: 3000,
  },
  {
    id: 23,
    testDetails: "Allergy- Food (Vegetarian Only)",
    sampleType: "Serum (2 ml)",
    method: "ELISA",
    mrp: 3000,
  },
  {
    id: 24,
    testDetails: "Allergy- Inhalants",
    sampleType: "Serum (2 ml)",
    method: "ELISA",
    mrp: 3000,
  },
  {
    id: 25,
    testDetails: "AMA (Anti Mitochondrial Antibodies-M2) ELISA",
    sampleType: "Serum (1 ml)",
    method: "ELISA",
    mrp: 1300,
  },
  {
    id: 26,
    testDetails: "Amylase, 24 Hr. Urine",
    sampleType: "24hrs Urine (5 ml)",
    method: "Spectrophotometry",
    mrp: 400,
  },
  {
    id: 27,
    testDetails: "Amylase Serum",
    sampleType: "Serum (2 ml)",
    method: "Spectrophotometry",
    mrp: 400,
  },
  {
    id: 28,
    testDetails: "ANA (Anti Nuclear Antibodies) by IFA",
    sampleType: "Serum (3 ml)",
    method: "IFA",
    mrp: 890,
  },
  {
    id: 29,
    testDetails: "ANA (Anti Nuclear Antibodies) by ELISA",
    sampleType: "Serum (2 ml)",
    method: "ELISA",
    mrp: 550,
  },
  {
    id: 30,
    testDetails:
      "ANCA (Anti Neutrophil Cytoplasmic Antibodies) (P- ANCA, C-ANCA)",
    sampleType: "Serum (3 ml)",
    method: "ELISA",
    mrp: 2000,
  },
  {
    id: 31,
    testDetails: "Anti Microsomal Antibodies (Anti Thyroperoxidase) (TPO)",
    sampleType: "Serum (2 ml)",
    method: "CLIA",
    mrp: 900,
  },
  {
    id: 32,
    testDetails: "Anti Mullarian Hormone (AMH)",
    sampleType: "Serum (2 ml)",
    method: "CLIA",
    mrp: 1800,
  },
  {
    id: 33,
    testDetails: "Anti Sperm Antibodies (ASAB)",
    sampleType: "Serum (3 ml)",
    method: "ELISA",
    mrp: 850,
  },
  {
    id: 34,
    testDetails: "Anti Thrombin III (AT-III) (Antigenic)",
    sampleType: "Plasma Citrated (2 ml)",
    method: "Turbidometry",
    mrp: 3000,
  },
  {
    id: 35,
    testDetails: "Apolipoprotein A1 (APO-A1)",
    sampleType: "Serum (2 ml)",
    method: "Nephelometry",
    mrp: 480,
  },
  {
    id: 36,
    testDetails: "Apolipoprotein B (APO-B)",
    sampleType: "Serum (2 ml)",
    method: "Nephelometry",
    mrp: 480,
  },
  {
    id: 37,
    testDetails: "ASMA (Anti Smooth Muscle Antibodies) Elisa",
    sampleType: "Serum (2 ml)",
    method: "ELISA",
    mrp: 1500,
  },
  {
    id: 38,
    testDetails: "ASO- Titer (Anti Streptolysin O Titres) Quantitative",
    sampleType: "Serum (2 ml)",
    method: "Agglutination",
    mrp: 375,
  },
  {
    id: 39,
    testDetails: "Aspergillus IgE",
    sampleType: "Serum (2 ml)",
    method: "ELISA",
    mrp: 1950,
  },
  {
    id: 40,
    testDetails: "ATG (Antithyroglobulin Antibodies)",
    sampleType: "Serum (2 ml)",
    method: "CLIA",
    mrp: 1100,
  },
  {
    id: 41,
    testDetails: "APO A1 / APO B Ratio",
    sampleType: "Serum (2 ml)",
    method: "Nephelometry",
    mrp: 900,
  },
  {
    id: 42,
    testDetails: "Allergy panel-II (Vegeterian+ Inhalants+ Drugs)",
    sampleType: "Serum (1 ml)",
    method: "ELISA",
    mrp: 5200,
  },
  {
    id: 43,
    testDetails:
      "BCR-abl translocation (Philadelphia Chromosome) (Quantitative) (Real Time PCR)",
    sampleType: "WB- EDTA (3mL)",
    method: "Real Time PCR",
    mrp: 6800,
  },
  {
    id: 44,
    testDetails: "Beta 2 Microglobulin, Serum",
    sampleType: "Serum (1 ml)",
    method: "CLIA",
    mrp: 1200,
  },
  {
    id: 45,
    testDetails: "Beta 2 Microglobulin, Urine",
    sampleType: "Urine Spot",
    method: "CLIA",
    mrp: 1200,
  },
  {
    id: 46,
    testDetails: "Beta HCG (Beta Human Chorionic Gonadotropin)",
    sampleType: "Serum (1 ml)",
    method: "CLIA",
    mrp: 550,
  },
  {
    id: 47,
    testDetails: "Beta HCG (Beta Human Chorionic Gonadotropin) (Urine)",
    sampleType: "Urine (5 ml)",
    method: "CLIA",
    mrp: 550,
  },
  {
    id: 48,
    testDetails: "Beta-2 Glycoprotein-1 IgG",
    sampleType: "Serum (2 ml)",
    method: "ELISA",
    mrp: 1000,
  },
  {
    id: 49,
    testDetails: "Beta-2 Glycoprotein-1 IgM",
    sampleType: "Serum (2 ml)",
    method: "ELISA",
    mrp: 1000,
  },
  {
    id: 50,
    testDetails: "Beta-2 Glycoprotein-1 IgA",
    sampleType: "Serum (2 ml)",
    method: "ELISA",
    mrp: 1000,
  },
];

export default function PricingPage() {
  const [items, setItems] = useState<TestItem[]>([]);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    // Load first 50 (exact) from the PDF-derived array
    setItems(PRICE_LIST_FIRST_50);
  }, []);

  // Optional search — no "Matches" display as requested
  const filtered = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter(
      (it) =>
        String(it.id).includes(q) ||
        it.testDetails.toLowerCase().includes(q) ||
        String(it.mrp).toLowerCase().includes(q)
    );
  }, [items, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentPageItems = filtered.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [totalPages, page]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
        <header className="px-6 py-6 border-b  flex justify-center items-center">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Our Pricing Plans
          </h1>
          {/* <p className="mt-2 text-sm text-gray-600">
            Showing first {ITEMS_PER_PAGE} tests (data taken from uploaded price
            list).
          </p> */}
        </header>

        {/* Top controls: Search only (no matches, no pagination at top) */}
        <div className="flex items-center justify-between gap-3 px-6 py-4 border-b">
          <div className="flex items-center gap-3 w-full md:w-1/2">
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Search by id, test name or price..."
              className="w-full md:w-80 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B7AB]"
            />
          </div>
        </div>

        {/* Table container - allow horizontal scroll inside card only */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 sticky top-0">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  S. No.
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  Test Details
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  Sample Type
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  Method
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">
                  MRP (₹)
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-100">
              {currentPageItems.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-8 text-center text-gray-500"
                  >
                    No items to display.
                  </td>
                </tr>
              ) : (
                currentPageItems.map((it) => (
                  <tr key={it.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">{it.id}</td>
                    <td className="px-4 py-3 text-sm text-gray-800">
                      {it.testDetails}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {it.sampleType ?? "-"}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {it.method ?? "-"}
                    </td>
                    <td className="px-4 py-3 text-sm text-right font-medium">
                      {it.mrp}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Bottom pagination only — aligned to bottom-right */}
        <div className="px-6 py-4 border-t">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Showing{" "}
              <span className="font-medium">
                {Math.min(startIndex + 1, filtered.length || 0)}
              </span>{" "}
              to{" "}
              <span className="font-medium">
                {Math.min(startIndex + ITEMS_PER_PAGE, filtered.length)}
              </span>{" "}
              of <span className="font-medium">{filtered.length}</span> results
            </div>

            {/* Pagination controls — bottom right */}
            <div className="flex items-center gap-2 justify-end">
              <button
                onClick={() => setPage(1)}
                disabled={page === 1}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                First
              </button>
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Prev
              </button>

              <div className="px-3 py-1 border rounded bg-white">{page}</div>

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Next
              </button>
              <button
                onClick={() => setPage(totalPages)}
                disabled={page === totalPages}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Last
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
