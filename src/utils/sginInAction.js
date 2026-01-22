import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { redirect } from "react-router-dom";
import { setAuth } from "./auth";

const handleSignInAction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  // 1. Basic Validation
  if (!email || !password) {
    return { success: false, message: "Please fill in all fields." };
  }

  try {
    // 2. Firebase Sign In
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    //Store user and isAuth in LocalStorage
    setAuth(true);
    localStorage.setItem(
      "user",
      JSON.stringify({
        email: user.email,
        name: user.displayName || "User",
      }),
    );
    // 3. Return redirect object
    throw redirect("/");
  } catch (error) {
    // Check if it's a redirect error first
    if (error instanceof Response) {
      throw error;
    }
    // 4. Handle Login Errors
    console.error("Login Error:", error.code);

    let errorMessage = "Invalid email or password.";

    if (error.code === "auth/user-not-found") {
      errorMessage = "No account found with this email.";
    } else if (error.code === "auth/wrong-password") {
      errorMessage = "Incorrect password.";
    } else if (error.code === "auth/too-many-requests") {
      errorMessage = "Too many failed attempts. Try again later.";
    } else if (error.code === "auth/invalid-email") {
      errorMessage = "Invalid email address.";
    }

    return { success: false, message: errorMessage };
  }
};

export default handleSignInAction;
