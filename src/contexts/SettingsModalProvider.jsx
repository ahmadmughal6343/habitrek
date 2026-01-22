import React, { useState } from "react";
import { SettingsModalContext } from "./contexts";

const SettingsModalProvider = ({ children }) => {
  const [showSettingModal, setShowSettingModal] = useState(false);
  return (
    <SettingsModalContext.Provider
      value={{ showSettingModal, setShowSettingModal }}
    >
      {children}
    </SettingsModalContext.Provider>
  );
};

export default SettingsModalProvider;
