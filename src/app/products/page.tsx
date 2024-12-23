'use client';

import React, { useEffect, useState } from 'react';
import { BACK_URL } from '@/config/config';
import ProductCard from '@/components/cards/ProductCard';
import ProductFilters from '@/components/ProductFilters';

interface Product {
  name: string;
  description: string;
  price: number | Record<string, number>;
  thumbnail?: string;
  slug: string;
  category?: string;
  subcategory?: string;
  images?: string[];
  features?: Record<string, any>;
  brand?: string;
  instock?: boolean;
  stock?: number;
  tags?: string[];
}

interface SelectedFilters {
  category?: string;
  subcategory?: string;
  price?: string;
  size?: string;
  color?: string;
  brand?: string;
  instock?: boolean;
}

export default function Page() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<any[]>([]);

  const generateFilters = (products: Product[]) => {
    const categoryOptions = Array.from(new Set(products.map((p) => p.category).filter(Boolean)));
    const subcategoryOptions = Array.from(new Set(products.map((p) => p.subcategory).filter(Boolean)));
    const sizeOptions = Array.from(
      new Set(
        products
          .flatMap((p) => (typeof p.features?.size === 'string' ? [p.features.size] : []))
          .filter(Boolean)
      )
    );
    const colorOptions = Array.from(
      new Set(
        products
          .flatMap((p) => (typeof p.features?.color === 'string' ? [p.features.color] : []))
          .filter(Boolean)
      )
    );
    const brandOptions = Array.from(new Set(products.map((p) => p.brand).filter(Boolean)));
    const priceOptions = ['<10', '10-50', '>50'];

    const dynamicFilters = [
      { label: 'Categoría', key: 'category', options: categoryOptions },
      { label: 'Subcategoría', key: 'subcategory', options: subcategoryOptions },
      { label: 'Talla', key: 'size', options: sizeOptions },
      { label: 'Color', key: 'color', options: colorOptions },
      { label: 'Marca', key: 'brand', options: brandOptions },
      { label: 'Precio', key: 'price', options: priceOptions },
      { label: 'En Stock', key: 'instock', options: ['En stock', 'Agotado'] },
    ];

    setFilters(dynamicFilters);
  };

  const applyFilters = (selectedFilters: SelectedFilters) => {
    const filtered = products.filter((product) => {
      return Object.entries(selectedFilters).every(([key, value]) => {
        if (!value) return true;
        if (key === 'price') {
          const price = typeof product.price === 'number' ? product.price : 0;
          if (value === '<10') return price < 10;
          if (value === '10-50') return price >= 10 && price <= 50;
          if (value === '>50') return price > 50;
        } else if (key === 'size' || key === 'color') {
          return product.features?.[key] === value;
        } else if (key === 'category' || key === 'subcategory' || key === 'brand') {
          return product[key as keyof Product] === value;
        } else if (key === 'instock') {
          return value === 'En stock' ? product.instock : !product.instock;
        }
        return true;
      });
    });
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${BACK_URL}/get-products/`);
        if (!res.ok) throw new Error('Error al obtener los productos');
        const data = await res.json();
        setProducts(data.products);
        setFilteredProducts(data.products);
        generateFilters(data.products);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

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
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/4 lg:sticky lg:top-10">
            <ProductFilters products={products} onFilterChange={applyFilters} />
          </div>
          <div className="flex-1 flex flex-wrap gap-6 justify-center lg:justify-start">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.slug}
                title={product.name}
                subtitle={product.description}
                price={typeof product.price === 'number' ? product.price.toFixed(2) : 'Variable'}
                image={product.thumbnail || '/images/placeholder.png'}
                url={`/products/${product.slug}`}
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
