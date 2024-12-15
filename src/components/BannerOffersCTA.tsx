import React from "react";
import StyledLink from "./Layout/UI/StyledLink";
import ArrowIcon from "./Layout/UI/SVG/ArrowIcon";

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
      <section className="flex justify-between items-center mt-[150px] mx-[10%] bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl relative h-[200px] p-5 text-white">
        <article className="relative z-20 ml-[15%] w-[38%]">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="mt-2 text-base">{description}</p>

          <StyledLink href="#">
            Ofertas
            <span className="ml-2 h-6 w-6">
              <ArrowIcon />
            </span>
          </StyledLink>
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
          <StyledLink href="#">
            Échale un ojo a nuestras ofertas
            <span className="ml-2 h-6 w-6">
              <ArrowIcon />
            </span>
          </StyledLink>
        </article>
      </section>
    );
  } else {
    return (
      <section className="flex justify-between items-center mt-[150px] mx-[10%] bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl relative h-[200px] p-5 text-white">
        <article className="relative z-20 ml-[15%] w-[38%]">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="mt-2 text-base">{description}</p>
          <StyledLink href="#">
            Échale un ojo a nuestras ofertas
            <span className="ml-2">
              <ArrowIcon />
            </span>
          </StyledLink>
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
