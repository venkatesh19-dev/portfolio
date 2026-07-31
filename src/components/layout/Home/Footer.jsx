import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-white/10">

      <div className="w-[90%] mx-auto py-16">

        {/* Top */}

        <div className="grid lg:grid-cols-2 gap-20">

          {/* Left */}

          <div>

            <h2 className="text-white text-5xl font-black">
              Venkatesh
              <br />
              Swamy.
            </h2>

            <p className="text-gray-400 text-lg leading-8 mt-8 max-w-lg">
              Building modern digital experiences that help
              businesses grow through thoughtful design,
              scalable development and clean user experiences.
            </p>

          </div>

          {/* Right */}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">

            {/* Navigation */}

            <div>

              <h3 className="text-white font-semibold mb-6">
                Navigation
              </h3>

              <ul className="space-y-4 text-gray-400">

                <li>
                  <a href="#home" className="hover:text-accent transition">
                    Home
                  </a>
                </li>

                <li>
                  <a href="#about" className="hover:text-accent transition">
                    About
                  </a>
                </li>

                <li>
                  <a href="#projects" className="hover:text-accent transition">
                    Projects
                  </a>
                </li>

                <li>
                  <a href="#contact" className="hover:text-accent transition">
                    Contact
                  </a>
                </li>

              </ul>

            </div>

            {/* Services */}

            <div>

              <h3 className="text-white font-semibold mb-6">
                Services
              </h3>

              <ul className="space-y-4 text-gray-400">

                <li>Web Development</li>
                <li>Shopify</li>
                <li>Wix</li>
                <li>SEO</li>

              </ul>

            </div>

            {/* Contact */}

            <div>

              <h3 className="text-white font-semibold mb-6">
                Contact
              </h3>

              <ul className="space-y-4 text-gray-400">

                <li>venkateshs1918@email.com</li>
                <li>+91 84338 43099</li>
                <li>Mumbai, India</li>

              </ul>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="h-px bg-white/50 my-6" />

        {/* Bottom */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Venkatesh Swamy.
            All rights reserved.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 text-white hover:text-accent transition"
          >
            Back to Top

            <HiArrowUpRight
              className="rotate-[-45deg]"
              size={18}
            />

          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;