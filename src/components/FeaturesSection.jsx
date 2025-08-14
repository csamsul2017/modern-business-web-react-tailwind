import React from "react";

const features = [
  {
    icon: "🔍",
    title: "Find out what you need",
    description: "We present you a proposal and discuss nitty-gritty like",
  },
  {
    icon: "⚙️",
    title: "Work out the details",
    description: "Communication protocols apart from engagement models",
  },
  {
    icon: "🚀",
    title: "We get to work fast",
    description: "Protocols apart from engage models, pricing billing",
  },
];

const FeaturesSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      {/* Heading texts */}
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold">
          How can we help your business
        </h2>
        <p className="text-gray-600">
          When you resell bisnik, you build trust and increases
        </p>
      </div>

      {/* Features boxes */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {features.map((feature, i) => (
          <div key={i} className="flex flex-col items-center p-6 text-center">
            <div
              className="mb-6 flex h-24 w-24 items-center justify-center rounded-full"
              style={{
                backgroundColor:
                  i === 0 ? "#F1EFFD" : i ? "#FEE7E7" : "#FFF3E4",
              }}
            >
              <div className="text-3xl">{feature.icon}</div>
            </div>
            <h3 className="mb-3 text-2xl font-medium">{feature.title}</h3>
            <p className="text-center text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-12 text-center">
        <button className="relative cursor-pointer rounded-full bg-blue-600 px-4 py-3 font-medium text-white transition-colors hover:bg-blue-700">
          Become a Partner
          <div className="absolute top-0 left-0 -z-10 h-full w-full rounded-full bg-blue-600/50 blur-xl"></div>
        </button>
      </div>
    </section>
  );
};

export default FeaturesSection;
