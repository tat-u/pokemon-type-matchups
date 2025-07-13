import { isAvailableTheme, Theme } from "@/models/themes";
import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme | null>(null);

  // Load the theme from localStorage if it exists
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === null) {
      return;
    } else if (isAvailableTheme(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []); // Executed only once on mount

  return theme;
};
