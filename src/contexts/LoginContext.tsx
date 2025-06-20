"use client";
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface LoginContextType {
  isAuth: boolean;
  login: () => void;
  logout: () => void;
}

const LoginContext = createContext<LoginContextType | undefined>(undefined);

export function LoginProvider({ children }: { children: ReactNode }) {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    logout();
    if (typeof window !== "undefined") {
      setIsAuth(window.localStorage.getItem("regubot-auth") === "1");
    }
  }, []);

  const login = () => {
    setIsAuth(true);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("regubot-auth", "1");
    }
  };

  const logout = () => {
    setIsAuth(false);
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("regubot-auth");
    }
  };

  return (
    <LoginContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
}

export function useLogin() {
  const context = useContext(LoginContext);
  if (!context) throw new Error("useLogin must be used within a LoginProvider");
  return context;
} 