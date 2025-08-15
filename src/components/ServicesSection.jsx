import React from "react";
import { BiTime } from "react-icons/bi";
import { BsStack } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { HiLightBulb } from "react-icons/hi";

const services = [
  {
    icon: <BsStack className="h-8 w-8 text-indigo-600" />,
    title: "Web Design",
    description: "One for all and all for one, Muskehounds are always ready.",
    link: "#learn-more",
  },
  {
    icon: <HiLightBulb className="h-8 w-8 text-amber-400" />,
    title: "Ad-Creatives",
    description: "Alphabet Village and the subline of her own road.",
    link: "#learn-more",
  },
  {
    icon: <FiSettings className="h-8 w-8 text-red-400" />,
    title: "Automation",
    description: "Little Blind Text should turn around and return.",
    link: "#learn-more",
  },
  {
    icon: <BiTime className="h-8 w-8 text-cyan-400" />,
    title: "Infographics",
    description: "Nothing the copy said could convince her.",
    link: "#learn-more",
  },
];

const ServicesSection = () => {
  return (
    <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-12 md:flex-row lg:gap-24">
        {/* Header */}
        <div className="w-full md:w-1/3">
          <h2 className="mb-6 text-3xl font-bold md:w-4/5 md:text-4xl">
            Future of support with new shape
          </h2>
          <p className="mb-4 text-lg text-gray-600 md:w-4/5">
            Discuss your goals, determine success metrics, identity problem
          </p>
          <div className="space-y3">
            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100">
                <div className="h-2.5 w-2.5 rounded-full bg-indigo-600"></div>
              </div>
              <span className="text-gray-600">UX design content strategy</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100">
                <div className="h-2.5 w-2.5 rounded-full bg-indigo-600"></div>
              </div>
              <span className="text-gray-600">Development bring</span>
            </div>
          </div>

          <button className="mt-8 cursor-pointer rounded-full bg-indigo-600 px-8 py-3 text-white transition-colors hover:bg-indigo-700">
            Get Started
          </button>
        </div>

        {/* Services card */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, i) => (
            <div
              key={i}
              className="max-w-72 cursor-pointer rounded-2xl bg-white p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="mb4">{service.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
              <p className="mb-4 text-gray-600">{service.description}</p>
              <a
                href={service.link}
                className="font-medium text-indigo-600 transition-colors hover:text-indigo-700"
              >
                LEARN MORE
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
