// loaders/protectedLoader.js
import { redirect } from "react-router-dom";
import { checkAuth } from "../utils/auth";

// Loader for protected routes - redirects to login if not authenticated
export const protectedLoader = () => {
  if (!checkAuth()) {
    return redirect("/started"); // Redirect to login page
  }
  return null; // User is authenticated, allow access
};

// Loader for auth routes (like login) - redirects to home if already authenticated
export const authLoader = () => {
  if (checkAuth()) {
    return redirect("/"); // Redirect to home if already logged in
  }
  return null; // User not authenticated, allow access to auth page
};
