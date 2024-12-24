import React from "react";
import Image from "next/image";

interface BentoGridProps {
  items: {
    title: string;
    description: string;
    image?: string;
    backgroundColor?: string;
  }[];
  /**
   * Matriz que describe la disposición de los items.
   * Cada posición en la matriz corresponde a un "slot" en el grid,
   * y el número indica el ID del item que se coloca en ese slot.
   */
  disposition: number[][];
  /** Altura de cada fila (por defecto "200px"). */
  rowHeight?: string;
}

export default function BentoGrid({
  items,
  disposition,
  rowHeight = "200px",
}: BentoGridProps) {
  // Mapeamos la posición de cada item según la disposición
  const positionMap = new Map<
    number,
    { startRow: number; startCol: number; rowSpan: number; colSpan: number }
  >();

  disposition.forEach((row, rowIndex) => {
    row.forEach((itemIndex, colIndex) => {
      // Solo procesamos índices válidos
      if (itemIndex < 1) return;

      if (!positionMap.has(itemIndex)) {
        // Si aún no existe el itemIndex en el mapa, creamos una entrada
        positionMap.set(itemIndex, {
          startRow: rowIndex + 1,
          startCol: colIndex + 1,
          rowSpan: 1,
          colSpan: 1,
        });
      } else {
        // Si ya existe, expandimos su span (row o col)
        const pos = positionMap.get(itemIndex)!;
        pos.rowSpan = Math.max(pos.rowSpan, rowIndex - pos.startRow + 2);
        pos.colSpan = Math.max(pos.colSpan, colIndex - pos.startCol + 2);
      }
    });
  });

  // Número de columnas lo sacamos del length de la primera fila en disposition
  const totalCols = disposition[0]?.length || 0;
  // Número de filas lo sacamos del length total de disposition
  const totalRows = disposition.length;

  return (
    <div
      className="grid gap-4 p-4 md:p-6 max-w-7xl mx-auto"
      style={{
        gridTemplateColumns: `repeat(${totalCols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${totalRows}, ${rowHeight})`,
      }}
    >
      {Array.from(positionMap.entries()).map(
        ([itemIndex, { startRow, startCol, rowSpan, colSpan }]) => {
          // Convertimos a índice de array (0-based)
          const arrayIndex = itemIndex - 1;
          // Verificamos que el item exista
          const item = items[arrayIndex];
          if (!item) return null;

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
              {/* Gradiente sobre la imagen / color */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
              
              <div className="relative h-full w-full">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  // Si no hay imagen, mantenemos el espacio
                  <div className="h-full w-full" />
                )}
              </div>

              {/* Texto en la parte inferior */}
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
