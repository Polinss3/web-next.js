// components/BigList.tsx
import React, { useState } from 'react';

interface ListItem {
  title: string;
  description: string;
}

interface BigListProps {
  title: React.ReactNode;
  items: ListItem[];
}

const BigList: React.FC<BigListProps> = ({ items, title }) => {
  // Estado para controlar el índice que tiene el hover activo
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-[60%] min-h-screen p-10">
      <h2 className="text-white text-3xl font-bold mb-6">{title}</h2>
      <ul className="space-y-6">
        {items.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`flex w-full justify-between items-center text-5xl font-bold text-gray-400 transition-all duration-300 cursor-pointer ${
              hoveredIndex === index ? hoverColors[index % hoverColors.length] : ''
            }`}
          >
            <span className="transition duration-75">
              {item.title}
            </span>
            <span
              className={`text-sm w-[25%] text-gray-400 transition duration-75 ml-4 ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {item.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Lista de clases de colores para asignar a cada línea de la lista en hover
const hoverColors = [
  "text-blue-500",
  "text-purple-500",
  "text-green-500",
  "text-red-500",
  "text-orange-500",
];

export default BigList;
