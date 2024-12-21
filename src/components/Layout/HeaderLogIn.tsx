'use client';

import Image from "next/image";
import Link from "next/link";
import { SITE_NAME, SITE_LOGO } from "@/config/config";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 h-[90px] bg-[--background1] z-50 px-4 md:px-6 shadow-lg">
      <nav className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Logo o Nombre de la Web */}
        <div className="flex items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-[--neutro1] hidden md:block"
          >
            {SITE_NAME}
          </Link>
          <Link href="/" className="md:hidden">
            <div className="h-12 w-12 relative">
              <Image
                src={SITE_LOGO}
                alt="Logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </Link>
        </div>

        {/* Navegación principal */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-[--neutro1] hover:text-[--primary]">
            Home
          </Link>
          <Link href="/about" className="text-[--neutro1] hover:text-[--primary]">
            About Us
          </Link>
          <Link href="/products" className="text-[--neutro1] hover:text-[--primary]">
            Products
          </Link>
          <Link href="/contact" className="text-[--neutro1] hover:text-[--primary]">
            Contact
          </Link>
        </div>

        {/* Botones Login/Sign Up en escritorio */}
        <div className="hidden md:flex space-x-4">
          <button className="text-[--primary] border border-[--primary] px-4 py-2 rounded-lg hover:bg-[--primary] hover:text-white">
            Login
          </button>
          <button className="bg-[--primary] text-white px-4 py-2 rounded-lg hover:bg-[--primary-dark]">
            Sign Up
          </button>
        </div>

        {/* Botón del menú en móvil */}
        <button
          className="text-gray-500 w-10 h-10 relative focus:outline-none bg-[--background1] md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                isMenuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                isMenuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
      </nav>

      {/* Menú desplegable en móvil */}
      {isMenuOpen && (
        <div className="flex flex-col items-center bg-[--background1] text-[--neutro1] space-y-4 py-4 md:hidden">
          <Link href="/" className="hover:text-[--primary]" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="hover:text-[--primary]" onClick={() => setIsMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/products" className="hover:text-[--primary]" onClick={() => setIsMenuOpen(false)}>
            Products
          </Link>
          <Link href="/contact" className="hover:text-[--primary]" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          <button
            className="text-[--primary] border border-[--primary] px-4 py-2 rounded-lg hover:bg-[--primary] hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </button>
          <button
            className="bg-[--primary] text-white px-4 py-2 rounded-lg hover:bg-[--primary-dark]"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign Up
          </button>
        </div>
      )}
    </header>
  );
}
