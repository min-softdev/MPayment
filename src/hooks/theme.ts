"use client";
import { useState, useEffect } from "react";

export const useTheme = (props?: any) => {
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    let tmpTheme = "light";
    if (typeof window !== "undefined") {
      tmpTheme = window.localStorage.getItem("theme") || "light";
    }
    setCurrentTheme(tmpTheme);
  }, []);

  const handleTheme = (theme: string) => {
    setCurrentTheme(theme);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", theme);
    }
    document.documentElement.setAttribute("data-theme", theme);
  };

  return {
    handleTheme,
    currentTheme,
  };
};
