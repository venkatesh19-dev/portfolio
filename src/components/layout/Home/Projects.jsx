import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    category: "Travel Website",
    title: "Ace Travels",
    description:
      "A premium travel agency website designed and developed using React and Tailwind CSS with responsive layouts, SEO optimization, inquiry forms and a modern user experience.",

    technologies: [
      "React",
      "Tailwind",
      "Netlify"
    ],

    image: "/projects/AceTravels_Project.webp",

    live: "https://acetravels.in",
  },

  {
    category: "Business Website",
    title: "Paramount Import Export",
    description:
      "Developed a responsive Wix website for an industrial manufacturer with CMS integration, SEO optimization, product pages and improved online presence.",

    technologies: [
      "Wix",
      "SEO",
      "CMS"
    ],

    image: "/projects/PIEC_Project.webp",

    live: "https://www.earthpits.com/",
  },

  {
    category: "Shopify Store",
    title: "Tangyzone",
    description:
      "Designed and developed an ecommerce website on Shopify with premium UI, optimized collections, responsive layouts and conversion-focused shopping experience.",

    technologies: [
      "Shopify",
      "Liquid",
      "Responsive"
    ],

    image: "/projects/Tangyzone_Project.webp",

    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-primary py-16">

      <div className="max-w-[95%] mx-auto px-6">

        <p className="uppercase tracking-[8px] text-gray-400 text-sm">
          Selected Work
        </p>

        <h2 className="text-white text-5xl md:text-7xl font-black mt-5 mb-20">
          Featured Projects
        </h2>

        <div className="space-y-12">

          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;