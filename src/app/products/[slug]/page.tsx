"use client";

import React, { useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";
import { BACK_URL } from "@/config/config";

interface ProductData {
  name: string;
  url: string;
  description: string;
  price: number;
  thumbnail: string;
  features: string[];
  created_at: string;
  updated_at: string;
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProductPage({ params }: PageProps) {
  const [product, setProduct] = useState<ProductData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [slug, setSlug] = useState<string | null>(null);

  // Imagen final, con fallback a "/images/components.webp"
  const [productImage, setProductImage] = useState<string>("/images/components.webp");

  // Extraer slug desde params usando React.use()
  useEffect(() => {
    async function fetchSlug() {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
    }
    fetchSlug();
  }, [params]);

  // Fetch del producto basado en el slug
  useEffect(() => {
    if (!slug) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch(`${BACK_URL}/get-product/${slug}/`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Error al obtener el producto");
        }

        const data: ProductData = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
        setError("Error al cargar el producto.");
      }
    };

    fetchProduct();
  }, [slug]);

  // Verificar si la URL de la imagen es válida; si no, usar la imagen por defecto
  useEffect(() => {
    if (!product?.thumbnail) {
      // Si no hay thumbnail, usamos la predeterminada sin comprobar nada
      setProductImage("/images/components.webp");
      return;
    }

    async function checkImageURL(url: string) {
      try {
        const headRes = await fetch(url, { method: "HEAD" });
        // Si la imagen responde con status 200, usamos esa; si no, fallback
        if (headRes.ok) {
          setProductImage(url);
        } else {
          setProductImage("/images/components.webp");
        }
      } catch {
        setProductImage("/images/components.webp");
      }
    }

    checkImageURL(product.thumbnail);
  }, [product?.thumbnail]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="min-h-screen py-10">
      <PageHeader
        title={product.name}
        description={product.description}
        image={productImage}
      />

      <div className="container mx-auto px-4 mt-10 flex flex-col md:flex-row gap-6">
        {/* Columna izquierda: Información del producto */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mt-6">{product.name}</h2>
          <p className="text-gray-600 mt-4">{product.description}</p>
          <h3 className="text-xl font-semibold mt-6">Características:</h3>
          <ul className="list-disc pl-5 mt-2">
            {product.features.map((feature, index) => (
              <li key={index} className="text-gray-700">
                {feature}
              </li>
            ))}
          </ul>
          <p className="text-lg font-bold mt-6">Precio: {product.price}€</p>
        </div>

        {/* Columna derecha: Formulario de pedido */}
        <div className="md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Haz tu pedido</h3>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Tu correo electrónico"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700"
              >
                Cantidad
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                className="w-full p-2 border border-gray-300 rounded-md"
                min="1"
                placeholder="Número de unidades"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Enviar Pedido
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}