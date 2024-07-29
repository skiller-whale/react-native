import { createContext, useContext, useState } from "react";
import { useStoredState } from "../hooks/useStoredState.js";

const SettingsContext = createContext({
  settingsAreReady: false,
  fontFamily: "sans",
  fontSize: "md",
});

const SetSettingsContext = createContext({
  setFontFamily: () => {},
  setFontSize: () => {},
});

export const SettingsProvider = ({ children }) => {
  const [fontFamily, setFontFamily] = useState("sans");
  const [fontSize, setFontSize] = useState("md");
  const settingsAreReady = true;

  return (
    <SettingsContext.Provider
      value={{ settingsAreReady, fontFamily, fontSize }}
    >
      <SetSettingsContext.Provider value={{ setFontFamily, setFontSize }}>
        {children}
      </SetSettingsContext.Provider>
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);

export const useSetSettings = () => useContext(SetSettingsContext);
