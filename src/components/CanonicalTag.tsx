"use client";
import { usePathname } from "next/navigation";
import Head from "next/head";

const CanonicalTag = () => {
  const pathname = usePathname();
  const baseUrl = "https://drpathcares.com";
  const canonicalURL = `${baseUrl}${pathname === "/" ? "" : pathname}`;

  return (
    <Head>
      <link rel="canonical" href={canonicalURL} />
    </Head>
  );
};

export default CanonicalTag;
