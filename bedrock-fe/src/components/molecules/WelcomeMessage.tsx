import React from "react";

interface WelcomeMessageProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({
  title = "Welcome to HR Assistant",
  subtitle = "How can I help you today?",
  className = "",
}) => {
  return (
    <div className={`text-center mt-32 ${className}`}>
      <span className="text-[#D4A855] text-lg font-semibold">{title}</span>
      <div className="text-gray-500 mt-2 text-sm">{subtitle}</div>
    </div>
  );
};

export default WelcomeMessage;
