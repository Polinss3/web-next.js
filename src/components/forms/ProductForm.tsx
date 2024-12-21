"use client";

import React, { useState } from "react";
import { BACK_URL } from "@/config/config";
import StyledButton from "@/components/Layout/UI/StyledButton";
import StyledInput from "@/components/Layout/UI/StyledInput";
import { Toaster, toast } from "sonner";

const ProductForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState<number | "">("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(`${BACK_URL}/submit-product-form/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          name,
          email,
          quantity: quantity.toString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      // Mostrar notificación de éxito
      toast.success("Formulario enviado correctamente");

      // Limpiar los campos con un retraso para evitar conflicto en el renderizado
      setTimeout(() => {
        setName("");
        setEmail("");
        setQuantity("");
      }, 300); // 300 ms es suficiente
    } catch (error) {
      // Mostrar notificación de error
      toast.error("Error al enviar el formulario. Inténtalo de nuevo.");
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <div className="bg-black p-6 rounded-lg shadow-md text-white">
      <Toaster position="bottom-right" richColors />
      <h3 className="text-xl font-bold mb-4">Haz tu pedido</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            Nombre
          </label>
          <StyledInput
            type="text"
            id="name"
            name="name"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Correo Electrónico
          </label>
          <StyledInput
            type="email"
            id="email"
            name="email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-sm font-medium">
            Cantidad
          </label>
          <StyledInput
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            placeholder="Número de unidades"
            value={quantity}
            onChange={(e) =>
              setQuantity(
                e.target.value === "" ? "" : parseInt(e.target.value, 10)
              )
            }
            required
          />
        </div>
        <StyledButton type="submit" className="w-full">
          Enviar Pedido
        </StyledButton>
      </form>
    </div>
  );
};

export default ProductForm;
