import {
  PanelLeft,
  PanelRight,
  Home,
  Target,
  CheckSquare,
  Calendar,
  BarChart,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import styles from "./Asidebar.module.css";
import { useContext } from "react";
import { SettingsModalContext } from "../../contexts/contexts";
import useEffectiveTheme from "../../hooks/useEffectiveTheme";

const Asidebar = ({ collapse, setCollapse }) => {
  const { setShowSettingModal } = useContext(SettingsModalContext);

  const effectiveTheme = useEffectiveTheme();
  const isDark = effectiveTheme === "dark";

  const menuItems = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/habits", icon: Target, label: "Habits" },
    { to: "/todos", icon: CheckSquare, label: "Todos" },
    { to: "/daily-routine", icon: Calendar, label: "Daily Routine" },
    { to: "/analytics", icon: BarChart, label: "Analytics" },
  ];

  return (
    <>
      <div
        className={`
        h-full shadow-xl
        transition-all duration-300 ease-in-out
        ${collapse ? "w-20" : "w-64"}
        ${styles.asidebar} 
        ${collapse ? styles.collapsed : ""}
        ${
          isDark
            ? "bg-stone-900 border-r border-stone-700"
            : "bg-white border-r border-stone-200"
        }
      `}
      >
        <div className="h-full p-4">
          <div className="h-full flex flex-col justify-between">
            <div
              className={`flex items-center mb-8 pb-4 ${collapse ? "justify-center" : ""} ${
                isDark
                  ? "border-b border-stone-700"
                  : "border-b border-stone-200"
              }`}
            >
              <button
                className={`p-2 rounded-lg transition-all duration-200 cursor-pointer flex items-center justify-center ${
                  isDark
                    ? "text-gray-100 hover:text-white hover:bg-stone-700/50"
                    : "text-stone-500 hover:text-stone-800 hover:bg-stone-100"
                }`}
                onClick={() => setCollapse(!collapse)}
                aria-label={collapse ? "Expand sidebar" : "Collapse sidebar"}
              >
                {collapse ? (
                  <PanelRight className="w-5 h-5" />
                ) : (
                  <PanelLeft className="w-5 h-5" />
                )}
              </button>
            </div>

            <nav className="flex-1">
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.label} className="relative">
                    <NavLink
                      to={item.to}
                      className={({ isActive }) => `
                      flex items-center p-3 rounded-lg transition-all duration-200 
                      ${collapse ? "justify-center" : ""}
                      ${styles.navLink}
                      ${
                        isDark
                          ? isActive
                            ? "bg-stone-800 text-stone-100 border-l-2 border-blue-500"
                            : "text-zinc-400 hover:text-slate-200 hover:bg-stone-800/50"
                          : isActive
                            ? "bg-stone-200 text-slate-900 border-l-2 border-blue-600"
                            : "text-stone-600 hover:text-stone-900 hover:bg-stone-200/70"
                      }
                    `}
                    >
                      <item.icon className="w-5 h-5 shrink-0" />
                      {!collapse && (
                        <span className="ml-3 truncate font-medium">
                          {item.label}
                        </span>
                      )}
                      {collapse && (
                        <span
                          className={`${styles.tooltip} ${
                            isDark
                              ? "bg-slate-800 border border-slate-700"
                              : "bg-white border border-stone-200"
                          }`}
                        >
                          {item.label}
                        </span>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <hr
              className={`my-4 ${
                isDark ? "border-stone-700" : "border-stone-200"
              }`}
            />

            <button
              type="button"
              className={`${styles.settingBtn} ${collapse ? "justify-center" : ""} ${
                isDark
                  ? "text-zinc-300 hover:text-white hover:bg-stone-800/80"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-200"
              }`}
              aria-label={collapse ? "Settings" : undefined}
              title={collapse ? "Settings" : ""}
              onClick={() => setShowSettingModal(true)}
            >
              <Settings className={`${styles.settingIcon}`} />
              {!collapse && (
                <span className={`${styles.settingText} font-medium`}>
                  Settings
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Asidebar;
