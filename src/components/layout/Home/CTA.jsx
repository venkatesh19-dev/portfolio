import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";

const CTA = () => {
  return (
    <section className="bg-accent py-4 px-4">
      <div className="max-w-8xl mx-auto">
        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border border-white/10
            bg-secondary
            p-8
            md:p-16
          "
        >
          {/* Background Grid */}

          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />

          {/* Glow */}

          <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[140px]" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}

            <div className="text-center lg:text-left">
              <span className="uppercase tracking-[6px] text-sm text-gray-400">
                Ready To Start?
              </span>

              <h2 className="mt-6 text-white text-5xl md:text-7xl font-black leading-tight">
                Let's Build
                <br />
                Your Next
                <br />
                Website.
              </h2>

              <p className="mt-8 text-gray-300 text-lg leading-8 max-w-xl mx-auto lg:mx-0">
                Whether you need a premium business website, Shopify store,
                Wix website or a custom web application, I'll help transform
                your ideas into a modern digital experience that converts
                visitors into customers.
              </p>

              <a
                href="#contact"
                className="
                  mt-10
                  inline-flex
                  items-center
                  gap-3
                  bg-accent
                  text-primary
                  px-8
                  py-4
                  rounded-full
                  font-semibold
                  hover:scale-105
                  duration-300
                "
              >
                Let's Talk
                <HiArrowUpRight size={22} />
              </a>
            </div>

            {/* RIGHT */}

            <div className="relative flex justify-center">

              {/* ================= MOBILE ================= */}

              <div className="relative lg:hidden w-full max-w-[360px] mx-auto h-[320px]">

                {/* Desktop */}

                <div
                  className="
                    absolute
                    left-0
                    top-0
                    w-[280px]
                    rounded-2xl
                    overflow-hidden
                    border border-white/10
                    shadow-[0_25px_60px_rgba(0,0,0,.45)]
                  "
                >
                  <img
                    src="/CTA_Desktop.webp"
                    alt=""
                    className="w-full block"
                  />
                </div>

                {/* Mobile */}

                <div
                  className="
                    absolute
                    right-0
                    bottom-0
                    w-[120px]
                    rounded-2xl
                    overflow-hidden
                    border border-white/10
                    shadow-[0_20px_40px_rgba(0,0,0,.5)]
                  "
                >
                  <img
                    src="/CTA_Mobile.webp"
                    alt=""
                    className="w-full block"
                  />
                </div>
              </div>

              {/* ================= DESKTOP ================= */}

              <div className="hidden lg:block relative w-full h-[520px]">

                {/* Desktop */}

                <div
                  className="
                    absolute
                    left-0
                    top-1/2
                    -translate-y-1/2
                    w-[540px]
                    rounded-3xl
                    overflow-hidden
                    border border-white/10
                    shadow-[0_40px_80px_rgba(0,0,0,.45)]
                    hover:-translate-y-[52%]
                    duration-500
                  "
                >
                  <img
                    src="/CTA_Desktop.webp"
                    alt=""
                    className="w-full"
                  />
                </div>

                {/* Mobile */}

                <div
                  className="
                    absolute
                    right-0
                    bottom-2
                    w-[185px]
                    rounded-3xl
                    overflow-hidden
                    border border-white/10
                    shadow-[0_30px_60px_rgba(0,0,0,.5)]
                    hover:-translate-y-2
                    hover:rotate-2
                    duration-500
                  "
                >
                  <img
                    src="/CTA_Mobile.webp"
                    alt=""
                    className="w-full"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;