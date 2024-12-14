import React from "react";
import QuoteIcon from "@/components/Layout/UI/SVG/QuoteIcon";
import CornerIcon from "@/components/Layout/UI/SVG/CornerIcon";

interface QuoteProps {
  quote: string;
  cite: string;
}

const Quote: React.FC<QuoteProps> = ({ quote, cite }) => {
  return (
    <section className="p-10 mx-auto font-sans relative flex justify-center">
      <div className="inline-block w-fit max-w-full text-center">
        {/* Iconos superiores */}
        <div className="flex justify-between rotate-180">
          <CornerIcon className="-rotate-90" />
          <QuoteIcon />
        </div>

        {/* Bloque de cita */}
        <blockquote className="relative text-white pb-3 pt-5 px-12">
          <p>{quote}</p>
          <cite className="block mt-4">- {cite}</cite>
        </blockquote>

        {/* Iconos inferiores */}
        <div className="flex justify-between">
          <CornerIcon className="-rotate-90" />
          <QuoteIcon />
        </div>
      </div>
    </section>
  );
};

export default Quote;