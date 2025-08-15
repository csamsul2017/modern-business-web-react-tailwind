import React, { useState } from "react";

const PricingSection = () => {
  const [productCount, setProductCount] = useState(1);

  // Calculate product price base on product count
  const starterPrice = Math.round(4000 * (productCount / 50));
  const businessPrice = Math.round(7500 * (productCount / 50));

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">
          Pricing
        </h2>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          {/* starter plan */}
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h3 className="mb-4 text-xl text-gray-600">Starter</h3>
            <p className="mb-6 text-3xl font-bold">${starterPrice}/mo</p>
          </div>
          {/* business plan */}
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h3 className="mb-4 text-xl text-gray-600">Business</h3>
            <p className="mb-6 text-3xl font-bold">${businessPrice}/mo</p>
          </div>
        </div>

        <div className="mx-auto max-w-xl">
          <p className="mb-4 text-center text-gray-600">
            {productCount} products
          </p>

          <div className="relative px-4">
            <div className="flex items-center gap-2">
              <span>1</span>
              <input
                type="range"
                className="h-2 flex-1 cursor-pointer appearance-none rounded-lg bg-gray-200"
                min="1"
                max="50"
                value={productCount}
                onChange={(e) => setProductCount(parseInt(e.target.value))}
              />
              <span className="text-xs text-gray-600 sm:text-sm">50</span>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="mb-4 text-xl text-gray-600">Ready to get started</p>
            <button className="cursor-pointer rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
