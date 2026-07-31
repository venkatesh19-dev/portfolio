import React from "react";

import {
  FaReact,
  FaExternalLinkAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNetlify,
  SiWix,
  SiShopify,
} from "react-icons/si";

const iconMap = {
  React: <FaReact />,
  Tailwind: <SiTailwindcss />,
  Netlify: <SiNetlify />,
  Wix: <SiWix />,
  Shopify: <SiShopify />,
};

const ProjectCard = ({ project }) => {
  return (
    <div className="grid lg:grid-cols-[1fr_1.1fr] overflow-hidden rounded-[38px] bg-white">

      {/* LEFT */}

      <div className="bg-[#F5F5F2] text-black p-10 md:p-14 flex flex-col justify-between">

        <div>

          <span className="inline-block border border-black rounded-full px-5 py-2 text-sm font-medium mb-8">
            {project.category}
          </span>

          <h2 className="text-5xl md:text-7xl font-black leading-none">
            {project.title}
          </h2>

          <p className="text-gray-700 text-lg leading-8 mt-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3 mt-10">

            {project.technologies.map((tech) => (
              <div
                key={tech}
                className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full"
              >
                {iconMap[tech]}
                {tech}
              </div>
            ))}

          </div>

        </div>

        <div className="mt-12">

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-black text-white px-7 py-3 rounded-full hover:scale-105 duration-300"
          >
            Visit Website
            <FaExternalLinkAlt size={14} />
          </a>

        </div>

      </div>

      {/* RIGHT */}

      <div className="bg-secondary rounded-[38px] p-8 md:p-12 flex items-center justify-center relative">

        <div className="absolute w-96 h-96 rounded-full bg-white/5 blur-3xl" />

        <div className="relative w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl hover:scale-97 duration-700 group">

          <div className="bg-[#2A2A2A] h-10 flex items-center gap-2 px-5">

            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />

          </div>
          <a href={project.live} target="_blank" rel="noreferrer">
                      <img
            src={project.image}
            alt={project.title}
            className="w-full "
          />
          </a>


        </div>

      </div>

    </div>
  );
};

export default ProjectCard;