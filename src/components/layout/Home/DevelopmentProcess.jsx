import React from "react";
import ProcessCard from "./ProcessCard";

import {
  HiOutlineMagnifyingGlass,
  HiOutlinePaintBrush,
  HiCodeBracket,
  HiRocketLaunch,
} from "react-icons/hi2";

const process = [
  {
    step: "01",
    icon: HiOutlineMagnifyingGlass,
    title: "Vision",
    subtitle: "Understanding Your Vision",
    description:
      "Every successful project begins with understanding your business, audience and goals. Together we define the right strategy before any design or development starts.",
  },

  {
    step: "02",
    icon: HiOutlinePaintBrush,
    title: "DESIGN",
    subtitle: "Crafting The Experience",
    description:
      "I create clean, responsive layouts with a focus on usability, aesthetics and conversion. Every interface is designed to provide an intuitive experience.",
  },

  {
    step: "03",
    icon: HiCodeBracket,
    title: "DEVELOP",
    subtitle: "Building Your Product",
    description:
      "Using modern technologies and best practices, I build fast, scalable and maintainable websites with performance and quality at the core.",
  },

  {
    step: "04",
    icon: HiRocketLaunch,
    title: "LAUNCH",
    subtitle: "Ready For Growth",
    description:
      "Before launch every project is tested, optimized for SEO and performance, then deployed with confidence to ensure a smooth experience.",
  },
];

const DevelopmentProcess = () => {
  return (
    <section
      id="process"
      className="bg-primary py-16"
    >
      <div className="max-w-[95%] mx-auto px-6">

        <p className="uppercase tracking-[8px] text-gray-400 text-sm">
          Process
        </p>

        <h2 className="text-white text-5xl md:text-7xl font-black mt-5 mb-24">
          From Idea
          <br />
          To Launch.
        </h2>

        <div className="relative pb-16">

          {process.map((item, index) => (
            <ProcessCard
              key={item.step}
              index={index}
              {...item}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default DevelopmentProcess;