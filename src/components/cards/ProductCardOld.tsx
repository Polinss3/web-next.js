// components/ProductCard.tsx
import React from 'react';

interface ProductCardProps {
  productName: string;
  productDescription: string;
  productPrice: string;
  productThumbnail: string;
  productLink: string;
  features: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  productName,
  productDescription,
  productPrice,
  productThumbnail,
  productLink,
  features,
}) => {
  return (
    <div className="flex flex-col bg-[--background3] rounded-3xl shadow-lg h-auto w-80">
      {/* Imagen del producto */}
      <img
        src={productThumbnail}
        alt={productName}
        className="w-full h-48 object-cover rounded-t-3xl"
      />
      <div className="px-6 py-8 sm:p-10 sm:pb-6">
        <div className="grid items-center justify-center w-full grid-cols-1 text-left">
          <div>
            <h2 className="text-lg font-medium tracking-tighter text-[--neutro1] lg:text-3xl">
              {productName}
            </h2>
            <p className="mt-2 text-sm text-[--neutro1]">{productDescription}</p>
          </div>
          <div className="mt-6">
            <p className="text-5xl font-light tracking-tight text-[--neutro1]">
              {productPrice}€
            </p>
          </div>
        </div>
      </div>
      <div className="flex px-6 pb-8 sm:px-8">
        <a
          aria-describedby="tier-company"
          className="flex items-center justify-center w-full px-6 py-2.5 text-center text-[--background1] text-bold duration-200 bg-[--color1] border-2 border-[--color5] rounded-full hover:bg-transparent hover:border-[--color1] hover:text-[--color1] focus:outline-none focus-visible:outline-black text-md focus-visible:ring-black"
          href={productLink}
        >
          Ver producto
        </a>
      </div>
      <div className="px-6 pb-6">
        <ul className="mt-4 space-y-2 text-sm text-[--neutro1]">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">-</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;
