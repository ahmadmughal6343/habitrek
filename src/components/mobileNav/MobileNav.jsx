import React from "react";
import useEffectiveTheme from "../../hooks/useEffectiveTheme";
import { NavLink } from "react-router-dom";
import { BarChart, Calendar, CheckSquare, Home, Target } from "lucide-react";
import styles from "./MobileNav.module.css";

const MobileNav = () => {
  const effectiveTheme = useEffectiveTheme();
  const isDark = effectiveTheme === "dark";

  const menuItems = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/habits", icon: Target, label: "Habits" },
    { to: "/todos", icon: CheckSquare, label: "Todos" },
    { to: "/daily-routine", icon: Calendar, label: "Routine" },
    { to: "/analytics", icon: BarChart, label: "Analytics" },
  ];

  return (
    <nav
      className={`fixed bottom-0 w-full sm:hidden px-2 py-3 ${isDark ? `${styles.navContainerDark}` : `${styles.navContainer}`}`}
    >
      <ul className={styles.navList}>
        {menuItems.map((item) => (
          <li key={item.label} className={styles.navItem}>
            <NavLink
              to={item.to}
              className={({ isActive }) => `
                ${styles.navLink} ${isActive && styles.navLinkActive}
                ${
                  isDark
                    ? isActive
                      ? "text-white"
                      : "text-stone-400"
                    : isActive
                      ? "text-blue-700"
                      : "text-zinc-500"
                }
              `}
            >
              {({ isActive }) => (
                <>
                  <div className={styles.iconContainer}>
                    <item.icon
                      className={`${
                        isActive ? "scale-110" : ""
                      } transition-transform duration-200`}
                    />
                  </div>
                  <span
                    className={`${styles.label} ${isActive ? styles.labelActive : ""}`}
                  >
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
