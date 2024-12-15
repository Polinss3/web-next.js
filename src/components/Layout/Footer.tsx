'use client';
import Link from "next/link";
import React, { useState } from "react";
import {
  SITE_NAME,
  SITE_SLOGAN,
  INSTAGRAM_PROFILE,
  FACEBOOK_PROFILE,
  XTWITTER_PROFILE,
  LINKEDIN_PROFILE,
  TIKTOK_PROFILE,
  BACK_URL,
} from "@/config/config";
import Input from "@/components/Layout/UI/Input";
import StyledButton from "@/components/Layout/UI/StyledButton";
import { Toaster, toast } from 'sonner';

export default function Footer() {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(`${BACK_URL}/api/newsletter`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, apellidos, email }),
    });

    if (res.ok) {
      setNombre("");
      setApellidos("");
      setEmail("");
      toast.success("Suscripción exitosa");
    } else {
      toast.error("Error al suscribirse");
    }
  };

  return (
    <footer className="bg-black text-white py-10 font-sans">
      <Toaster position="bottom-right" richColors />
      <div className="max-w-screen mx-auto flex justify-between space-x-8 px-[10%]">
        {/* Primera columna */}
        <div className="flex-1 space-y-5">
          <h2 className="text-xl">{SITE_NAME}</h2>
          <p className="text-sm">{SITE_SLOGAN}</p>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/terminos-y-condiciones">Términos y condiciones</Link>
            </li>
            <li>
              <Link href="/politica-de-privacidad">Política de privacidad</Link>
            </li>
            <li>
              <Link href="/politica-de-cookies">Política de cookies</Link>
            </li>
          </ul>
        </div>
        {/* Segunda columna */}
        <div className="flex-1 space-y-5">
          <h2 className="text-xl">Contact Us</h2>
          <ul className="space-y-1 text-sm">
            <li>
              <a href={INSTAGRAM_PROFILE} target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
            <li>
              <a href={XTWITTER_PROFILE} target="_blank" rel="noopener noreferrer">X/Twitter</a>
            </li>
            <li>
              <a href={LINKEDIN_PROFILE} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li>
              <a href={FACEBOOK_PROFILE} target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
            <li>
              <a href={TIKTOK_PROFILE} target="_blank" rel="noopener noreferrer">TikTok</a>
            </li>
          </ul>
        </div>
        {/* Tercera columna */}
        <div className="flex-1">
          <h2 className="text-xl">Join our newsletter</h2>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Apellidos"
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <StyledButton type="submit">
              Enviar
            </StyledButton>
          </form>
        </div>
        {/* Cuarta columna */}
        <div className="flex-1 space-y-1 text-sm">
          <h2 className="text-xl">Discover more: </h2>
          <ul className="space-y-1">
            <li>
              <Link href="/components">Components</Link>
            </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
