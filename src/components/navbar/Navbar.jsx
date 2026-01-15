import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { navbar, logo, btn } = styles;
  return (
    <nav className={navbar}>
      <p className={logo}>HABiTREK</p>
      <div className="flex gap-2 md:gap-4">
        <Link to="/auth/signin">
          <button className={`${btn} bg-white border border-gray-300`}>
            <span>Sign In</span>
          </button>
        </Link>
        <Link to="/auth/signup">
          <button
            className={`${btn} bg-blue-600 text-white hover:bg-blue-700 hidden! sm:inline!`}
          >
            <span>Sign Up</span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
