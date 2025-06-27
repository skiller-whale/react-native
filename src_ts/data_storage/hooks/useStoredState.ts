import AsyncStorage from "@react-native-async-storage/async-storage";
import { type SetStateAction, useState } from "react";
import useAsyncEffect from "../../../lib/useAsyncEffect.ts";

export const useStoredState = <Type extends string | boolean | number>(
  key: string,
  initialValue: Type,
) => {
  const [valueIsReady, setValueIsReady] = useState(false);
  const [value, _setValue] = useState(initialValue);

  const setValue = (valueOrCallback: SetStateAction<Type>) => {
    const newValue =
      typeof valueOrCallback === "function"
        ? valueOrCallback(value)
        : valueOrCallback;
    _setValue(newValue);
  };

  useAsyncEffect(async () => {
    setValueIsReady(true);
  }, []);

  return [valueIsReady, value, setValue] as const;
};
