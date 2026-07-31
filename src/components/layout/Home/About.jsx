import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-primary text-white py-16 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-40 right-20 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Label */}
        <p className="uppercase tracking-[10px] text-gray text-sm mb-8">
          About
        </p>

        {/* Main Heading */}
        <h2 className="max-w-5xl text-5xl md:text-7xl lg:text-[5.8rem] font-black leading-[1.05] tracking-tight">

          I DON'T JUST WRITE
          <br />

          <span className="text-accent">
            CODE.
          </span>

          <br />

          I CREATE DIGITAL
          <br />

          EXPERIENCES.

        </h2>

        {/* Divider */}
        <div className="w-full h-px bg-white/50 my-12"></div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side */}

          <div>

            <p className="text-gray leading-9 text-lg">

              I'm <span className="text-white font-semibold">Venkatesh Swamy</span>,
              a Full Stack Java Developer passionate about creating
              modern web applications and premium business websites.

              <br /><br />

              My work focuses on building responsive,
              scalable and high-performance digital experiences
              using React, Java, Spring Boot, Shopify and Wix.

              <br /><br />

              I enjoy turning ideas into products that
              are fast, clean and designed with users in mind.

            </p>


          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div
              className="
              relative
              w-[340px]
              h-[340px]
              rounded-full
              bg-gradient-to-br
              from-accent/40
              via-white/10
              to-transparent
              border
              border-white/10
              backdrop-blur-xl
              shadow-[0_0_100px_rgba(255,255,255,0.08)]
            "
            >

              {/* Inner Circle */}

              <div
                className="
                absolute
                inset-8
                rounded-full
                border
                border-white/10
                flex
                items-center
                justify-center
              "
              >

                <div className="text-center">

                  <h3 className="text-7xl font-black text-accent">
                    10+
                  </h3>

                  <p className="text-gray mt-3">
                    Projects
                    <br />
                    Completed
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;