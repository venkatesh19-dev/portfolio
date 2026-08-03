import React from "react";
import {
  HiArrowDown,
  HiArrowUpRight,
} from "react-icons/hi2";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-accent flex items-center justify-center pt-32"
    >
      {/* Grid */}

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255, 0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255, 0.8) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Glow */}

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[220px]" />

      {/* Small Glow */}

      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-20 w-[90%] mx-auto flex flex-col items-center text-center">


        {/* Heading */}

        <h1
          className="
            mt-4
            text-primary
            font-black
            leading-[0.95]
            tracking-tight
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            xl:text-[110px]
            max-w-6xl
          "
        >
          Building Premium
          <br />
          Websites That
          <br />
          Grow Businesses.
        </h1>

        {/* Paragraph */}

        <p className="mt-8 text-primary/70 text-lg md:text-xl leading-9 max-w-3xl">
          I design and develop premium business websites,
          Shopify stores, Wix websites and custom web
          applications that combine performance,
          beautiful design and user experience.
        </p>

        {/* Buttons */}

        <div className="flex flex-wrap justify-center gap-5 mt-10">

          <a
            href="#contact"
            className="
              inline-flex
              items-center
              gap-3
              bg-primary
              text-accent
              px-8
              py-4
              rounded-full
              font-semibold
              hover:bg-accent hover:text-black border
              border-primary/20
              duration-300
            "
          >
            Let's Talk

            <HiArrowUpRight size={20} />

          </a>

          <a
            href="#projects"
            className="
              inline-flex
              items-center
              px-8
              py-4
              rounded-full
              border
              border-primary/20
              text-primary
              hover:bg-primary
              hover:text-accent
              duration-300
            "
          >
            View Projects
          </a>

        </div>

        {/* Avatar */}

        <img
          src="/hero_avatar.png"
          alt="Hero Avatar"
          className="
            lg:mt-10
            w-[250px]
            sm:w-[320px]
            md:w-[420px]
            lg:w-[520px]
            drop-shadow-[0_40px_80px_rgba(0,0,0,.25)]
          "
        />

      </div>

      {/* Watermark */}

      <h2
        className="
          absolute
          bottom-16
          left-1/2
          -translate-x-1/2
          whitespace-nowrap
          font-black
          uppercase
          pointer-events-none
          text-primary/[0.06]
          tracking-[-10px]
          text-[100px]
          md:text-[180px]
          lg:text-[260px]
          xl:text-[320px]
        "
      >
        VENKATESH
      </h2>
    </section>
  );
};

export default Hero;