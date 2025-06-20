import React from "react";
import { Logo, Title } from "@/components/atoms";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-sm px-8 py-4">
      <div className="flex items-center gap-3">
        <Logo />
        <Title>ReguBot</Title>
      </div>
    </header>
  );
};

export default Header;
