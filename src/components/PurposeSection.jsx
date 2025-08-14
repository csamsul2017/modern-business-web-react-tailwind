import React from "react";

const PurposeSection = () => {
  const features = [
    {
      icon: "🟣", // Replace with your actual icon component or image
      title: "Built for impact",
      description:
        "We identify and nurture a truly diverse team of designers, developers and marketers",
    },
    {
      icon: "🔴", // Replace with your actual icon component or image
      title: "In sync with you",
      description:
        "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless.",
    },
  ];
  return (
    <section
      className="w-full bg-gray-50 px-4 py-16 sm:px-6 md:px-8"
      id="#about"
    >
      <div className="mx-auto max-w-6xl">
        <div className="gap=8 grid grid-cols-1 md:grid-cols-3">
          {/* Heading text */}
          <div className="">
            <p className="mb-2 text-sm font-medium text-purple-600">
              ARCHIHE MORE
            </p>
            <h2 className="md:w4/5 mb-5 w-full text-3xl font-bold text-gray-900 md:text-4xl">
              Purpose of a convoy keep your team
            </h2>
          </div>

          {/* Bullets point */}
          <div className="col-span-2 grid grid-cols-1 justify-between gap-8 md:grid-cols-2">
            {features.map((feature, i) => (
              <div key={i} className="flex space-x-4">
                <div className="flex h-12 w-12 items-center justify-start rounded-lg">
                  {feature.icon}
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
