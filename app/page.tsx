import React from "react";
import HeroPage from "./components/hero/page";
import StatsSection from "./components/landing/StatsSection";
import ServicesSection from "./components/landing/Architecture";
import FeaturesSection from "./components/landing/FeaturesSection";
import TestimonialSlider from "./components/landing/TestimonialSlider";
import BrandSlider from "./components/landing/BrandSlider";
import PortfolioGrid from "./components/landing/PortfolioGrid";
import DesignServices from "./components/landing/DesignServices";
import AboutSection from "./components/landing/AboutSection";

const page = () => {
  return (
    <div className="">
      <HeroPage />
      <StatsSection />
      <FeaturesSection />
      <AboutSection />
      <PortfolioGrid />
      <ServicesSection />
      <DesignServices />
      <TestimonialSlider />
      <BrandSlider />
    </div>
  );
};

export default page;
