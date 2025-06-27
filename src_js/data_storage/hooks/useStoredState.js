import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import useAsyncEffect from "../../../lib/useAsyncEffect.ts";

export const useStoredState = (key, initialValue) => {
  const [valueIsReady, setValueIsReady] = useState(false);
  const [value, _setValue] = useState(initialValue);

  const setValue = (valueOrCallback) => {
    const newValue =
      typeof valueOrCallback === "function"
        ? valueOrCallback(value)
        : valueOrCallback;
    _setValue(newValue);
  };

  useAsyncEffect(async () => {
    setValueIsReady(true);
  }, []);

  return [valueIsReady, value, setValue];
};
