'use client';
import Image from "next/image";
import Link from "next/link";
import { SITE_NAME, SITE_LOGO } from "@/config/config";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 h-[90px] bg-[--background1] z-50 px-4 md:px-6">
      <nav className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Nombre del sitio o logo */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-2xl font-bold text-[--neutro1] hidden md:block">
            {SITE_NAME}
          </Link>
          <Link href="/" className="block md:hidden">
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

        {/* Menú principal */}
        <div
          className={`absolute top-[90px] left-0 right-0 bg-[--background1] shadow-lg rounded-b-lg px-4 py-6 flex flex-col space-y-4 md:static md:top-auto md:left-auto md:right-auto md:bg-transparent md:shadow-none md:rounded-none md:flex md:flex-row md:items-center md:space-y-0 md:space-x-6 ${
            menuOpen ? "block" : "hidden"
          } md:flex`}
        >
          <Link href="/" className="text-[--neutro1] hover:text-[--neutro2]">
            Home
          </Link>
          <Link href="/about" className="text-[--neutro1] hover:text-[--neutro2]">
            About Us
          </Link>
          <Link href="/products" className="text-[--neutro1] hover:text-[--neutro2]">
            Products
          </Link>
          <Link href="/contact" className="text-[--neutro1] hover:text-[--neutro2]">
            Contact
          </Link>
        </div>

        {/* Imagen */}
        <div className="hidden md:block h-12 w-12 relative">
          <Image
            src={SITE_LOGO}
            alt="Logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Botón hamburguesa para pantallas pequeñas */}
        <button
          className="text-gray-500 w-10 h-10 relative focus:outline-none bg-transparent md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                menuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                menuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
      </nav>
    </header>
  );
}
