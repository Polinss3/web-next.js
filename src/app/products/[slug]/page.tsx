"use client";

import React, { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import ProductForm from "@/components/forms/ProductForm";
import PhotoGallery from "@/components/PhotoGallery";
import ProductInfo from "@/components/ProductInfo";
import { BACK_URL } from "@/config/config";

interface ProductData {
  name: string;
  slug: string;
  description: string;
  price: number;
  thumbnail?: string;
  features?: Record<string, any>;
  images?: string[];
  created_at: string;
  updated_at: string;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductPage({ params }: PageProps) {
  const [product, setProduct] = useState<ProductData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const { slug } = await params;
        const res = await fetch(`${BACK_URL}/get-product/${slug}/`, {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error("Error al obtener el producto");
        }
        const data = await res.json();
        if (isMounted) {
          setProduct(data);
        }
      } catch (err: any) {
        console.error(err);
        if (isMounted) {
          setError("Error al cargar el producto.");
        }
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [params]);

  if (error) {
    return <div className="text-white">{error}</div>;
  }

  if (!product) {
    return <div className="text-white">Cargando...</div>;
  }

  return (
    <div className="min-h-screen py-10">
      <PageHeader
        title={product.name}
        description={product.description}
        image={product.thumbnail || "/images/placeholder.png"}
      />
      <div className="container mx-auto px-4 mt-10 flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <PhotoGallery
            images={
              product.images?.length
                ? product.images
                : ["/images/placeholder.png"]
            }
          />
        </div>
        <div className="flex-1">
          <ProductInfo
            name={product.name}
            description={product.description}
            price={product.price}
            features={product.features || {}}
          />
        </div>
        <div className="flex-1">
          <ProductForm productSlug={product.slug} />
        </div>
      </div>
    </div>
  );
}
