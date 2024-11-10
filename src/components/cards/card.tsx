import React from 'react'

interface CardProps {
  title: string
  subtitle: string
  price: string
  image: string
  height?: string
  width?: string
}

export default function Card({ title, subtitle, price, image, height = '285px', width = '195px' }: CardProps) {
  return (
    <div
      className="bg-[#313131] rounded-2xl flex flex-col items-center justify-center text-white relative overflow-hidden transform transition-transform duration-200 hover:scale-105 hover:rotate-1 group"
      style={{ height, width }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-200 group-hover:blur-sm"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 flex items-center justify-center z-20 bg-[#313131]/70 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <div className="textBox flex flex-col items-center justify-center gap-4">
          <p className="text-lg font-bold">{title}</p>
          <span className="text-sm text-gray-400">{subtitle}</span>
          <p className="text-md font-bold">{price}</p>
        </div>
      </div>
    </div>
  )
}
