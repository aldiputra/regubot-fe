import React from "react";

interface ChatMessageProps {
  message: string;
  isUser?: boolean;
  timestamp?: string;
  className?: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  isUser = false,
  timestamp,
  className = "",
}) => {
  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      } ${className}`}
    >
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
          isUser ? "bg-[#D4A855] text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        <p className="text-sm">{message}</p>
        {timestamp && (
          <p
            className={`text-xs mt-1 ${
              isUser ? "text-yellow-100" : "text-gray-500"
            }`}
          >
            {timestamp}
          </p>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
