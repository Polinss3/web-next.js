import React, { useEffect, useState } from 'react';

interface FilterOption {
  label: string;
  key: string;
  options: string[];
}

interface ProductFiltersProps {
  products: any[]; // Lista de productos para extraer automáticamente las opciones
  onFilterChange: (selectedFilters: Record<string, string | null>) => void;
  layout?: 'vertical' | 'horizontal';
}

export default function ProductFilters({ products, onFilterChange, layout = 'vertical' }: ProductFiltersProps) {
  const [filters, setFilters] = useState<FilterOption[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string | null>>({});

  // Construir filtros dinámicamente a partir de los productos
  useEffect(() => {
    const categoryOptions = Array.from(new Set(products.map((p) => p.category).filter(Boolean)));
    const subcategoryOptions = Array.from(new Set(products.map((p) => p.subcategory).filter(Boolean)));
    const sizeOptions = Array.from(
      new Set(
        products
          .flatMap((p) => (typeof p.features?.size === 'string' ? [p.features.size] : []))
          .filter(Boolean)
      )
    );
    const priceOptions = ['<10', '10-50', '>50'];

    const dynamicFilters: FilterOption[] = [
      { label: 'Categoría', key: 'category', options: categoryOptions },
      { label: 'Subcategoría', key: 'subcategory', options: subcategoryOptions },
      { label: 'Talla', key: 'size', options: sizeOptions },
      { label: 'Precio', key: 'price', options: priceOptions },
    ];

    setFilters(dynamicFilters);
  }, [products]);

  const handleFilterChange = (key: string, value: string | null) => {
    const newFilters = { ...selectedFilters, [key]: value };
    setSelectedFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className={`p-4 rounded-lg shadow-md text-white ${layout === 'horizontal' ? 'flex gap-4' : ''}`}>
      {filters.map((filter) => (
        <div key={filter.key} className={`${layout === 'horizontal' ? 'flex-1' : 'mb-4'}`}>
          <label className="block text-sm font-medium mb-2">{filter.label}</label>
          <select
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => handleFilterChange(filter.key, e.target.value || null)}
          >
            <option value="">Todos</option>
            {filter.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}
