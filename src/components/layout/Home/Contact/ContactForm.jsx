import React, { useState } from "react";
import { HiOutlinePaperAirplane } from "react-icons/hi2";

const ContactForm = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setResult("");

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_KEY
    );

    formData.append(
      "subject",
      "New Portfolio Inquiry"
    );

    formData.append(
      "from_name",
      "Portfolio Contact Form"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        console.log(data);
        setResult("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log(error);
      setResult("❌ Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <div
      className="
        sticky
        top-24
        bg-secondary
        rounded-[34px]
        border
        border-white/10
        shadow-[0_40px_100px_rgba(0,0,0,.35)]
        p-8
        md:p-10
      "
    >
      <h3 className="text-white text-3xl font-bold mb-8">
        Send a Message
      </h3>

      <form onSubmit={onSubmit} className="space-y-6">

        {/* Honeypot */}

        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
        />

        {/* Name */}

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="
            w-full
            bg-primary
            border
            border-white/10
            rounded-xl
            px-5
            py-4
            text-white
            placeholder:text-gray
            focus:border-accent
            outline-none
            transition
          "
        />

        {/* Email */}

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="
            w-full
            bg-primary
            border
            border-white/10
            rounded-xl
            px-5
            py-4
            text-white
            placeholder:text-gray
            focus:border-accent
            outline-none
            transition
          "
        />

        {/* Project */}

        <select
          name="project"
          required
          defaultValue=""
          className="
            w-full
            bg-primary
            border
            border-white/10
            rounded-xl
            px-5
            py-4
            text-white
            focus:border-accent
            outline-none
            transition
          "
        >
          <option value="" disabled>
            Select Project Type
          </option>

          <option>Business Website</option>
          <option>Shopify Store</option>
          <option>Wix Website</option>
          <option>Landing Page</option>
          <option>Web Application</option>
          <option>Other</option>
        </select>

        {/* Budget */}

        <input
          type="text"
          name="budget"
          placeholder="Estimated Budget (Optional)"
          className="
            w-full
            bg-primary
            border
            border-white/10
            rounded-xl
            px-5
            py-4
            text-white
            placeholder:text-gray
            focus:border-accent
            outline-none
          "
        />

        {/* Message */}

        <textarea
          rows="6"
          name="message"
          placeholder="Tell me about your project..."
          required
          className="
            w-full
            resize-none
            bg-primary
            border
            border-white/10
            rounded-xl
            px-5
            py-4
            text-white
            placeholder:text-gray
            focus:border-accent
            outline-none
          "
        />

        {/* Button */}

        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            bg-accent
            text-primary
            py-4
            rounded-full
            font-semibold
            flex
            items-center
            justify-center
            gap-3
            hover:scale-[1.02]
            duration-300
            disabled:opacity-60
            disabled:cursor-not-allowed
          "
        >
          {loading ? (
            <>
              <svg
                className="w-5 h-5 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  opacity=".2"
                />
                <path
                  d="M22 12A10 10 0 0012 2"
                  stroke="currentColor"
                  strokeWidth="4"
                />
              </svg>

              Sending...
            </>
          ) : (
            <>
              Send Message

              <HiOutlinePaperAirplane size={20} />
            </>
          )}
        </button>

        {/* Status */}

        {result && (
          <p
            className={`text-center font-medium ${
              result.includes("success")
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {result}
          </p>
        )}

      </form>
    </div>
  );
};

export default ContactForm;