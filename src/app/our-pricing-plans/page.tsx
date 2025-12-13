"use client";

import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
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
const PRICE_LIST_FIRST_150: TestItem[] = [
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
  {
    id: 51,
    testDetails: "Bicarbonate (HCO3)",
    sampleType: "Serum (2 ml)",
    method: "Spectrophotometry",
    mrp: 600,
  },
  {
    id: 52,
    testDetails: "Bile Acids",
    sampleType: "Serum (2 ml)",
    method: "Spectrophotometry",
    mrp: 2100,
  },
  {
    id: 53,
    testDetails: "Bilirubin - Direct",
    sampleType: "Serum (1 ml)",
    method: "Spectrophotometry",
    mrp: 120,
  },
  {
    id: 54,
    testDetails: "Bilirubin - Indirect",
    sampleType: "Serum (1 ml)",
    method: "Calculated",
    mrp: 120,
  },
  {
    id: 55,
    testDetails: "Bilirubin - Total",
    sampleType: "Serum (1 ml)",
    method: "Spectrophotometry",
    mrp: 120,
  },
  {
    id: 56,
    testDetails: "Bilirubin Total + Direct + Indirect",
    sampleType: "Serum (2 ml)",
    method: "Spectrophotometry",
    mrp: 250,
  },
  {
    id: 57,
    testDetails: "Bilirubin (Urine)",
    sampleType: "Urine (5 ml)",
    method: "Spectrophotometry",
    mrp: 120,
  },
  {
    id: 58,
    testDetails: "Biopsy – Mastectomy Specimen",
    sampleType: "Tissue in formalin",
    method: "Histopathology",
    mrp: 2000,
  },
  {
    id: 59,
    testDetails: "Biopsy Material (Large Size)",
    sampleType: "Tissue in 10% buffered formalin",
    method: "Microscopy",
    mrp: 1500,
  },
  {
    id: 60,
    testDetails: "Biopsy Material (Kidney)",
    sampleType: "Tissue in 10% buffered formalin",
    method: "Microscopy",
    mrp: 2000,
  },
  {
    id: 61,
    testDetails: "Biopsy Material (Medium Size)",
    sampleType: "Tissue in 10% buffered formalin",
    method: "Microscopy",
    mrp: 1000,
  },
  {
    id: 62,
    testDetails: "Biopsy Material (Small Size)",
    sampleType: "Tissue in 10% buffered formalin",
    method: "Microscopy",
    mrp: 700,
  },
  {
    id: 63,
    testDetails: "BNP (B-type Natriuretic Peptide)",
    sampleType: "EDTA Plasma (5 ml)",
    method: "CLIA",
    mrp: 1800,
  },
  {
    id: 64,
    testDetails: "BUN (Blood Urea Nitrogen)",
    sampleType: "Serum (1 ml)",
    method: "Spectrophotometry",
    mrp: 200,
  },
  {
    id: 65,
    testDetails: "C Reactive Protein (CRP) – Qualitative",
    sampleType: "Serum (1 ml)",
    method: "Agglutination",
    mrp: 300,
  },
  {
    id: 66,
    testDetails: "C Reactive Protein (CRP) – Quantitative",
    sampleType: "Serum (1 ml)",
    method: "Immunoturbidimetry",
    mrp: 400,
  },
  {
    id: 67,
    testDetails: "hsCRP (High Sensitivity CRP)",
    sampleType: "Serum / EDTA Plasma",
    method: "Immunoturbidimetry",
    mrp: 550,
  },
  {
    id: 68,
    testDetails: "Complement C3",
    sampleType: "Serum (1 ml)",
    method: "Nephelometry",
    mrp: 480,
  },
  {
    id: 69,
    testDetails: "Complement C4",
    sampleType: "Serum (1 ml)",
    method: "Nephelometry",
    mrp: 480,
  },
  {
    id: 70,
    testDetails: "CA 15.3 (Breast Cancer Marker)",
    sampleType: "Serum (1 ml)",
    method: "CLIA",
    mrp: 1000,
  },
  {
    id: 71,
    testDetails: "CA 125 (Ovarian Cancer Marker)",
    sampleType: "Serum (1 ml)",
    method: "CLIA",
    mrp: 1000,
  },
  {
    id: 72,
    testDetails: "CA 19.9 (Pancreatic Cancer Marker)",
    sampleType: "Serum (1 ml)",
    method: "CLIA",
    mrp: 1000,
  },
  {
    id: 73,
    testDetails: "Calcitonin",
    sampleType: "Serum (2 ml)",
    method: "ELISA",
    mrp: 2300,
  },
  {
    id: 74,
    testDetails: "Calcium – Total",
    sampleType: "Serum (1 ml)",
    method: "Spectrophotometry",
    mrp: 120,
  },
  {
    id: 75,
    testDetails: "C-ANCA (Proteinase-3)",
    sampleType: "Serum (2 ml)",
    method: "ELISA",
    mrp: 1400,
  },
  {
    id: 76,
    testDetails: "CEA (Carcino Embryonic Antigen)",
    sampleType: "Serum (1 ml)",
    method: "CLIA",
    mrp: 900,
  },
  {
    id: 77,
    testDetails: "Ceruloplasmin",
    sampleType: "Serum (1 ml)",
    method: "Nephelometry",
    mrp: 900,
  },
  {
    id: 78,
    testDetails: "Chikungunya IgM",
    sampleType: "Serum (2 ml)",
    method: "ELISA",
    mrp: 650,
  },
  {
    id: 79,
    testDetails: "Chikungunya IgG",
    sampleType: "Serum (2 ml)",
    method: "ELISA",
    mrp: 650,
  },
  {
    id: 80,
    testDetails: "Chloride",
    sampleType: "Serum (1 ml)",
    method: "ISE",
    mrp: 150,
  },
  {
    id: 81,
    testDetails: "Cholesterol – Total",
    sampleType: "Serum (1 ml)",
    method: "Enzymatic",
    mrp: 150,
  },
  {
    id: 82,
    testDetails: "Cholesterol – HDL",
    sampleType: "Serum (1 ml)",
    method: "Direct Enzymatic",
    mrp: 200,
  },
  {
    id: 83,
    testDetails: "Cholesterol – LDL",
    sampleType: "Serum (1 ml)",
    method: "Calculated",
    mrp: 200,
  },
  {
    id: 84,
    testDetails: "Cholesterol – VLDL",
    sampleType: "Serum (1 ml)",
    method: "Calculated",
    mrp: 200,
  },
  {
    id: 85,
    testDetails: "CK (Creatine Kinase)",
    sampleType: "Serum (1 ml)",
    method: "Spectrophotometry",
    mrp: 300,
  },
  {
    id: 86,
    testDetails: "CK-MB",
    sampleType: "Serum (1 ml)",
    method: "CLIA",
    mrp: 600,
  },
  {
    id: 87,
    testDetails: "Complete Blood Count (CBC)",
    sampleType: "WB-EDTA (3 ml)",
    method: "Cell Counter",
    mrp: 300,
  },
  {
    id: 88,
    testDetails: "Coombs Test – Direct",
    sampleType: "WB-EDTA (3 ml)",
    method: "Agglutination",
    mrp: 450,
  },
  {
    id: 89,
    testDetails: "Coombs Test – Indirect",
    sampleType: "Serum (2 ml)",
    method: "Agglutination",
    mrp: 450,
  },
  {
    id: 90,
    testDetails: "Copper",
    sampleType: "Serum (2 ml)",
    method: "Colorimetry",
    mrp: 1200,
  },
  {
    id: 91,
    testDetails: "Cortisol – Morning",
    sampleType: "Serum (2 ml)",
    method: "CLIA",
    mrp: 800,
  },
  {
    id: 92,
    testDetails: "Cortisol – Evening",
    sampleType: "Serum (2 ml)",
    method: "CLIA",
    mrp: 800,
  },
  {
    id: 93,
    testDetails: "Creatinine",
    sampleType: "Serum (1 ml)",
    method: "Jaffe",
    mrp: 120,
  },
  {
    id: 94,
    testDetails: "Creatinine Clearance",
    sampleType: "Serum + 24 hr Urine",
    method: "Calculated",
    mrp: 400,
  },
  {
    id: 95,
    testDetails: "D-Dimer",
    sampleType: "Plasma Citrated",
    method: "Immunoturbidimetry",
    mrp: 1200,
  },
  {
    id: 96,
    testDetails: "Dengue IgM",
    sampleType: "Serum (2 ml)",
    method: "ELISA",
    mrp: 650,
  },
  {
    id: 97,
    testDetails: "Dengue IgG",
    sampleType: "Serum (2 ml)",
    method: "ELISA",
    mrp: 650,
  },
  {
    id: 98,
    testDetails: "Dengue NS1 Antigen",
    sampleType: "Serum (2 ml)",
    method: "ELISA",
    mrp: 900,
  },
  {
    id: 99,
    testDetails: "ESR (Erythrocyte Sedimentation Rate)",
    sampleType: "WB-EDTA (3 ml)",
    method: "Westergren",
    mrp: 100,
  },
  {
    id: 100,
    testDetails: "Electrolytes (Na / K / Cl)",
    sampleType: "Serum (2 ml)",
    method: "ISE",
    mrp: 350,
  },
  {
    id: 101,
    testDetails: "Ferritin",
    sampleType: "Serum (2 ml)",
    method: "CLIA",
    mrp: 650,
  },
  {
    id: 102,
    testDetails: "Folate",
    sampleType: "Serum (2 ml)",
    method: "CLIA",
    mrp: 1200,
  },
  {
    id: 103,
    testDetails: "FSH",
    sampleType: "Serum (2 ml)",
    method: "CLIA",
    mrp: 650,
  },
  {
    id: 104,
    testDetails: "Free T3",
    sampleType: "Serum (2 ml)",
    method: "CLIA",
    mrp: 350,
  },
  {
    id: 105,
    testDetails: "Free T4",
    sampleType: "Serum (2 ml)",
    method: "CLIA",
    mrp: 350,
  },
  {
    id: 106,
    testDetails: "Gamma GT (GGT)",
    sampleType: "Serum (1 ml)",
    method: "Enzymatic",
    mrp: 250,
  },
  {
    id: 107,
    testDetails: "Glucose – Fasting",
    sampleType: "Fluoride Plasma",
    method: "GOD-POD",
    mrp: 80,
  },
  {
    id: 108,
    testDetails: "Glucose – PP",
    sampleType: "Fluoride Plasma",
    method: "GOD-POD",
    mrp: 80,
  },
  {
    id: 109,
    testDetails: "HbA1c",
    sampleType: "WB-EDTA (2 ml)",
    method: "HPLC",
    mrp: 450,
  },
  {
    id: 110,
    testDetails: "Hemoglobin",
    sampleType: "WB-EDTA (2 ml)",
    method: "Photometry",
    mrp: 100,
  },
  {
    id: 111,
    testDetails: "Hepatitis B Surface Antigen (HBsAg)",
    sampleType: "Serum (2 ml)",
    method: "CLIA",
    mrp: 400,
  },
  {
    id: 112,
    testDetails: "Hepatitis C Antibody (HCV)",
    sampleType: "Serum (2 ml)",
    method: "CLIA",
    mrp: 650,
  },
  {
    id: 113,
    testDetails: "HIV I & II",
    sampleType: "Serum (2 ml)",
    method: "CLIA",
    mrp: 600,
  },
  {
    id: 114,
    testDetails: "IgA",
    sampleType: "Serum (1 ml)",
    method: "Nephelometry",
    mrp: 450,
  },
  {
    id: 115,
    testDetails: "IgG",
    sampleType: "Serum (1 ml)",
    method: "Nephelometry",
    mrp: 450,
  },
  {
    id: 116,
    testDetails: "IgM",
    sampleType: "Serum (1 ml)",
    method: "Nephelometry",
    mrp: 450,
  },
  {
    id: 117,
    testDetails: "Insulin – Fasting",
    sampleType: "Serum (2 ml)",
    method: "CLIA",
    mrp: 900,
  },
  {
    id: 118,
    testDetails: "Iron",
    sampleType: "Serum (1 ml)",
    method: "Colorimetry",
    mrp: 250,
  },
  {
    id: 119,
    testDetails: "LDH",
    sampleType: "Serum (1 ml)",
    method: "Enzymatic",
    mrp: 300,
  },
  {
    id: 120,
    testDetails: "LH",
    sampleType: "Serum (2 ml)",
    method: "CLIA",
    mrp: 650,
  },
  {
    id: 121,
    testDetails: "Lipase",
    sampleType: "Serum (1 ml)",
    method: "Enzymatic",
    mrp: 400,
  },
  {
    id: 122,
    testDetails: "Magnesium",
    sampleType: "Serum (1 ml)",
    method: "Colorimetry",
    mrp: 200,
  },
  {
    id: 123,
    testDetails: "Phosphorus",
    sampleType: "Serum (1 ml)",
    method: "Colorimetry",
    mrp: 200,
  },
  {
    id: 124,
    testDetails: "Potassium",
    sampleType: "Serum (1 ml)",
    method: "ISE",
    mrp: 150,
  },
  {
    id: 125,
    testDetails: "Prolactin",
    sampleType: "Serum (2 ml)",
    method: "CLIA",
    mrp: 650,
  },
  {
    id: 126,
    testDetails: "PSA – Total",
    sampleType: "Serum (2 ml)",
    method: "CLIA",
    mrp: 650,
  },
  {
    id: 127,
    testDetails: "PSA – Free",
    sampleType: "Serum (2 ml)",
    method: "CLIA",
    mrp: 650,
  },
  {
    id: 128,
    testDetails: "Rheumatoid Factor (RF)",
    sampleType: "Serum (1 ml)",
    method: "Immunoturbidimetry",
    mrp: 350,
  },
  {
    id: 129,
    testDetails: "Sodium",
    sampleType: "Serum (1 ml)",
    method: "ISE",
    mrp: 150,
  },
  {
    id: 130,
    testDetails: "SGOT (AST)",
    sampleType: "Serum (1 ml)",
    method: "IFCC",
    mrp: 150,
  },
  {
    id: 131,
    testDetails: "SGPT (ALT)",
    sampleType: "Serum (1 ml)",
    method: "IFCC",
    mrp: 150,
  },
  {
    id: 132,
    testDetails: "Total Protein",
    sampleType: "Serum (1 ml)",
    method: "Biuret",
    mrp: 150,
  },
  {
    id: 133,
    testDetails: "Triglycerides",
    sampleType: "Serum (1 ml)",
    method: "Enzymatic",
    mrp: 150,
  },
  {
    id: 134,
    testDetails: "TSH",
    sampleType: "Serum (2 ml)",
    method: "CLIA",
    mrp: 300,
  },
  {
    id: 135,
    testDetails: "Urea",
    sampleType: "Serum (1 ml)",
    method: "Urease",
    mrp: 120,
  },
  {
    id: 136,
    testDetails: "Uric Acid",
    sampleType: "Serum (1 ml)",
    method: "Uricase",
    mrp: 150,
  },
  {
    id: 137,
    testDetails: "Urine Routine",
    sampleType: "Urine",
    method: "Microscopy",
    mrp: 120,
  },
  {
    id: 138,
    testDetails: "Vitamin B12",
    sampleType: "Serum (2 ml)",
    method: "CLIA",
    mrp: 900,
  },
  {
    id: 139,
    testDetails: "Vitamin D (25-OH)",
    sampleType: "Serum (2 ml)",
    method: "CLIA",
    mrp: 1500,
  },
  {
    id: 140,
    testDetails: "VLDL",
    sampleType: "Serum (1 ml)",
    method: "Calculated",
    mrp: 150,
  },
  {
    id: 141,
    testDetails: "Widal Test",
    sampleType: "Serum (2 ml)",
    method: "Agglutination",
    mrp: 200,
  },
  {
    id: 142,
    testDetails: "Zinc",
    sampleType: "Serum (2 ml)",
    method: "Colorimetry",
    mrp: 1200,
  },
  {
    id: 143,
    testDetails: "Blood Urea",
    sampleType: "Serum (1 ml)",
    method: "Urease",
    mrp: 120,
  },
  {
    id: 144,
    testDetails: "Calcium – Ionized",
    sampleType: "Serum (1 ml)",
    method: "ISE",
    mrp: 350,
  },
  {
    id: 145,
    testDetails: "Estradiol (E2)",
    sampleType: "Serum (2 ml)",
    method: "CLIA",
    mrp: 850,
  },
  {
    id: 146,
    testDetails: "Progesterone",
    sampleType: "Serum (2 ml)",
    method: "CLIA",
    mrp: 850,
  },
  {
    id: 147,
    testDetails: "Testosterone – Total",
    sampleType: "Serum (2 ml)",
    method: "CLIA",
    mrp: 850,
  },
  {
    id: 148,
    testDetails: "Troponin I",
    sampleType: "Serum (2 ml)",
    method: "CLIA",
    mrp: 1200,
  },
  {
    id: 149,
    testDetails: "Vitamin A",
    sampleType: "Serum (2 ml)",
    method: "HPLC",
    mrp: 2200,
  },
  {
    id: 150,
    testDetails: "Vitamin E",
    sampleType: "Serum (2 ml)",
    method: "HPLC",
    mrp: 2200,
  },
];

export default function PricingPage() {
  const [items, setItems] = useState<TestItem[]>([]);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    setItems(PRICE_LIST_FIRST_150);
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
    <>
      <Nav />
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
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {it.id}
                      </td>
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
                of <span className="font-medium">{filtered.length}</span>{" "}
                results
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
      <Footer />
    </>
  );
}
