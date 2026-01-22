import { useState, useMemo, useEffect, useCallback } from "react";
import { ThemeContext } from "./contexts";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "system";
  });

  // Function to get system preference
  const getSystemTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };
  // Function to apply theme to document
  const applyTheme = useCallback((selectedTheme) => {
    const root = document.documentElement;

    // Remove existing theme classes
    root.classList.remove("light", "dark");

    // Determine actual theme to apply
    let actualTheme = selectedTheme;
    if (selectedTheme === "system") {
      actualTheme = getSystemTheme();
    }

    // Apply theme class
    root.classList.add(actualTheme);

    // Set data-theme attribute for CSS modules
    root.setAttribute("data-theme", actualTheme);
  }, []);

  // Initialize theme on mount
  useEffect(() => {
    applyTheme(theme);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [theme, applyTheme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Memoizing the value prevents unnecessary re-renders of all consumers
  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
