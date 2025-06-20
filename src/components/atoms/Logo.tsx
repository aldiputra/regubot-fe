import React from "react";
import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  type?: "default" | "login";
}

const Logo: React.FC<LogoProps> = ({
  width = 40,
  height = 40,
  className = "",
  type = "default",
}) => {
  return (
    <Image
      src={type === "login" ? "/logo/ReguIconWhite.svg" : "/logo/Regubot-Logo.svg"}
      alt="ReguBot Logo"
      width={width}
      height={height}
      priority
      className={className}
    />
  );
};

export default Logo;
