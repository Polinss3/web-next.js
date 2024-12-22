import React from "react";

interface ProductInfoProps {
  name: string;
  description: string;
  price: number;
  features: Record<string, any>;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  name,
  description,
  price,
  features,
}) => {
  return (
    <div className="text-white space-y-6">
      <h2 className="text-3xl font-bold">Información del Producto</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">Nombre</h3>
          <p className="text-gray-300">{name}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Descripción</h3>
          <p className="text-gray-300">{description}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Precio</h3>
          <p className="text-gray-300">{price.toFixed(2)} €</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Características</h3>
          {/* En lugar de features.map(), usamos Object.entries(features) */}
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {Object.entries(features).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {String(value)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;