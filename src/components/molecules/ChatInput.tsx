import React, { useState } from "react";
import { Input, Button } from "@/components/atoms";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

const ChatInput: React.FC<ChatInputProps> = ({
  onSendMessage,
  placeholder = "Type your message...",
  disabled = false,
  className = "",
}) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex items-center border-t px-8 py-4 gap-2 ${className}`}
    >
      <Input
        type="text"
        placeholder={placeholder}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={disabled}
      />
      <Button
        type="submit"
        variant="secondary"
        disabled={disabled || !message.trim()}
        className="bg-[#D4A855] text-white px-6 py-2 rounded font-semibold hover:bg-[#C19A4A] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send
      </Button>
    </form>
  );
};

export default ChatInput;
