import React from "react";

const ChatbotContainer = () => {
  return (
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg flex flex-col min-h-[600px]">
      {/* Card Header */}
      <header className="flex items-center gap-2 px-8 py-4 rounded-t-2xl">
        <img
          src="/logo/panel-header.svg"
          alt="Panel Header"
          width="24"
          height="24"
        />
        <h1 className="text-xl font-bold text-gray-800">
          Virtual HR Chatbot - Chatbot
        </h1>
      </header>
      <div className="h-[1px] bg-[#ABABAB] mx-8" />

      {/* Chat Container */}
      <main className="flex-1 flex flex-col justify-center items-center px-8 py-4">
        <div className="flex-1 w-full flex flex-col justify-center items-center">
          <div className="text-center mt-32">
            <span className="text-[#D4A855] text-lg font-semibold">
              Welcome to HR Assistant
            </span>
            <div className="text-gray-500 mt-2 text-sm">
              How can I help you today?
            </div>
          </div>
        </div>
      </main>
      {/* Input Area */}
      <form className="flex items-center border-t px-8 py-4 gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D4A855]"
        />
        <button
          type="submit"
          className="bg-[#D4A855] text-white px-6 py-2 rounded font-semibold"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatbotContainer;
