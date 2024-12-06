"use client";
import React from "react";

const AddressPage = () => {
  return (
    <section className="px-6 py-10 max-w-4xl mx-auto bg-[#00B7AB] text-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-extrabold text-center mb-8">
        Lab Addresses
      </h1>

      {/* Delhi Lab Addresses */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-white pb-2">Delhi Lab Address</h2>
        <ol className="list-decimal ml-5 space-y-4 text-lg">
          <li>
            <strong>Dr. Pathcares Wellnesscare Laboratory</strong> <br />
            Plot No. B-295, HV Complex, 1st Floor, New Ashok Nagar, Delhi - 110096
          </li>
          <li>
            2nd Floor, RZ-4, Dabri - Palam Rd, Opp. Dada Dev Hospital, Dabri Village, Dabri,
            New Delhi, Delhi - 110045
          </li>
        </ol>
      </div>

      {/* Rajasthan Lab Address */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-white pb-2">Rajasthan Lab Address</h2>
        <p className="text-lg">
          Plot No. 17, Near ICICI Bank, Purani Chungi, Vidhyut Nagar, Jaipur, Rajasthan -
          302019
        </p>
      </div>

      {/* Punjab Lab Address */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-white pb-2">Punjab Lab Address</h2>
        <p className="text-lg">
          C-56-A, City Heart, Chandigarh Road, Kharar, Mohali - 140301
        </p>
      </div>
    </section>
  );
};

export default AddressPage;