import { FaBell } from "react-icons/fa";
import useShow from "../../hooks/useShow";
import { logo, profile, navContainer, bell } from "./Header.module.css";
import { Suspense, useContext } from "react";
import ProfileModal from "../../models/profileModel/ProfileModal";
import { SettingsModalContext } from "../../contexts/contexts";
import SettingModal from "../../models/settingModel/SettingModal";
import TimeDate from "../Time&Date";
import useEffectiveTheme from "../../hooks/useEffectiveTheme";

const Header = () => {
  const { show, setShow } = useShow();
  const { showSettingModal } = useContext(SettingsModalContext);
  const effectiveTheme = useEffectiveTheme();

  const isDark = effectiveTheme === "dark";
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <header
        className={`${navContainer} ${isDark ? "bg-stone-900" : "bg-white"}`}
      >
        <h3 className={logo}>
          <span>HABiTREK</span>
        </h3>

        {/* Desktop/Tablet Time Display */}
        <div className="hidden md:flex justify-center items-center">
          <TimeDate />
        </div>

        <div className="flex justify-end items-center">
          <div className="flex justify-center items-center gap-4 sm:gap-6">
            <div
              onClick={() => setShow(!show)}
              className={`${profile} border-2 ${
                isDark
                  ? "bg-zinc-800 border-slate-700 text-slate-200"
                  : "bg-stone-100 border-blue-600 text-slate-900"
              }`}
            >
              {user.name[0]}
            </div>

            {show && <ProfileModal setShow={setShow} />}

            <button
              className="relative focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-full transition-all"
              aria-label="Notifications"
            >
              <FaBell
                className={`${bell} ${
                  isDark
                    ? "text-slate-300 bg-slate-800/30 border-slate-700 hover:bg-slate-700/40"
                    : "text-stone-600 bg-white border-stone-300 hover:bg-stone-50"
                }`}
              />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>
      </header>

      <Suspense fallback={null}>
        {showSettingModal && <SettingModal />}
      </Suspense>
    </>
  );
};

export default Header;
