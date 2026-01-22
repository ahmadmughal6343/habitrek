import { useSyncExternalStore } from "react";
import useTheme from "./useTheme";

// Helper to check the system preference
const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

// A subscription helper for the system theme
const subscribeToSystemTheme = (callback) => {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
};

const useEffectiveTheme = () => {
  const { theme } = useTheme();

  // 1. Listen to the system theme as an external store
  const systemTheme = useSyncExternalStore(
    subscribeToSystemTheme,
    getSystemTheme,
    () => "light", // Server-side fallback
  );

  // 2. Derive the value directly during render.
  // No useState, no useEffect, no cascading renders.
  const effectiveTheme = theme === "system" ? systemTheme : theme;

  return effectiveTheme;
};

export default useEffectiveTheme;
