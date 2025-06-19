import React from "react";
import { Logo } from "@/components/atoms";

function ReguBotLogo({ className = "w-20 h-20" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="32" fill="none" />
      <path d="M32 12c-8 0-14 6-14 14v12c0 8 6 14 14 14s14-6 14-14V26c0-8-6-14-14-14Zm0 2c6.627 0 12 5.373 12 12v12c0 6.627-5.373 12-12 12s-12-5.373-12-12V26c0-6.627 5.373-12 12-12Zm-2 6v4h4v-4h-4Zm-6 6v4h4v-4h-4Zm12 0v4h4v-4h-4Zm-6 6v4h4v-4h-4Zm-6 6v4h4v-4h-4Zm12 0v4h4v-4h-4Zm-6 6v4h4v-4h-4Z" fill="#fff"/>
    </svg>
  );
}

export default function LoginContainer() {
  return (
    <div className="flex w-full max-w-3xl min-h-[540px] rounded-2xl shadow-xl overflow-hidden bg-white mx-auto my-16">
      {/* Left: Gold background with logo and pattern */}
      <div className="hidden md:flex flex-col items-center justify-center w-1/2 bg-[#b48a1e] relative p-0">
        <div className="absolute inset-0 opacity-20 z-0" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' viewBox=\'0 0 200 200\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M100 0L200 200H0L100 0Z\' fill=\'%23fff\' fill-opacity=\'0.08\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat'}}></div>
        <div className="flex flex-col items-center justify-center w-full h-full z-10">
          <Logo className="!w-20 !h-20 !mb-6" type="login" />
          <span className="text-white text-2xl font-semibold">ReguBot</span>
        </div>
      </div>
      {/* Right: Login form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white p-10">
        <div className="w-full max-w-xs">
          <h2 className="text-2xl font-bold text-center mb-2">WELCOME</h2>
          <p className="text-center text-black mb-6">Sign in to your account!</p>
          <form className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-bold mb-1 text-black" htmlFor="username">Username</label>
              <input id="username" type="text" placeholder="Insert Username" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-700 text-black bg-white" />
            </div>
            <div>
              <label className="block text-xs font-bold mb-1 text-black" htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="Insert Password" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-700 text-black bg-white" />
            </div>
            <a href="#" className="text-xs text-yellow-900 text-center hover:underline mt-1 mb-2">Forgot Password</a>
            <button type="submit" className="mt-1 bg-[#d4a13a] hover:bg-[#b48a1e] text-white font-bold rounded-md py-2 text-lg transition w-full">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
} 