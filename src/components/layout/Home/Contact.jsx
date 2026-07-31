import React from "react";
import ContactInfo from "./Contact/ContactInfo";
import ContactForm from "./Contact/ContactForm";


const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-accent py-16"
    >
      <div className="w-[90%] mx-auto">

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-20 items-start">

          <ContactInfo />

          <ContactForm />

        </div>

      </div>
    </section>
  );
};

export default Contact;