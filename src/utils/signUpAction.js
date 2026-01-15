// src/actions/authActions.js
import { redirect } from "react-router-dom";
import { auth } from "../firebase"; // Import your firebase config
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setAuth } from "./auth";

const handleSignUpAction = async ({ request }) => {
  const formData = await request.formData();
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const password = formData.get("password");

  // 1. Validation
  if (!firstName || !lastName || !email || !password) {
    return { success: false, message: "All fields are required." };
  }

  if (password.length < 6) {
    return {
      success: false,
      message: "Password must be at least 6 characters.",
    };
  }

  try {
    // 2. Create the User in Firebase
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // 3. Save the Name to the User Profile
    // Firebase doesn't have "firstName" fields by default, so we combine them into displayName
    await updateProfile(user, {
      displayName: `${firstName} ${lastName}`,
    });

    console.log("Account created for:", user.email);

    // 4. Redirect to home/dashboard after success
    setAuth(true);
    return redirect("/");
  } catch (error) {
    // 5. Handle Errors (e.g., email already exists)
    let errorMessage = "Registration failed.";
    if (error.code === "auth/email-already-in-use") {
      errorMessage = "That email is already registered.";
    }
    return { success: false, message: errorMessage };
  }
};

export default handleSignUpAction;
