import React from "react";
import Image from "next/image";

interface BentoGridProps {
  items: {
    title: string;
    description: string;
    image?: string;
    backgroundColor?: string;
  }[];
  disposition: number[][];
  rowHeight?: string;
}

export default function BentoGrid({
  items,
  disposition,
  rowHeight,
}: BentoGridProps) {
  // Mapeo de posición de cada ítem en el grid
  const positionMap = new Map<
    number,
    { startRow: number; startCol: number; rowSpan: number; colSpan: number }
  >();

  disposition.forEach((row, rowIndex) => {
    row.forEach((itemIndex, colIndex) => {
      if (!positionMap.has(itemIndex)) {
        // Si el índice no ha sido registrado, creamos la entrada
        positionMap.set(itemIndex, {
          startRow: rowIndex + 1,
          startCol: colIndex + 1,
          rowSpan: 1,
          colSpan: 1,
        });
      } else {
        // Si ya existe, expandimos el tamaño en filas o columnas
        const pos = positionMap.get(itemIndex)!;
        pos.rowSpan = Math.max(pos.rowSpan, rowIndex - pos.startRow + 2);
        pos.colSpan = Math.max(pos.colSpan, colIndex - pos.startCol + 2);
      }
    });
  });

  return (
    <div
      className={`grid gap-4 p-4 md:p-6 max-w-7xl mx-auto`}
      style={{
        gridTemplateColumns: `repeat(${disposition[0].length}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${disposition.length}, ${
          rowHeight || "200px"
        })`, // Todas las filas tendrán una altura de 200px
      }}
    >
      {Array.from(positionMap.entries()).map(
        ([itemIndex, { startRow, startCol, rowSpan, colSpan }]) => {
          const item = items[itemIndex - 1]; // Ajustamos el índice para el array de items

          return (
            <div
              key={itemIndex}
              className={`group relative overflow-hidden rounded-lg shadow-md transition-all hover:shadow-xl ${
                item.backgroundColor ? "" : "bg-white"
              }`}
              style={{
                gridRow: `${startRow} / span ${rowSpan}`,
                gridColumn: `${startCol} / span ${colSpan}`,
                backgroundColor: item.backgroundColor?.startsWith("--")
                  ? `var(${item.backgroundColor})`
                  : item.backgroundColor || "transparent",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
              <div className="relative h-full w-full">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full" />
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 z-20 p-4 text-white">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/90">{item.description}</p>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}
