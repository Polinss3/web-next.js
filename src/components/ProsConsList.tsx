import React from 'react';

interface ProsConsListsProps {
  titulo: string;
  descripcion: string;
  titulo_contras: string;
  titulo_pros: string;
  contras: string[];
  pros: string[];
}

const ProsConsLists: React.FC<ProsConsListsProps> = ({
  titulo,
  descripcion,
  titulo_contras,
  titulo_pros,
  contras,
  pros,
}) => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-[500px] gap-8 ">
      {/* Título y Descripción */}
      <article className="flex flex-col items-center justify-center w-3/5 text-center">
        <h2 className="text-2xl font-bold">{titulo}</h2>
        <p
          className="mt-4 text-base"
          dangerouslySetInnerHTML={{ __html: descripcion }}
        ></p>
      </article>

      {/* Contenedor de Pros y Contras */}
      <div className="flex flex-wrap justify-center items-start w-full gap-10">
        {/* Contras */}
        <article className="flex flex-col items-center justify-center min-w-[350px] p-6 border border-red-500 rounded-lg font-black">
          <h3 className="mb-2.5 text-xl font-semibold">{titulo_contras}</h3>
          <ul className="flex flex-col items-start p-0">
            {contras.map((contra, index) => (
              <li key={index} className="flex items-start mb-2.5">
                {/* Icono de X */}
                <svg
                  className="w-6 h-6 mt-1 mr-2 text-red-600 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                {/* Texto del Contra */}
                <span className="font-bold" dangerouslySetInnerHTML={{ __html: contra }} />
              </li>
            ))}
          </ul>
        </article>

        {/* Pros */}
        <article className="flex flex-col items-center justify-center min-w-[350px] p-6 border border-green-500 rounded-lg">
          <h3 className="mb-2.5 text-xl font-semibold">{titulo_pros}</h3>
          <ul className="flex flex-col items-start p-0">
            {pros.map((pro, index) => (
              <li key={index} className="flex items-start mb-2.5">
                {/* Icono de Check */}
                <svg
                  className="w-6 h-6 mt-1 mr-2 text-green-600 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {/* Texto del Pro */}
                <span className="font-bold" dangerouslySetInnerHTML={{ __html: pro }} />
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default ProsConsLists;
