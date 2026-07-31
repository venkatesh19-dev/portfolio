import React from "react";

const ProcessCard = ({
  step,
  icon: Icon,
  title,
  subtitle,
  description,
  index,
}) => {
  return (
    <div
      className="sticky h-[45vh] rounded-[40px] border border-white/10 bg-gradient-to-b from-secondary to-[#14181F] overflow-hidden"
      style={{
        top: `${100 + index * 40}px`,
        zIndex: index + 1,
      }}
    >
      {/* Background Icon */}

      <Icon
        className="
          absolute
          right-10
          top-8
          w-48
          h-48
          text-white/5
        "
      />

      <div className="relative z-10 h-full p-10 md:p-14 flex flex-col justify-between">

        {/* Top */}

        <div>

          <div className="flex items-center gap-5">

            <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center">

              <Icon className="w-7 h-7 text-primary" />

            </div>

            <div>

              <p className="text-accent tracking-[4px] text-sm">
                STEP {step}
              </p>

              <h2 className="text-5xl md:text-6xl font-black text-white mt-2">
                {title}
              </h2>

            </div>

          </div>

          <p className="text-2xl text-gray-200 mt-8">
            {subtitle}
          </p>

        </div>

        {/* Bottom */}

        <div className="max-w-2xl">

          <p className="text-gray-400 text-lg leading-8">
            {description}
          </p>

        </div>

      </div>
    </div>
  );
};

export default ProcessCard;