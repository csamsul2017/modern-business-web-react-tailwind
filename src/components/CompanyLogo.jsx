import React from "react";
import { slack, amazon, woocommerce, meundies, sitepoint } from "../assets";

const CompanyLogo = () => {
  const logos = [slack, amazon, woocommerce, meundies, sitepoint];

  return (
    <div className="container mx-auto flex w-full flex-col items-start gap-8 py-20 sm:flex-row sm:items-center lg:px-8">
      <div className="z-10 w-[300px] shrink-0 border-l-4 border-blue-500 bg-white px-5 py-2 text-left text-xl font-semibold text-gray-600 sm:text-base">
        Proud partner at <br /> Hotspot & Segment
      </div>

      <div className="animate-marquee flex whitespace-nowrap">
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="company logo"
            className="mx-12 h-8 w-36 object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
          />
        ))}

        {/* Duplicate logos */}
        {logos.map((logo, i) => (
          <img
            key={`duplicate-${i}`}
            src={logo}
            alt="company logo"
            className="mx-12 h-8 w-36 object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogo;
