import React from "react";
import Head from "next/head";

interface TitleDescriptionProps {
  title: string;
  description: string;
}

const TitleDescription: React.FC<TitleDescriptionProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default TitleDescription;
