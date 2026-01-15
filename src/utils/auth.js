// utils/auth.js

// Check if user is authenticated by reading from localStorage
export const checkAuth = () => {
  const authStatus = localStorage.getItem("isAuth");
  return authStatus === "true";
};

// Set authentication status in localStorage
export const setAuth = (status) => {
  localStorage.setItem("isAuth", status.toString());
};
