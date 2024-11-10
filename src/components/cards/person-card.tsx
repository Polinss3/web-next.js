// components/PersonCard.jsx
import React from "react";
import Image from "next/image";

interface PersonCardProps {
  imagen: string;
  nombre: string;
  puesto: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    instagram?: string;
    twitterX?: string;
    whatsapp?: string;
  };
  resumeUrl: string;
}

const PersonCard: React.FC<PersonCardProps> = ({
  imagen,
  nombre,
  puesto,
  socialLinks,
  resumeUrl,
}) => {
  return (
    <div className="w-72 h-96 bg-[--background3] transition-transform duration-500 ease-in-out rounded-3xl clip-path-custom shadow-lg flex flex-col place-content-evenly">
      <div className="w-28 h-28 bg-white rounded-lg mt-6 mx-auto">
        <Image
          src={imagen}
          alt={nombre}
          width={112}
          height={112}
          className="object-cover rounded-lg"
        />
      </div>
      <h3 className="text-white text-center text-lg font-bold mx-6 mt-4">
        {nombre}
      </h3>
      <p className="text-white text-center text-sm font-light mx-6 mt-2">
        {puesto}
      </p>
      <div className="flex justify-center gap-4 mt-4">
        {socialLinks.github && (
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[--color1] transition"
          >
            {/* Icono de GitHub */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        )}
        {socialLinks.linkedin && (
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[--color1] transition"
          >
            {/* Icono de LinkedIn */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M8 11v5" />
              <path d="M8 8v.01" />
              <path d="M12 16v-5" />
              <path d="M16 16v-3a2 2 0 1 0 -4 0" />
              <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
            </svg>
          </a>
        )}
        {socialLinks.instagram && (
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[--color1] transition"
          >
            {/* Icono de Instagram */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M16.5 7.5v.01" />
            </svg>
          </a>
        )}
        {socialLinks.twitterX && (
          <a
            href={socialLinks.twitterX}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[--color1] transition"
          >
            {/* Icono de TwitterX */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
          </a>
        )}
        {socialLinks.whatsapp && (
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[--color1] transition"
          >
            {/* Icono de WhatsApp */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
              <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
            </svg>
          </a>
        )}
      </div>
      <button
        onClick={() => window.open(resumeUrl, "_blank")}
        className="mt-4 mx-auto px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-[--color1] hover:text-white transition"
      >
        Resume
      </button>
    </div>
  );
};

export default PersonCard;
