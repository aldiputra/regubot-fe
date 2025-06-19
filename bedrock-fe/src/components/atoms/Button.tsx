import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "text";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  variant = "primary",
  disabled = false,
  type = "button",
}) => {
  const baseClasses =
    "font-bold transition-colors duration-200 focus:outline-none";

  const variantClasses = {
    primary: "text-gray-600 underline hover:text-gray-800",
    secondary: "bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300",
    text: "text-gray-600 underline hover:text-gray-800",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
