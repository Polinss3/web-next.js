"use client";

import React, { useState, useEffect } from "react";
import Input from "@/components/Layout/UI/StyledInput";
import StyledButton from "@/components/Layout/UI/StyledButton";
import StyledSelect from "@/components/Layout/UI/StyledSelect";
import StyledTextArea from "@/components/Layout/UI/StyledTextArea";
import { Toaster, toast } from "sonner";
import { BACK_URL } from "@/config/config";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    topic: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [pageUrl, setPageUrl] = useState("");

  // Obtener la URL de la página para almacenarla junto con el formulario
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPageUrl(window.location.href);
    }
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Incluimos la URL de la página en la petición
    const requestData = {
      ...formData,
      page_url: pageUrl,
    };

    try {
      const response = await fetch(`${BACK_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        toast.success("Contact form submitted successfully!");
        // Limpia los campos del formulario
        setFormData({
          name: "",
          surname: "",
          email: "",
          topic: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        const errorMessage = Array.isArray(errorData.detail)
          ? errorData.detail.map((err: any) => err.msg).join(", ")
          : errorData.detail || "Unknown error";
        toast.error(`Error: ${errorMessage}`);
      }
    } catch (error) {
      console.error(
        "Unexpected error while submitting the contact form:",
        error
      );
      toast.error("Unexpected error while submitting the contact form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 rounded-lg shadow-md">
      <Toaster position="bottom-right" richColors />
      <h3 className="text-xl font-bold mb-4">Contact Us</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          required
          disabled={loading}
        />

        {/* Surname */}
        <Input
          type="text"
          name="surname"
          placeholder="Surname"
          value={formData.surname}
          onChange={handleInputChange}
          required
          disabled={loading}
        />

        {/* Email */}
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
          disabled={loading}
        />

        {/* Topic (Dropdown) */}
        <label htmlFor="topic" className="block mb-1 font-medium">
          Topic
        </label>
        <StyledSelect
          id="topic"
          name="topic"
          value={formData.topic}
          onChange={handleInputChange}
          required
          disabled={loading}
        >
          <option className="bg-black" value="" disabled>
            Select a topic
          </option>
          <option className="bg-black" value="General Inquiry">
            General Inquiry
          </option>
          <option className="bg-black" value="Support Request">
            Support Request
          </option>
          <option className="bg-black" value="Billing">
            Billing
          </option>
          <option className="bg-black" value="Feedback">
            Feedback
          </option>
        </StyledSelect>

        {/* Message (TextArea) */}
        <label htmlFor="message" className="block mb-1 font-medium">
          Message
        </label>
        <StyledTextArea
          id="message"
          name="message"
          placeholder="Write your message here..."
          value={formData.message}
          onChange={handleInputChange}
          required
          disabled={loading}
        />

        {/* Submit Button */}
        <StyledButton type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </StyledButton>
      </form>
    </div>
  );
};

export default ContactForm;
