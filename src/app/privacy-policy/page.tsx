import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Head from "next/head";
import Script from "next/script";
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy – Dr Pathcares</title>
        <meta
          name="description"
          content="Read the Privacy Policy of Dr Pathcares to understand how we collect, use, share, and protect your personal information when using our services."
        />
        <link
          rel="canonical"
          href="https://www.drpathcares.com/privacy-policy"
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

      <Nav />

      <div className="px-28 pt-10 bg-white">
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-6">Privacy Policy</h1>
        </section>

        {/* How we share the information we collect */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            How we share the information we collect
          </h2>

          <p className="text-lg mb-4">
            We may disclose personal information that we collect or you provide,
            as described in this privacy policy, in the following ways:
          </p>

          <p className="text-lg font-semibold mb-2">
            General Information Disclosures
          </p>

          <p className="text-lg mb-4">
            To our subsidiaries and affiliates, which are entities under common
            ownership or control of our ultimate parent company BIOLIFE
            WELLNESSCARE PVT LTD.
          </p>

          <p className="text-lg mb-4">
            To contractors, advertisers/service providers and other
            third-parties whom we use to support our business and who are bound
            by contractual obligations to keep personal information confidential
            and use it only for the purposes for which we disclose it to them.
          </p>

          <p className="text-lg mb-4">
            To a buyer or other successor in the event of a merger, divestiture,
            restructuring, reorganization, dissolution or other sale or transfer
            of some or all of BIOLIFE WELLNESSCARE PVT LTD assets, whether as a
            going concern or as part of bankruptcy, liquidation or similar
            proceeding, in which personal information held by BIOLIFE
            WELLNESSCARE PVT LTD about the users of our Services are among the
            assets transferred.
          </p>

          <p className="text-lg mb-4">
            To third-parties to market their products or services to you if you
            have consented to receive the promotional updates. We contractually
            require these third-parties to keep personal information
            confidential and use it only for the purposes for which we disclose
            it to them.
          </p>

          <p className="text-lg mb-4">
            To fulfill the purpose for which you provide it.
          </p>

          <p className="text-lg mb-6">
            For any other purpose disclosed by us when you provide the
            information.
          </p>

          <p className="text-lg mb-4">
            <strong>Service Providers.</strong> We may share your information
            with outside vendors that we use for a variety of purposes, such as
            to send you communications via emails, messages or tele-call to
            inform you about our products that may be of interest to you, push
            notifications to your mobile device on our behalf, provide voice
            recognition services to process your spoken queries and questions,
            help us analyze use of our Services, and process and collect
            payments. Some of our products, services and databases are hosted by
            third party hosting services providers. We also may use vendors for
            other projects, such as conducting surveys or organizing sweepstakes
            for us. We may share information about you with these vendors only
            to enable them to perform their services.
          </p>

          <p className="text-lg mb-4">
            <strong>Legal Purposes.</strong> We may share your information when
            we believe in good faith that such sharing is reasonably necessary
            in order to investigate, prevent, or take action regarding possible
            illegal activities or to comply with legal process. We may also
            share your information to investigate and address threats or
            potential threats to the physical safety of any person, to
            investigate and address violations of this Privacy Policy or the
            Terms of Service, or to investigate and address violations of the
            rights of third parties and/or to protect the rights, property and
            safety of BIOLIFE WELLNESSCARE Private Limited, our employees,
            users, or the public. This may involve the sharing of your
            information with law enforcement, government agencies, courts,
            and/or other organizations on account of legal request such as
            subpoena, court order or government demand to comply with the law.
          </p>

          <p className="text-lg mb-4">
            <strong>Social Networks.</strong> If you interact with social media
            features on our Services, such as the Facebook Like button, or use
            your social media credentials to log-in or post content, these
            features may collect information about your use of the Services, as
            well as post information about your activities on the social media
            service. Your interactions with social media companies are governed
            by their privacy policies. To enforce or apply our Terms of Use and
            other agreements, including for billing and collection purposes. If
            we believe disclosure is necessary or appropriate to protect the
            rights, property, or safety of Biolife wellnesscare Private Limited,
            our customers or others. This includes exchanging information with
            other companies and organizations for the purposes of fraud
            protection and credit risk reduction.
          </p>

          <p className="text-lg mb-8">
            <strong>Consent.</strong> We may share your information in any other
            circumstances where we have your consent.
          </p>
        </section>

        {/* Information Shared with Pathology laboratory */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Information Shared with Pathology laboratory
          </h2>

          <p className="text-lg mb-4">
            When you use our Services, your information is provided to us and to
            the pathology laboratory with whom you choose to Test. In order to
            facilitate your test, we provide your information to that pathology
            laboratory in a similar manner as if you had made appointment for
            test directly with the pathology laboratory.
          </p>

          <p className="text-lg mb-4">
            If you provide a mobile phone number, pathology laboratory or
            Biolife wellnesscare Private Limited may send you text messages
            regarding your test status.
          </p>

          <p className="text-lg mb-4">
            Some pathology laboratory also requires you to provide credit or
            debit card or UPI ID account information to secure your appointment
            for test.
          </p>

          <p className="text-lg mb-6">
            When you make a pathology laboratory booking or online test
            reservation through our Services and/or make a payment to a
            pathology laboratory through our Services, we may also share with
            the pathology laboratory additional information, such as information
            about your test and history or information that we collect from
            third-parties.
          </p>

          <p className="text-lg mb-4">
            Information you choose to share with a pathology laboratory when you
            make a booking and/or pay a pathology laboratory through our
            Services may be used by the pathology laboratory for its own
            purposes. We do not control the privacy practices of pathology
            laboratory. Please contact the pathology laboratory directly if you
            want to learn about its privacy practices.
          </p>
        </section>

        {/* Payment Card Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">
            Payment Card Information
          </h2>

          <p className="text-lg mb-4">
            To use certain of our Services, such as to make Booking at certain
            pathology laboratory and to make payments to certain pathology
            laboratory, we may require credit or debit card or UPI id account
            information. By submitting your credit or debit card or UPI id
            account information through our Services, you expressly consent to
            the sharing of your information with pathology laboratory,
            third-party payment processors, and other third-party service
            providers (including but not limited to vendors who provide fraud
            detection services to us and other third parties), and you further
            agree to the following terms:
          </p>

          <p className="text-lg mb-4">
            When you use a credit or debit card or UPI id to secure a
            reservation through our Sites, we provide your credit or debit card
            or UPI id account information (including card number and expiration
            date) to our third-party payment service providers and the
            applicable pathology laboratory.
          </p>

          <p className="text-lg mb-4">
            When you initially provide your credit or debit card or UPI id
            account information through our Services in order to use our
            pathology laboratory payment services, we provide your credit or
            debit card or UPI id account information to our third-party payment
            service providers. As explained in our Terms of Use, these third
            parties may store your credit or debit card or UPI id account
            information so you can use our pathology laboratory payment services
            through our Services in the future.
          </p>

          <p className="text-lg mb-6">
            For information about the security of your credit or debit card or
            UPI id account information, see the <strong>Security</strong>{" "}
            section below.
          </p>
        </section>

        {/* Analytics and tailored advertising */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">
            Analytics and tailored advertising
          </h2>

          <p className="text-lg mb-6">
            To help us better understand your use of the Services, we may use
            third-party web analytics on our Services, such as Google Analytics.
            These service providers use the sort of technology described in the{" "}
            <strong>Automatically-Collected Information</strong> Section above.
            The information collected by this technology will be disclosed to or
            collected directly by these service providers, who use the
            information to evaluate our users' use of the Services. We also use
            Google Analytics as described in the following section. To prevent
            Google Analytics from collecting or using your information, you may
            install the Google Analytics Opt-Out Browser add-on.
          </p>
        </section>

        {/* Covid 19 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Covid 19</h2>

          <p className="text-lg mb-4">
            This app is aggregator platform for Lab test booking. You can book
            Covid 19 or Any other test from this platform. We do not share
            reports with anyone publicly.
          </p>

          <p className="text-lg mb-6">
            Dr pathcares is not supporting any functionality for contact tracing
            for Covid-19.
          </p>
        </section>

        {/* Permissions Required to Use App */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">
            Permissions Required to Use App
          </h2>

          <p className="text-lg mb-4">
            Dr pathcares app collects following information for the
            functionality of the app:
          </p>

          <p className="text-lg mb-4">
            <strong>Location Data:</strong> Dr pathcares collects location data
            to enable location wise sorting of labs. This permission is optional
            and will be asked only when you use that feature.
          </p>

          <p className="text-lg">
            <strong>Files Data:</strong> Dr pathcares collects storage data
            (files) to allow you to upload your prescription and is also used to
            upload your profile photo. This permission is optional and will be
            asked only when you use that feature.
          </p>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
