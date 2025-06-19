import React, { useState } from "react";
import { Card } from "@/components/atoms";
import {
  PanelHeader,
  ChatInput,
  WelcomeMessage,
  ChatMessage,
} from "@/components/molecules";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
}

const ChatbotContainer = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = (message: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text: message,
      isUser: true,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, newMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thank you for your message. I'm here to help with HR-related questions!",
        isUser: false,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <Card className="w-full max-w-2xl flex flex-col min-h-[600px] p-0">
      <PanelHeader
        title="Virtual HR Chatbot - ReguBot"
        icon={
          <img
            src="/logo/panel-header.svg"
            alt="Panel Header"
            width="24"
            height="24"
          />
        }
      />

      {/* Chat Container */}
      <main className="flex-1 flex flex-col justify-center items-center px-8 py-4">
        <div className="flex-1 w-full flex flex-col justify-center items-center">
          {messages.length === 0 ? (
            <WelcomeMessage />
          ) : (
            <div className="w-full space-y-4 max-h-96 overflow-y-auto">
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message.text}
                  isUser={message.isUser}
                  timestamp={message.timestamp}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Input Area */}
      <ChatInput onSendMessage={handleSendMessage} />
    </Card>
  );
};

export default ChatbotContainer;
