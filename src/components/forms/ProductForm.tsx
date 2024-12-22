"use client";

import React, { useState, useEffect } from "react";
import Input from "@/components/Layout/UI/StyledInput";
import StyledButton from "@/components/Layout/UI/StyledButton";
import { Toaster, toast } from "sonner";
import { BACK_URL } from "@/config/config";

const ProductForm: React.FC<{ productSlug: string }> = ({ productSlug }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    quantity: 1,
  });
  const [loading, setLoading] = useState(false);

  // Guardamos la URL de la página actual
  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPageUrl(window.location.href);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Incluimos la URL de la página en la petición
    const requestData = {
      ...formData,
      product_slug: productSlug,
      page_url: pageUrl,
    };

    try {
      // toast("Enviando datos...", { duration: 2000 });
      console.log("Enviando datos...", requestData);

      const response = await fetch(`${BACK_URL}/api/product-orders/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        // toast.success("Formulario enviado con éxito");
        console.log("Formulario enviado con éxito");
        setFormData({ nombre: "", apellidos: "", email: "", quantity: 1 });
      } else {
        const errorData = await response.json();
        const errorMessage = Array.isArray(errorData.detail)
          ? errorData.detail.map((err: any) => err.msg).join(", ")
          : errorData.detail;
        console.error(`Error: ${errorMessage}`);
        // toast.error(`Error: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Ocurrió un error al enviar el formulario:", error);
      // toast.error("Error inesperado al enviar el formulario");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 rounded-lg shadow-md">
      <Toaster position="bottom-right" richColors />
      <h3 className="text-xl font-bold mb-4">Orden de Producto</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          name="nombre"
          placeholder="Nombre del cliente"
          value={formData.nombre}
          onChange={handleInputChange}
          required
          disabled={loading}
        />
        <Input
          type="text"
          name="apellidos"
          placeholder="Apellido del cliente"
          value={formData.apellidos}
          onChange={handleInputChange}
          required
          disabled={loading}
        />
        <Input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleInputChange}
          required
          disabled={loading}
        />
        <Input
          type="number"
          name="quantity"
          placeholder="Cantidad"
          value={formData.quantity}
          onChange={handleInputChange}
          min={1}
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

export default ProductForm;
