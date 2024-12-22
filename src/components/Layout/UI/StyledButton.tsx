// components/StyledButton.tsx
import React from 'react';
import { Toaster, toast } from 'sonner';

interface StyledButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean; // Añadido para deshabilitar el botón si es necesario
}

const StyledButton: React.FC<StyledButtonProps> = ({
  type = 'button',
  onClick,
  children,
  className = '',
  disabled = false, // Por defecto no está deshabilitado
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled} // Maneja el estado de deshabilitación
    className={`flex justify-center items-center bg-white text-primary px-5 py-2 mt-4 rounded-md no-underline ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
  >
    {children}
  </button>
);

const Example = () => {
  const handleSubmit = async () => {
    toast('Enviando datos...', { duration: 4000 }); // Mostrar un toast mientras se envían los datos
    try {
      // Simula una espera para enviar datos
      await new Promise(resolve => setTimeout(resolve, 3000));
      toast.success('Datos enviados con éxito!'); // Toast de éxito
    } catch (error) {
      toast.error('Error al enviar los datos'); // Toast de error
    }
  };

  return (
    <div>
      <Toaster position="bottom-right" richColors />
      <StyledButton onClick={handleSubmit} type="button">
        Enviar
      </StyledButton>
    </div>
  );
};

export default StyledButton;
