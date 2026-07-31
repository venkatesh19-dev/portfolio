import React from "react";

const FeatureCard = ({
  number,
  icon: Icon,
  title,
  subtitle,
  description,
  index,
}) => {
  return (
    <div
      className="sticky h-[50vh] rounded-[40px] bg-secondary border border-white/10 p-8 md:p-10 overflow-hidden"
      style={{
        top: `${100 + index * 40}px`,
        zIndex: index + 1,
      }}
    >
      {/* Watermark Icon */}

      <Icon
        className="
          absolute
          right-8
          top-8
          w-40
          h-40
          md:w-52
          md:h-52
          text-white
          opacity-[0.08]
          pointer-events-none
          select-none
        "
      />

      {/* Content */}

      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <p className="text-accent uppercase tracking-[4px] text-sm">
            {number}
          </p>

          <h2 className="mt-5 text-5xl md:text-7xl font-black text-white">
            {title}
          </h2>

          <p className="mt-2 text-xl md:text-2xl text-white/60">
            {subtitle}
          </p>
        </div>

        <div className="max-w-xl">
          <p className="text-gray leading-8 text-lg">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;