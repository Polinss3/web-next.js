import React from 'react';

interface CubesInformationProps {
  titulo: string;
  descripcion: string;
  columna1: string;
  columna2: string;
  columna3: string;
}

const CubesInformation: React.FC<CubesInformationProps> = ({
  titulo,
  descripcion,
  columna1,
  columna2,
  columna3,
}) => {
  const svgs = ['/businessplan.svg', '/layer1.svg', '/car.svg', '/gauge.svg'];

  const columnas = [
    { contenido: columna1, svg: svgs[0] },
    { contenido: columna2, svg: svgs[1] },
    { contenido: columna3, svg: svgs[2] },
  ];

  return (
    <section className="flex flex-col items-center w-full py-8">
      <article className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-4">{titulo}</h2>
        <p
          className="text-gray-700"
          dangerouslySetInnerHTML={{ __html: descripcion }}
        />
      </article>
      <article className="bg-white text-black border-2 border-gray-200 rounded-lg p-6 w-4/5 flex flex-col md:flex-row justify-between items-center">
        {columnas.map((columna, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center md:w-1/3 mb-6 md:mb-0">
              <img src={columna.svg} alt="Icono" className="h-16 mb-4" />
              <p
                className="text-center"
                dangerouslySetInnerHTML={{ __html: columna.contenido }}
              />
            </div>
            {index < columnas.length - 1 && (
              <div className="hidden md:block bg-gray-300 w-px h-64 mx-4"></div>
            )}
          </React.Fragment>
        ))}
      </article>
    </section>
  );
};

export default CubesInformation;
