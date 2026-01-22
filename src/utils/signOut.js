import { getAuth, signOut } from "firebase/auth";
import { setAuth } from "./auth";

const handleSignOut = async (navigate) => {
  const auth = getAuth();
  try {
    await signOut(auth);
    // After sign-out, update your local state
    setAuth(false);
    localStorage.removeItem("user");
    navigate("/started");
  } catch (error) {
    console.error("Error signing out:", error.message);
  }
};
export default handleSignOut;
