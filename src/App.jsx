import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompanyLogo from "./components/CompanyLogo";
import PurposeSection from "./components/PurposeSection";
import FeaturesSection from "./components/FeaturesSection";
import ScheduleSection from "./components/ScheduleSection";
import PricingSection from "./components/PricingSection";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-indigo-500/28 to-pink-500/20 blur-[80px]"></div>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <CompanyLogo />
        <PurposeSection />
        <FeaturesSection />
        <ScheduleSection />
        <PricingSection />
        <ServicesSection />
      </div>
    </main>
  );
}

export default App;
