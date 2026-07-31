import React from "react";
import FeatureCard from "./FeatureCard";

import {
  SiReact,
  SiShopify,
  SiWix,
} from "react-icons/si";

import {
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";

const features = [
  {
    number: "01",
    icon: SiReact,
    title: "DEVELOP",
    subtitle: "Full Stack Web Development",
    description:
      "Building scalable web applications using React, Java and Spring Boot with clean architecture, responsive layouts and modern UI.",
  },

  {
    number: "02",
    icon: SiShopify,
    title: "SHOPIFY",
    subtitle: "Custom Ecommerce Stores",
    description:
      "Creating premium Shopify stores with custom themes, responsive layouts, product management and conversion-focused design.",
  },

  {
    number: "03",
    icon: SiWix,
    title: "WIX",
    subtitle: "Business Websites",
    description:
      "Professional Wix websites with SEO optimization, CMS integration and responsive design for growing businesses.",
  },

  {
    number: "04",
    icon: HiOutlineMagnifyingGlass,
    title: "SEO",
    subtitle: "Performance Optimization",
    description:
      "Improve page speed, Core Web Vitals, technical SEO and Google search rankings to help your business grow online.",
  },
];

const WhyWorkWithMe = () => {
  return (
    <section
      id="services"
      className="bg-primary py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <p className="uppercase tracking-[8px] text-gray text-sm mb-4">
          Why Work With Me
        </p>

        <h2 className="text-white text-5xl md:text-7xl font-black leading-tight mb-24">
          What I Can
          <br />
          Build For You.
        </h2>

        {/* Cards */}

        <div className="relative pb-[65vh]">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.number}
              index={index}
              {...feature}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyWorkWithMe;