import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import GetStarted from "../pages/GetStarted";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import handleSignUpAction from "../utils/signUpAction";
import handleSignInAction from "../utils/sginInAction";
import { authLoader, protectedLoader } from "../services/protectedLoader";
import RootLayout from "../layouts/RootLayout/RootLayout";
import AuthLayout from "../layouts/authLayout/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: protectedLoader, // Protects home page - requires authentication
    children: [{ index: true, element: <Home /> }],
  },
  { path: "started", element: <GetStarted />, loader:authLoader }, // Public landing page
  {
    path: "auth",
    element: <AuthLayout />,
    loader: authLoader, // Redirects if already authenticated
    children: [
      {
        path: "signin",
        element: <SignIn />,
        action: handleSignInAction,
        loader: authLoader,
      },
      {
        path: "signup",
        element: <SignUp />,
        action: handleSignUpAction,
        loader: authLoader,
      },
    ],
  },
]);

export default router;
