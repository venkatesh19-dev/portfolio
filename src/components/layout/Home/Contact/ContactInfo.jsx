import React from "react";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
} from "react-icons/hi2";

const ContactInfo = () => {
  return (
    <div>

      <p className="uppercase tracking-[6px] text-gray text-sm">
        Contact
      </p>

      <h2 className="text-black text-5xl md:text-7xl font-black mt-5 leading-tight">
        Get In
        <br />
        Touch.
      </h2>

      <p className="mt-8 text-gray text-xl leading-9 max-w-2xl">
        Have a project in mind? Fill out the form or reach me directly.
        I usually reply within 24 hours.
      </p>

      <div className="w-28 h-[2px] bg-accent" />

      <p className="text-gray text-lg leading-8 mt-6 max-w-2xl">
        Whether it's a premium business website, Shopify store,
        Wix website or a custom web application,
        I'd love to hear about your project.
      </p>

      <div className="space-y-5 mt-10">

        {/* Email */}

        <div className="flex items-center gap-5 bg-secondary rounded-2xl p-6 border border-white/10 hover:border-accent duration-300">

          <div className="w-14 h-14 rounded-xl bg-accent text-primary flex items-center justify-center text-2xl">
            <HiOutlineEnvelope />
          </div>

          <div>
            <p className="text-gray-400 text-sm uppercase tracking-wider">
              Email
            </p>

            <a
              href="mailto:venkateshs1918@gmail.com"
              className="text-white text-lg font-medium hover:text-accent"
            >
              venkateshs1918@gmail.com
            </a>
          </div>

        </div>

        {/* Phone */}

        <div className="flex items-center gap-5 bg-secondary rounded-2xl p-6 border border-white/10 hover:border-accent duration-300">

          <div className="w-14 h-14 rounded-xl bg-accent text-primary flex items-center justify-center text-2xl">
            <HiOutlinePhone />
          </div>

          <div>
            <p className="text-gray-400 text-sm uppercase tracking-wider">
              Phone
            </p>

            <a
              href="tel:+918433843099"
              className="text-white text-lg font-medium hover:text-accent"
            >
              +91 84338 43099
            </a>
          </div>

        </div>

        {/* Location */}

        <div className="flex items-center gap-5 bg-secondary rounded-2xl p-6 border border-white/10 hover:border-accent duration-300">

          <div className="w-14 h-14 rounded-xl bg-accent text-primary flex items-center justify-center text-2xl">
            <HiOutlineMapPin />
          </div>

          <div>
            <p className="text-gray-400 text-sm uppercase tracking-wider">
              Location
            </p>

            <p className="text-white text-lg font-medium">
              Mumbai, India
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ContactInfo;