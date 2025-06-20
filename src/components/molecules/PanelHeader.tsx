import React from "react";
import { Title } from "@/components/atoms";

interface PanelHeaderProps {
  title: string;
  icon?: React.ReactNode;
  className?: string;
}

const PanelHeader: React.FC<PanelHeaderProps> = ({
  title,
  icon,
  className = "",
}) => {
  return (
    <>
      <header className={`flex items-center gap-2 px-8 py-4 ${className}`}>
        {icon && <span className="rounded p-2">{icon}</span>}
        <Title as="h1" className="text-xl">
          {title}
        </Title>
      </header>
      <div className="h-[1px] bg-[#ABABAB] mx-8" />
    </>
  );
};

export default PanelHeader;
