"use client";
import React, { useState } from "react";
import AdminContainer from "@/components/AdminContainer";
import ChatbotContainer from "@/components/ChatbotContainer";
import { Header } from "@/components/organisms";
import { Sidebar } from "@/components/molecules";

export default function Home() {
  const [activeContainer, setActiveContainer] = useState<"admin" | "chatbot">(
    "admin"
  );
  console.log(activeContainer, "activeContainer");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <Header />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar
          activeContainer={activeContainer}
          onContainerChange={setActiveContainer}
        />

        {/* Main Card */}
        <div className="flex flex-1 justify-center items-center py-8">
          {activeContainer === "admin" ? (
            <AdminContainer />
          ) : (
            <ChatbotContainer />
          )}
        </div>
      </div>
    </div>
  );
}
