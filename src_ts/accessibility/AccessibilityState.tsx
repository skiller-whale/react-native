import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { AccessibilityInfo } from "react-native";

const AccessibilityStateContext = createContext({
  isScreenReaderEnabled: false,
  isReduceMotionEnabled: false,
});

export default ({ children }: PropsWithChildren) => {
  const [isScreenReaderEnabled, setIsScreenReaderEnabled] = useState(false);

  const [isReduceMotionEnabled, setIsReduceMotionEnabled] = useState(false);

  return (
    <AccessibilityStateContext.Provider
      value={{ isScreenReaderEnabled, isReduceMotionEnabled }}
    >
      {children}
    </AccessibilityStateContext.Provider>
  );
};

export const useAccessibilityState = () =>
  useContext(AccessibilityStateContext);
