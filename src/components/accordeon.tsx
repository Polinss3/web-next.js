'use client';
import React, { useState } from 'react';

interface AccordeonItem {
  title: string;
  description: string;
}

interface AccordeonProps {
  title: string;
  content: AccordeonItem[];
}

const Accordeon: React.FC<AccordeonProps> = ({ title, content }) => {
  const [openIndex, setOpenIndex] = useState<number>(0); // El primer ítem está abierto por defecto

  const toggleItem = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? -1 : index));
  };

  return (
    <section className="w-4/5 mx-auto p-5">
      {/* Título Principal */}
      <h2 className="text-2xl font-bold text-white mb-5">{title}</h2>

      {/* Contenedor Principal */}
      <div className="flex flex-wrap">
        {/* Contenido del Acordeón */}
        <article className="w-full md:w-3/5 flex flex-col gap-4">
          {content.map((item, index) => {
            const isOpen = openIndex === index;
            const numero = String(index + 1).padStart(2, '0');

            return (
              <div
                key={index}
                className={`border border-gray-300 rounded-lg overflow-hidden ${
                  isOpen ? 'bg-red-100' : ''
                }`}
              >
                {/* Encabezado del Ítem */}
                <div
                  className="flex justify-between items-center p-4 bg-primary cursor-pointer hover:bg-secondary transition-colors"
                  onClick={() => toggleItem(index)}
                >
                  <h3 className="flex items-center text-lg font-semibold text-white">
                    <span className="text-2xl font-bold text-accent mr-3">{numero}</span>
                    {item.title}
                  </h3>
                  {/* Icono de Toggle */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 text-primary transition-transform ${
                      isOpen ? 'transform rotate-45' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v14m7-7H5"
                    />
                  </svg>
                </div>
                {/* Contenido del Ítem */}
                {isOpen && (
                  <div className="p-4 text-white bg-secondary" dangerouslySetInnerHTML={{ __html: item.description }} />
                )}
              </div>
            );
          })}
        </article>

        {/* Imagen del Acordeón */}
        <article className="w-full md:w-2/5 flex justify-center items-center mt-5 md:mt-0">
          <img src="/imagenes/ordenador.png" alt="Imagen acordeón" className="w-full max-w-sm" />
        </article>
      </div>
    </section>
  );
};

export default Accordeon;
