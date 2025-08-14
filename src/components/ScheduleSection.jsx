import React from "react";
import { scheduleImage } from "../assets";
import { IoIosArrowRoundForward } from "react-icons/io";

const ScheduleSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="flex flex-col items-center justify-between gap-12 md:flex-row md:gap-24">
        {/* left */}
        <div className="w-full md:w-1/2">
          <img
            src={scheduleImage}
            alt="schedule image"
            className="h-auto w-full"
          />
        </div>

        {/* right */}
        <div className="w-full md:w-1/2">
          <p className="font-semibold text-orange-500">SCHEDULE</p>
          <h2 className="mt-4 mb-6 text-3xl font-bold text-neutral-900 md:text-4xl">
            Streamline Your Business <br /> With Smart Scheduling Solutions
          </h2>

          <p className="mb-8 text-gray-600">
            Take control of your time and boost productivity with our
            intelligent scheduling system. Automate appointments, manage team
            availability, and deliver exceptional customer experiences through
            seamless calendar management.
          </p>

          <a
            href="#"
            className="flex items-center gap-2 font-semibold text-blue-500 transition-all hover:gap-4"
          >
            Explore scheduling features{" "}
            <IoIosArrowRoundForward className="size-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
