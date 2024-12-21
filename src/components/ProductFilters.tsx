// src/components/filters/ProductFilters.tsx
import React, { useState } from 'react';

interface FilterOption {
  label: string; // Nombre del filtro
  key: string; // Clave del filtro (ejemplo: "price", "size", "color")
  options: string[]; // Opciones disponibles para el filtro
}

interface ProductFiltersProps {
  filters: FilterOption[];
  onFilterChange: (selectedFilters: Record<string, string | null>) => void;
}

export default function ProductFilters({ filters, onFilterChange }: ProductFiltersProps) {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string | null>>({});

  const handleFilterChange = (key: string, value: string | null) => {
    const newFilters = { ...selectedFilters, [key]: value };
    setSelectedFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-md text-white">
      <h2 className="text-xl font-semibold mb-4">Filtrar Productos</h2>
      {filters.map((filter) => (
        <div key={filter.key} className="mb-4">
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
