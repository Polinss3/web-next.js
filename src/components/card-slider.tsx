import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Card from './cards/card'

interface CardItem {
    title: string
    subtitle: string
    price: string
    image: string
  }
  
  interface CardSliderProps {
    title: string
    description: string
    items: CardItem[]
    cardHeight?: string
    cardWidth?: string
  }
  
  export default function CardSlider({
    title,
    description,
    items,
    // cardHeight = '285px',
    cardWidth = '195px',
  }: CardSliderProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end end'],
  })

   // Ancho total de las tarjetas y desplazamiento máximo
   const totalWidth = items.length * (parseInt(cardWidth) + 24) // Incluye el gap entre tarjetas
   const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 0
   const maxOffsetX = totalWidth-viewportWidth

  // Factor de amplificación para el desplazamiento horizontal
  const amplificationFactor = 0.5 // Ajusta este valor para controlar la intensidad del desplazamiento lateral

  const x = useTransform(scrollYProgress, [0, 1], [0, -maxOffsetX * amplificationFactor])

  return (
    <div className="relative min-h-screen py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg mb-10 text-gray-400">{description}</p>
      </div>
      <div ref={sectionRef} className="overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-6 max-w-full px-6"
        >
          {items.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              price={item.price}
              image={item.image}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
