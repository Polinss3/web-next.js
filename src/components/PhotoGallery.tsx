'use client';

import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface PhotoGalleryProps {
  images: string[]; // Siempre deben ser 8 imágenes
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ images }) => {
  if (images.length !== 8) {
    console.error("El número de imágenes debe ser exactamente 8.");
    return null;
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const settings = {
    initialSlide: currentImageIndex,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full">
      {/* Galería de imágenes en forma de "U" */}
      <div className="relative grid grid-cols-3 grid-rows-3 gap-2 max-w-none w-full">
        {/* Imagen principal (grande, ocupa dos filas) */}
        <div
          className="flex justify-center items-center row-span-2 col-start-2"
          style={{ gridRow: "1 / span 2", gridColumn: "2" }}
        >
          <img
            className="h-64 w-64 rounded-lg object-cover cursor-pointer"
            src={images[0]}
            alt="Imagen Principal"
            onClick={() => openModal(0)}
          />
        </div>

        {/* Imagen pequeña central (tercera fila) */}
        <div
          className="flex justify-center items-center"
          style={{ gridRow: "3", gridColumn: "2" }}
        >
          <img
            className="h-40 w-40 rounded-lg object-cover cursor-pointer"
            src={images[1]}
            alt="Imagen 2"
            onClick={() => openModal(1)}
          />
        </div>

        {/* Otras imágenes alrededor */}
        <div className="flex justify-center items-center" style={{ gridRow: "1", gridColumn: "1" }}>
          <img
            className="h-40 w-40 rounded-lg object-cover cursor-pointer"
            src={images[2]}
            alt="Imagen 3"
            onClick={() => openModal(2)}
          />
        </div>
        <div className="flex justify-center items-center" style={{ gridRow: "1", gridColumn: "3" }}>
          <img
            className="h-40 w-40 rounded-lg object-cover cursor-pointer"
            src={images[3]}
            alt="Imagen 4"
            onClick={() => openModal(3)}
          />
        </div>
        <div className="flex justify-center items-center" style={{ gridRow: "2", gridColumn: "1" }}>
          <img
            className="h-40 w-40 rounded-lg object-cover cursor-pointer"
            src={images[4]}
            alt="Imagen 5"
            onClick={() => openModal(4)}
          />
        </div>
        <div className="flex justify-center items-center" style={{ gridRow: "2", gridColumn: "3" }}>
          <img
            className="h-40 w-40 rounded-lg object-cover cursor-pointer"
            src={images[5]}
            alt="Imagen 6"
            onClick={() => openModal(5)}
          />
        </div>
        <div className="flex justify-center items-center" style={{ gridRow: "3", gridColumn: "1" }}>
          <img
            className="h-40 w-40 rounded-lg object-cover cursor-pointer"
            src={images[6]}
            alt="Imagen 7"
            onClick={() => openModal(6)}
          />
        </div>
        <div className="flex justify-center items-center" style={{ gridRow: "3", gridColumn: "3" }}>
          <img
            className="h-40 w-40 rounded-lg object-cover cursor-pointer"
            src={images[7]}
            alt="Imagen 8"
            onClick={() => openModal(7)}
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl mx-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl bg-red-500 p-2 rounded-full z-50"
            >
              ✖
            </button>
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    className="h-auto max-w-full mx-auto rounded-lg"
                    src={image}
                    alt={`Imagen ${index + 1}`}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
