import React from 'react';

interface ThreeColumnsInformationProps {
  title: string;
  description: string;
  column1: string;
  column2: string;
  column3: string;
}

const ThreeColumnsInformation: React.FC<ThreeColumnsInformationProps> = ({
  title,
  description,
  column1,
  column2,
  column3,
}) => {
  return (
    <section className="flex flex-col items-center w-full py-8">
      <article className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: description }} />
      </article>
      <article className=" border-2 border-gray-200 rounded-lg p-6 w-4/5 flex flex-col md:flex-row justify-between items-center">
        {/* Columna 1 */}
        <div className="flex flex-col items-center md:w-1/3 mb-6 md:mb-0">
          <img src="/imagenes/gauge.svg" alt="Icono" className="h-16 mb-4" />
          <p className="text-center" dangerouslySetInnerHTML={{ __html: column1 }} />
        </div>
        {/* Separador */}
        <div className="hidden md:block bg-gray-300 w-px h-64 mx-4"></div>
        {/* Columna 2 */}
        <div className="flex flex-col items-center md:w-1/3 mb-6 md:mb-0">
          <img src="/imagenes/car.svg" alt="Icono" className="h-16 mb-4" />
          <p className="text-center" dangerouslySetInnerHTML={{ __html: column2 }} />
        </div>
        {/* Separador */}
        <div className="hidden md:block bg-gray-300 w-px h-64 mx-4"></div>
        {/* Columna 3 */}
        <div className="flex flex-col items-center md:w-1/3">
          <img src="/imagenes/layer1.svg" alt="Icono" className="h-16 mb-4" />
          <p className="text-center" dangerouslySetInnerHTML={{ __html: column3 }} />
        </div>
      </article>
    </section>
  );
};

export default ThreeColumnsInformation;
