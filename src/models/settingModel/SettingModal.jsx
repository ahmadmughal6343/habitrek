import React, { useContext } from "react";
import { SettingsModalContext } from "../../contexts/contexts";
import { X, Sun, Moon, Monitor } from "lucide-react";
import styles from "./SettingModal.module.css";
import useTheme from "../../hooks/useTheme";
import useEffectiveTheme from "../../hooks/useEffectiveTheme";

const SettingModal = () => {
  const { showSettingModal, setShowSettingModal } =
    useContext(SettingsModalContext);
  const { theme, toggleTheme } = useTheme();
  // Function to get current effective theme for styling
  const effectiveTheme = useEffectiveTheme();
  const isDark = effectiveTheme === "dark";

  const themeOptions = [
    { id: "system", label: "System", icon: Monitor },
    { id: "light", label: "Light", icon: Sun },
    { id: "dark", label: "Dark", icon: Moon },
  ];

  return (
    <>
      {showSettingModal && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-4 sm:p-6 ${isDark ? "bg-black/70" : "bg-black/50"}`}
        >
          {/* Modal Container */}
          <div
            className={`${styles.modalContainer} w-full rounded-xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto mx-auto max-w-md ${
              isDark ? "bg-stone-900 text-gray-100" : "bg-white text-stone-800"
            }`}
          >
            {/* Header */}
            <div
              className={`px-4 py-4 sm:px-6 border-b flex justify-between items-center sticky top-0 z-10 ${
                isDark
                  ? "bg-zinc-900 border-gray-700"
                  : "bg-white border-gray-100"
              }`}
            >
              <h2 className="text-lg sm:text-xl font-bold">Settings</h2>
              <X
                onClick={() => setShowSettingModal(false)}
                className={`${styles.closeButton} w-5 h-5 sm:w-6 sm:h-6 ${
                  isDark
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              />
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              {/* Theme Section */}
              <section>
                <label
                  className={`block text-xs sm:text-sm font-medium uppercase tracking-wider mb-3 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Appearance
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {themeOptions.map((option) => {
                    const Icon = option.icon;
                    const isActive = theme === option.id;

                    return (
                      <button
                        key={option.id}
                        onClick={() => toggleTheme(option.id)}
                        className={`${styles.themeOption} text-xs sm:text-sm py-2 sm:py-3 flex flex-col items-center gap-2 ${
                          isActive ? styles.active : ""
                        }`}
                        data-theme={effectiveTheme}
                      >
                        <Icon size={20} />
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </section>
            </div>

            {/* Footer */}
            <div
              className={`px-4 py-4 sm:px-6 flex flex-col xs:flex-row justify-end gap-2 sm:gap-3 border-t sticky bottom-0 ${
                isDark
                  ? "bg-stone-900 border-zinc-600"
                  : "bg-gray-50 border-zinc-300"
              }`}
            >
              <button
                onClick={() => setShowSettingModal(false)}
                className={`px-3 sm:px-4 py-2 text-sm sm:text-base rounded-md font-medium transition-colors order-2 xs:order-1 ${
                  isDark
                    ? "text-gray-400 hover:text-gray-200 bg-stone-800"
                    : "text-gray-600 hover:text-gray-800 bg-blue-500/20"
                }`}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingModal;
