import React from "react";
import ContactForm from "@/components/forms/ContactForm";
import PageHeader from "@/components/PageHeader";
import { div } from "framer-motion/client";
// Ajusta la ruta de import según donde tengas tu formulario

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        description="Fill the form and we will get in touch as soon as possible"
        image="/images/components.webp"
      />

      {/* Contenedor principal del formulario */}
    <section className="w-full mt-8 px-4 flex justify-center items-center">
      <div className="w-11/12 lg:w-4/5">
        <ContactForm />
      </div>
    </section>
    </div>
  );
}
