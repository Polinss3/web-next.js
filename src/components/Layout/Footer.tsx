// Footer.tsx

import React, { useState } from 'react';
import Link from 'next/link'; // Si usas Next.js
import Input from './UI/Input'; // Asegúrate de tener este componente o reemplaza con un <input>
import { BACK_URL } from '@/config/config';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BACK_URL}/api/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Formulario enviado con éxito');
        // Aquí puedes agregar lógica para mostrar una notificación al usuario
      } else {
        console.error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="flex flex-wrap">
        {/* Primera columna */}
        <div className="flex-1 space-y-1 text-sm">
          <h2 className="text-xl">Categorías</h2>
          <ul className="space-y-1">
            <li>
              <Link href="/categoria-1">Categoría 1</Link>
            </li>
            <li>
              <Link href="/categoria-2">Categoría 2</Link>
            </li>
            {/* Agrega más enlaces según sea necesario */}
          </ul>
        </div>
        {/* Segunda columna */}
        <div className="flex-1 space-y-1 text-sm">
          <h2 className="text-xl">Enlaces útiles</h2>
          <ul className="space-y-1">
            <li>
              <Link href="/enlace-1">Enlace 1</Link>
            </li>
            <li>
              <Link href="/enlace-2">Enlace 2</Link>
            </li>
            {/* Agrega más enlaces según sea necesario */}
          </ul>
        </div>
        {/* Tercera columna */}
        <div className="flex-1">
          <h2 className="text-xl mb-4">Únete a nuestro boletín</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full p-2 text-black"
            />
            <Input
              type="text"
              name="apellidos"
              placeholder="Apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              className="w-full p-2 text-black"
            />
            <Input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 text-black"
            />
            <button
              type="submit"
              className="bg-white text-black px-4 py-2 rounded-md"
            >
              Enviar
            </button>
          </form>
        </div>
        {/* Cuarta columna */}
        <div className="flex-1 space-y-1 text-sm">
          <h2 className="text-xl">Descubre más:</h2>
          <ul className="space-y-1">
            <li>
              <Link href="/components">Componentes</Link>
            </li>
            <li>
              <Link href="/posts">Publicaciones</Link>
            </li>
            {/* Agrega más enlaces según sea necesario */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;