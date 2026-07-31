import React from "react";
import { FaReact, FaJava, FaShopify } from "react-icons/fa";
import { SiSpringboot, SiWix } from "react-icons/si";

const TechStack = () => {
  return (
    <section className="bg-accent py-8 hidden md:block">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-wrap items-center justify-between gap-5 text-primary">

          <div className="flex items-center gap-2 hover:opacity-100 opacity-80 transition">
            <FaReact className="text-4xl" />
            <span className="font-semibold text-3xl">React</span>
          </div>

          <span className="text-primary/40 text-xl">|</span>

          <div className="flex items-center gap-2 hover:opacity-100 opacity-80 transition">
            <FaJava className="text-4xl" />
            <span className="font-semibold text-3xl">Java</span>
          </div>

          <span className="text-primary/40 text-xl">|</span>

          <div className="flex items-center gap-2 hover:opacity-100 opacity-80 transition">
            <SiSpringboot className="text-4xl" />
            <span className="font-semibold text-3xl">Spring Boot</span>
          </div>

          <span className="text-primary/40 text-xl">|</span>

          <div className="flex items-center gap-2 hover:opacity-100 opacity-80 transition">
            <FaShopify className="text-4xl" />
            <span className="font-semibold text-3xl">Shopify</span>
          </div>

          <span className="text-primary/40 text-xl">|</span>

          <div className="flex items-center gap-2 hover:opacity-100 opacity-80 transition">
            <SiWix className="text-4xl" />
            <span className="font-semibold text-3xl">Wix</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TechStack;