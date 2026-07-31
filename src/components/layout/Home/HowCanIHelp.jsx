
import {
  SiWix,
  SiShopify,
  SiReact,
} from "react-icons/si";

import { HiOutlineRocketLaunch } from "react-icons/hi2";
import ServiceCard from "./help/ServiceCard";

const services = [
  {
    icon: SiWix,
    title: "Business Website",
    subtitle: "Wix Development",
    description:
      "Perfect for local businesses, agencies and service providers that need a professional website they can manage themselves.",

    ideal: [
      "Restaurants",
      "Travel Agencies",
      "Interior Designers",
      "Real Estate",
      "Consultants",
    ],
  },

  {
    icon: SiShopify,
    title: "Online Store",
    subtitle: "Shopify Development",
    description:
      "Launch a modern ecommerce store that's optimized for conversions and ready to scale.",

    ideal: [
      "E-Commerce",
      "Fashion",
      "Food",
      "Beauty",
      "Electronics",
      "Clothing",
      "D2C Brands",
    ],
  },

  {
    icon: SiReact,
    title: "Custom Website",
    subtitle: "React Development",
    description:
      "Fast, responsive websites built from scratch for startups and businesses wanting something unique.",

    ideal: [
      "Startups",
      "Landing Pages",
      "Portfolio",
      "SaaS",
      "Custom UI",
    ],
  },

  {
    icon: HiOutlineRocketLaunch,
    title: "Web Application",
    subtitle: "React + Spring Boot",
    description:
      "Custom dashboards, portals and booking systems tailored specifically to your workflow.",

    ideal: [
      "CRM",
      "Booking System",
      "Admin Panel",
      "Portal",
      "Dashboard",
    ],
  },
];

const HowCanIHelp = () => {
  return (
    <section id="services" className="bg-primary py-16">
      <div className="w-[90%] mx-auto">

        <p className="uppercase tracking-[6px] text-gray-400 text-sm">
          How Can I Help?
        </p>

        <h2 className="text-white text-5xl md:text-7xl font-black mt-5">
          Build the
          <br />
          Right Website.
        </h2>

        <p className="text-gray-400 text-lg leading-8 mt-8 max-w-3xl">
          Every business is different. Whether you need a website,
          ecommerce store or full web application, I'll help you choose
          the right technology based on your goals.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mt-20">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              service={service}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowCanIHelp;