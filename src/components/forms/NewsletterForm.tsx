'use client';

import React, { useState } from "react";
import Input from "@/components/Layout/UI/StyledInput";
import StyledButton from "@/components/Layout/UI/StyledButton";
import { Toaster, toast } from "sonner";
import { BACK_URL } from "@/config/config";

interface NewsletterFormProps {
  onSuccess?: () => void; // Callback opcional que puede ejecutarse tras un envío exitoso
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ onSuccess }) => {
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
      if (onSuccess) onSuccess(); // Ejecuta el callback si está definido
    } else {
      toast.error("Error al suscribirse");
    }
  };

  return (
    <div className="p-6 rounded-lg shadow-md">
      <Toaster position="bottom-right" richColors />
      <h3 className="text-xl font-bold mb-4">Join our newsletter</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Apellidos"
          value={apellidos}
          onChange={(e) => setApellidos(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <StyledButton type="submit">Enviar</StyledButton>
      </form>
    </div>
  );
};

export default NewsletterForm;
