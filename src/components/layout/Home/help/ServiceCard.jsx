const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-[32px]
      border
      border-white/10
      bg-secondary
      p-8
      hover:border-accent/40
      duration-500
    "
    >
      {/* Glow */}

      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/5 blur-[100px] opacity-0 group-hover:opacity-100 duration-500" />

      {/* Icon */}

      <div className="relative z-10">

        <div className="w-16 h-16 rounded-2xl bg-accent text-primary flex items-center justify-center text-3xl">
          <Icon />
        </div>

        <h3 className="text-white text-3xl font-bold mt-8">
          {service.title}
        </h3>

        <p className="text-accent mt-2 font-medium">
          {service.subtitle}
        </p>

        <p className="text-gray-300 leading-8 mt-8">
          {service.description}
        </p>

        {/* Best For */}

        <div className="mt-10">

          <p className="text-white font-semibold mb-4">
            Best For
          </p>

          <div className="flex flex-wrap gap-3">
            {service.ideal.map((item) => (
              <span
                key={item}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-accent
                  border
                  border-white/10
                  text-sm
                  text-gray
                "
              >
                {item}
              </span>
            ))}
          </div>

        </div>

        {/* CTA */}

        <a
          href="#contact"
          className="
            inline-flex
            items-center
            gap-2
            text-accent
            font-semibold
            mt-10
            group/link
          "
        >
          Start Your Project

          <span className="transition-transform duration-300 group-hover/link:translate-x-1">
            →
          </span>

        </a>

      </div>
    </div>
  );
};

export default ServiceCard;