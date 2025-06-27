import AsyncStorage from "@react-native-async-storage/async-storage";
import { SetStateAction, useState } from "react";
import useAsyncEffect from "../../lib/useAsyncEffect.ts";

const useAsyncStoredState = (key, defaultValue) => {
  const [value, _setValue] = useState(defaultValue);
  const [isReady, setIsReady] = useState(false);

  useAsyncEffect(async () => {
    setIsReady(true);
  }, [key]);

  const setValue = (value) => {
    _setValue(value);
  };

  return [isReady, value, setValue];
};

export default useAsyncStoredState;
