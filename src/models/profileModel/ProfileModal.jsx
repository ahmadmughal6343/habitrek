import React, { useContext } from "react";
import styles from "./ProfileModel.module.css";
import { Edit, Settings, X } from "lucide-react";
import { ImExit } from "react-icons/im";
import handleSignOut from "../../utils/signOut";
import { useNavigate } from "react-router-dom";
import { SettingsModalContext } from "../../contexts/contexts";
import useEffectiveTheme from "../../hooks/useEffectiveTheme";

const ProfileModal = ({ setShow }) => {
  const { setShowSettingModal } = useContext(SettingsModalContext);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  // Get effective theme for styling
  const effectiveTheme = useEffectiveTheme();
  const isDark = effectiveTheme === "dark";

  return (
    <div
      className={`${styles.dropdownModal} ${
        isDark ? "bg-stone-900" : "bg-white"
      } rounded-xl shadow-2xl`}
    >
      <X
        onClick={() => setShow(false)}
        className={`cursor-pointer absolute size-5 right-3 top-3 ${
          isDark
            ? "text-slate-400 hover:text-slate-200"
            : "text-stone-500 hover:text-stone-800"
        }`}
      />

      {/* Profile section */}
      <div className={`${styles.dropdownHeader} `}>
        <div
          className={`${styles.largeProfileImage} mx-auto mb-3 ${
            isDark
              ? "border-3 border-blue-500 bg-slate-800"
              : "border-3 border-blue-600 bg-stone-100"
          }`}
        >
          {user.name[0]}
        </div>
        <h3
          className={`${styles.userName}`}
        >
          {user.name}
        </h3>
        <p
          className={`${styles.userEmail} ${
            isDark ? "text-zinc-500" : "text-stone-600"
          }`}
        >
          {user.email}
        </p>
      </div>

      {/* Menu items */}
      <div className={`${styles.dropdownMenu} py-2`}>
        <button
          onClick={() => {
            setShow(false);
            setShowSettingModal(true);
          }}
          className={`${styles.menuItem} ${
            isDark
              ? "text-zinc-300 hover:bg-slate-800"
              : "text-zinc-700 hover:bg-stone-50"
          }`}
        >
          <Settings className={`${styles.menuItemIcon}`} />
          <span>Settings</span>
        </button>

        <button
          onClick={() => handleSignOut(navigate)}
          className={`${styles.menuItem} ${styles.signOutItem} ${
            isDark ? "hover:bg-slate-800/50" : "hover:bg-stone-50"
          }`}
        >
          <ImExit className={`${styles.menuItemIcon}`} />
          <span>Sign Out</span>
        </button>
      </div>

      {/* Footer */}
      <div
        className={`${styles.dropdownFooter} ${
          isDark ? " text-stone-400" : " text-stone-500"
        }`}
      >
        <p>Member since 2022</p>
      </div>
    </div>
  );
};

export default ProfileModal;
