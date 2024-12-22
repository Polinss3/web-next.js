'use client';

import React, { useState } from "react";
import Input from "@/components/Layout/UI/StyledInput";
import StyledButton from "@/components/Layout/UI/StyledButton";
import { Toaster, toast } from "sonner";
import axios from "axios"; // Usa Axios para llamadas HTTP
import { BACK_URL } from "@/config/config";

interface NewsletterFormProps {
  onSuccess?: () => void; // Callback opcional que puede ejecutarse tras un envío exitoso
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ onSuccess }) => {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // Indicador de carga

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${BACK_URL}/api/newsletter`, {
        nombre,
        apellidos,
        email,
      });

      if (response.status === 200) {
        setNombre("");
        setApellidos("");
        setEmail("");
        toast.success("Suscripción exitosa");
        if (onSuccess) onSuccess(); // Ejecuta el callback si está definido
      }
    } catch (error) {
      console.error(error);
      toast.error("Error al suscribirse");
    } finally {
      setLoading(false); // Termina la carga
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
          disabled={loading} // Deshabilitar inputs durante la carga
        />
        <Input
          type="text"
          placeholder="Apellidos"
          value={apellidos}
          onChange={(e) => setApellidos(e.target.value)}
          required
          disabled={loading}
        />
        <Input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />
        <StyledButton type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </StyledButton>
      </form>
    </div>
  );
};

export default NewsletterForm;
