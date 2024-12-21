import React, { useState } from 'react';

interface ProductCardProps {
  title: string;
  subtitle: string;
  price: string;
  image: string;
  url: string;
  height?: string;
  width?: string;
}

export default function ProductCard({
  title,
  subtitle,
  price,
  image,
  url,
  height = '285px',
  width = '195px',
}: ProductCardProps) {
  const [currentImage, setCurrentImage] = useState(image);

  const handleImageError = () => {
    setCurrentImage('/images/components.webp'); // Imagen por defecto
  };

  return (
    <a
      href={url}
      className="bg-[#313131] rounded-2xl flex flex-col items-center justify-center text-white relative overflow-hidden transform transition-transform duration-200 hover:scale-105 group"
      style={{ height, width }}
    >
      {/* Imagen de fondo con manejo de error */}
      <img
        src={currentImage}
        alt={title}
        onError={handleImageError}
        className="absolute inset-0 object-cover w-full h-full transition-all duration-200 group-hover:blur-sm"
      />

      {/* Contenido mostrado al hacer hover */}
      <div className="absolute inset-0 flex items-center justify-center z-20 bg-[#313131]/70 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <div className="textBox flex flex-col items-center justify-center gap-4">
          <p className="text-lg font-bold">{title}</p>
          <span className="text-sm text-gray-400">{subtitle}</span>
          <p className="text-md font-bold">{price}€</p>
        </div>
      </div>
    </a>
  );
}
