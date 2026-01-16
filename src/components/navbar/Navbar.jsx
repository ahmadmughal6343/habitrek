import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { navbar, logo, btn } = styles;
  const navigate = useNavigate();
  return (
    <nav className={navbar}>
      <p className={logo}>HABiTREK</p>
      <div className="flex gap-2 md:gap-4">
        <button
          onClick={() => navigate("/auth/signin")}
          className={`${btn} bg-white border border-gray-300`}
        >
          <span>Sign In</span>
        </button>
        <button
          onClick={() => navigate("/auth/signup")}
          className={`${btn} bg-blue-600 text-white hover:bg-blue-700 hidden! sm:inline!`}
        >
          <span>Sign Up</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
