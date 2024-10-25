import Footer from '@/components/Footer';
import React from 'react';

const Disclaimer: React.FC = () => {
  return (
    <>
      <div className="p-6 bg-white">
        {/* Section 1: Disclaimer for DrPathCares */}
        <section className="mb-8">
          <h1 className="text-2xl font-bold text-black mb-4">1. Disclaimer For DrPathCares</h1>
          <p className="text-lg">
            If you require any more information or have any questions about our site's disclaimer, please feel free to
            contact us by email at <a href="mailto:Drpathcares1@Gmail.Com" className="underline">Drpathcares1@Gmail.Com</a>.
          </p>
        </section>

        {/* Section 2: Disclaimers for DrPathCares */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">2. Disclaimers For DrPathCares</h2>
          <p className="text-lg mb-4">
            All The Information On This Website - Drpathcares - Is Published In Good Faith And For General Information Purpose Only. DrPathCares Does Not Make Any Warranties About The Completeness, Reliability And Accuracy Of This Information. Any Action You Take Upon The Information You Find On This Website (DrPathCares), Is Strictly At Your Own Risk. DrPathCares Will Not Be Liable For Any Losses And/Or Damages In Connection With The Use Of Our Website.
          </p>
          <p className="text-lg">
            From Our Website, You Can Visit Other Websites By Following Hyperlinks To Such External Sites. While We Strive To Provide Only Quality Links To Useful And Ethical Websites, We Have No Control Over The Content And Nature Of These Sites. These Links To Other Websites Do Not Imply A Recommendation For All The Content Found On These Sites. Site Owners And Content May Change Without Notice And May Occur Before We Have The Opportunity To Remove A Link Which May Have Gone &apos;Bad&apos;.
          </p>
          <p className="text-lg mb-4">
            Please Be Also Aware That When You Leave Our Website, Other Sites May Have Different Privacy Policies And Terms Which Are Beyond Our Control. Please Be Sure To Check The Privacy Policies Of These Sites As Well As Their &quot;Terms Of Service&quot; Before Engaging In Any Business Or Uploading Any Information.
          </p>
        </section>

        {/* Section 3: Consent */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">3. Consent</h2>
          <p className="text-lg mb-4">
            By Using Our Website, You Hereby Consent To Our Disclaimer And Agree To Its Terms.
          </p>
          <div className="flex space-x-4">
            <button className="bg-[#00B7AB] text-white px-6 py-2 hover:bg-red-700">Accept</button>
            <button className="bg-[#00B7AB] text-white px-6 py-2 hover:bg-gray-800">Close</button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Disclaimer;
