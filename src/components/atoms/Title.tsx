import React from "react";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Title: React.FC<TitleProps> = ({
  children,
  className = "",
  as: Component = "h1",
}) => {
  return (
    <Component className={`text-2xl font-bold text-gray-800 ${className}`}>
      {children}
    </Component>
  );
};

export default Title;
