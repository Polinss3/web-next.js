import React from "react";

interface BannerOffersCTAProps {
  version: 1 | 2;
  title: string;
  description: string;
}

const BannerOffersCTA: React.FC<BannerOffersCTAProps> = ({
  version,
  title,
  description,
}) => {
  if (version === 1) {
    return (
      <section className="flex justify-between items-center mt-[150px] mx-[10%] bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl relative h-[200px] p-5 font-lexend-deca text-white">
        <article className="relative z-20 ml-[15%] w-[38%]">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="mt-2 text-base">{description}</p>
          <a
            href="#"
            className="bg-white w-24 rounded-md px-5 py-2 text-black font-bold flex justify-between items-center mt-4 no-underline"
          >
            Ofertas
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D60E2B"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icon-tabler-plus"
              >
                <g transform="translate(24 24) rotate(180)">
                  <path d="M0,0H24V24H0Z" fill="none" />
                  <path d="M17,6H11a1,1,0,0,0-.78.375l-4,5a1,1,0,0,0,0,1.25l4,5A1,1,0,0,0,11,18h6l.112-.006a1,1,0,0,0,.669-1.619L14.28,12l3.5-4.375A1,1,0,0,0,17,6Z" />
                </g>
              </svg>
            </span>
          </a>
        </article>
        <article className="absolute -top-[110px] right-[14%] h-[350px] z-10">
          <img
            src="/imagenes/chicaOfertasCTA.png"
            alt="Chica con llave"
            className="w-auto h-full rounded-t-3xl object-contain"
          />
        </article>
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl opacity-100 z-0"></div>
      </section>
    );
  } else if (version === 2) {
    return (
      <section
        className="flex flex-col justify-start items-start bg-center bg-no-repeat bg-cover text-white h-[450px] max-h-screen font-lexend-deca"
        style={{ backgroundImage: "url(/imagenes/fondoOfertasCTA.png)" }}
      >
        <h2 className="text-2xl ml-4 mt-4">{title}</h2>
        <article className="flex flex-col justify-start items-start w-[45%] p-4">
          <p className="text-base text-left w-[80%]">{description}</p>
          <a
            href="#"
            className="flex items-center bg-white text-red-600 px-5 py-2 mt-4 rounded-md no-underline"
          >
            Échale un ojo a nuestras ofertas
            <span className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D60E2B"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icon-tabler-plus"
              >
                <g transform="translate(24 24) rotate(180)">
                  <path d="M0,0H24V24H0Z" fill="none" />
                  <path d="M17,6H11a1,1,0,0,0-.78.375l-4,5a1,1,0,0,0,0,1.25l4,5A1,1,0,0,0,11,18h6l.112-.006a1,1,0,0,0,.669-1.619L14.28,12l3.5-4.375A1,1,0,0,0,17,6Z" />
                </g>
              </svg>
            </span>
          </a>
        </article>
      </section>
    );
  } else {
    return (
      <section className="flex justify-between items-center mt-[150px] mx-[10%] bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl relative h-[200px] p-5 font-lexend-deca text-white">
        <article className="relative z-20 ml-[15%] w-[38%]">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="mt-2 text-base">{description}</p>
          <a
            href="#"
            className="bg-white w-24 rounded-md px-5 py-2 text-black font-bold flex justify-between items-center mt-4 no-underline"
          >
            Ofertas
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D60E2B"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icon-tabler-plus"
              >
                <g transform="translate(24 24) rotate(180)">
                  <path d="M0,0H24V24H0Z" fill="none" />
                  <path d="M17,6H11a1,1,0,0,0-.78.375l-4,5a1,1,0,0,0,0,1.25l4,5A1,1,0,0,0,11,18h6l.112-.006a1,1,0,0,0,.669-1.619L14.28,12l3.5-4.375A1,1,0,0,0,17,6Z" />
                </g>
              </svg>
            </span>
          </a>
        </article>
        <article className="absolute -top-[110px] right-[14%] h-[350px] z-10">
          <img
            src="imagenes/chicaOfertasCTA.png"
            alt="Chica con llave"
            className="w-auto h-full rounded-t-3xl object-contain"
          />
        </article>
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl opacity-100 z-0"></div>
      </section>
    );
  }
};

export default BannerOffersCTA;
