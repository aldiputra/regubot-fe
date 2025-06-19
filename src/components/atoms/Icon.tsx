import React from "react";

interface IconProps {
  children: React.ReactNode;
  width?: number;
  height?: number;
  className?: string;
  viewBox?: string;
}

const Icon: React.FC<IconProps> = ({
  children,
  width = 24,
  height = 24,
  className = "",
  viewBox = "0 0 24 24",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {children}
    </svg>
  );
};

export default Icon;
