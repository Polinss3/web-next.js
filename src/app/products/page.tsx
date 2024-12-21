'use client';

import React, { useEffect, useState } from 'react';
import { BACK_URL } from "@/config/config";
import ProductCard from '@/components/cards/ProductCard';
import ProductFilters from '@/components/ProductFilters';

interface Product {
  name: string;
  description: string;
  price: number;
  thumbnail: string;
  url: string;
  size?: string; // Opcional
  color?: string; // Opcional
}

interface SelectedFilters {
  price?: string; // '<10', '10-50', '>50' o undefined
  size?: string; // 'S', 'M', 'L', 'XL' o undefined
  color?: string; // 'Rojo', 'Azul', 'Verde', 'Negro' o undefined
}

export default function Page() {
  const [products, setProducts] = useState<Product[]>([]); // Lista de productos
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // Lista filtrada
  const [isLoading, setIsLoading] = useState<boolean>(true); // Indicador de carga

  // Configuración de filtros
  const filterOptions = [
    { label: 'Precio', key: 'price', options: ['<10', '10-50', '>50'] },
    { label: 'Talla', key: 'size', options: ['S', 'M', 'L', 'XL'] },
    { label: 'Color', key: 'color', options: ['Rojo', 'Azul', 'Verde', 'Negro'] },
  ];

  // Función para aplicar filtros
  const applyFilters = (selectedFilters: SelectedFilters) => {
    const filtered = products.filter((product) => {
      return Object.entries(selectedFilters).every(([key, value]) => {
        if (!value) return true; // Si el filtro no está seleccionado, no afecta
        if (key === 'price') {
          const price = product.price;
          if (value === '<10') return price < 10;
          if (value === '10-50') return price >= 10 && price <= 50;
          if (value === '>50') return price > 50;
        } else if (key === 'size' || key === 'color') {
          return product[key as keyof Product] === value;
        }
        return true;
      });
    });
    setFilteredProducts(filtered);
  };

  // Fetch inicial de productos
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${BACK_URL}/get-products/`);
        if (!res.ok) throw new Error('Error al obtener los productos');
        const data = await res.json();
        setProducts(data.products);
        setFilteredProducts(data.products);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  console.log(products);

  if (isLoading) {
    return <div className="text-center text-white">Cargando productos...</div>;
  }

  if (products.length === 0) {
    return <div className="text-center text-white">No se encontraron productos.</div>;
  }

  return (
    <div className="min-h-screen py-10 text-white">
      <h1 className="text-3xl font-bold text-center mb-8">Nuestros Productos</h1>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Panel de filtros */}
          <div className="md:w-1/4">
            <ProductFilters filters={filterOptions} onFilterChange={applyFilters} />
          </div>
          {/* Listado de productos */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.url}
                title={product.name}
                subtitle={product.description}
                price={product.price.toString()}
                image={product.thumbnail}
                url={`/products/${product.url}`}
                height="300px"
                width="220px"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
