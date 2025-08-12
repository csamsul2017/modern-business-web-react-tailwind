import React from "react";
import heroImage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col justify-between px-4 pt-44 pb-16 sm:px-6 md:flex-row lg:px-8">
      {/* left col */}
      <div className="w-full space-y-8 md:w-1/2">
        <div className="group flex w-fit cursor-pointer items-center gap-2 rounded-full bg-gray-50 px-4 py-2 transition-colors hover:bg-gray-100">
          <span className="text-blue-600 transition-transform group-hover:scale-110">
            ★
          </span>
          <span className="text-sm font-medium">Jump start your growth</span>
        </div>

        <h1 className="text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
          We boost the growth for{" "}
          <span className="relative inline-block text-blue-600">
            Startup to Fortune 500
            <span className="buttom-0 absolute left-0 h-0.5 w-full bg-blue-200/60"></span>
          </span>{" "}
          Companies
          <span className="ml-2 inline-block animate-pulse">⏰</span>
        </h1>

        <p className="text-grey-600 max-w-xl text-lg md:text-xl">
          Get the most accurate leads, sales people traning and conversions,
          tools and more - all within the same on billing.
        </p>

        <div className="flex max-w-md gap-3">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 rounded-xl border border-gray-200 px-6 py-4 text-gray-600 transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none"
          />

          <button className="cursor-pointer rounded-xl bg-blue-600 px-8 py-4 text-white hover:bg-blue-700">
            →
          </button>
        </div>
      </div>

      {/* right col */}
      <div className="mt-16 w-full pl-0 md:mt-0 md:w-1/2 md:pl-12">
        <div className="relative">
          <img
            src={heroImage}
            alt="hero image"
            className="relative z-10 rounded-lg transition-transform duration-300 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
