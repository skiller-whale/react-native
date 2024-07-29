import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from "react";
import { useStoredState } from "../hooks/useStoredState.ts";

type Settings = {
  settingsAreReady: boolean;
  fontFamily: "sans" | "serif";
  fontSize: "sm" | "md" | "lg";
};

type SetSettings = {
  setFontFamily: Dispatch<SetStateAction<Settings["fontFamily"]>>;
  setFontSize: Dispatch<SetStateAction<Settings["fontSize"]>>;
};

const SettingsContext = createContext<Settings>({
  settingsAreReady: false,
  fontFamily: "sans",
  fontSize: "md",
});

const SetSettingsContext = createContext<SetSettings>({
  setFontFamily: () => {},
  setFontSize: () => {},
});

export const SettingsProvider = ({ children }: PropsWithChildren) => {
  const [fontFamily, setFontFamily] = useState<Settings["fontFamily"]>("sans");
  const [fontSize, setFontSize] = useState<Settings["fontSize"]>("md");
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
