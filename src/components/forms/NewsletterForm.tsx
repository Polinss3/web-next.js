'use client';

import React, { useState } from "react";
import Input from "@/components/Layout/UI/StyledInput";
import StyledButton from "@/components/Layout/UI/StyledButton";
import { Toaster, toast } from "sonner";
import axios from "axios";
import { BACK_URL } from "@/config/config";

interface NewsletterFormProps {
  onSuccess?: () => void;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ onSuccess }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${BACK_URL}/api/newsletter`, {
        name,
        surname,
        email,
      });

      if (response.status === 200) {
        setName("");
        setSurname("");
        setEmail("");
        toast.success("Suscripción exitosa");
        if (onSuccess) onSuccess();
      }
    } catch (error) {
      console.error(error);
      toast.error("Error al suscribirse");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 rounded-lg shadow-md">
      <Toaster position="bottom-right" richColors />
      <h3 className="text-xl font-bold mb-4">Join our newsletter</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={loading}
        />
        <Input
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
          disabled={loading}
        />
        <Input
          type="email"
          placeholder="Email"
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
