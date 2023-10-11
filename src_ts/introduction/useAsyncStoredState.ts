import AsyncStorage from "@react-native-async-storage/async-storage";
import { SetStateAction, useState } from "react";
import { useAsyncEffect } from "use-async-effect";

const useAsyncStoredState = <T>(key: string, defaultValue: T) => {
  const [value, _setValue] = useState<T>(defaultValue);
  const [isReady, setIsReady] = useState(false);

  useAsyncEffect(async () => {
    setIsReady(true);
  }, [key]);

  const setValue = (value: SetStateAction<T>) => {
    _setValue(value);
  };

  return [isReady, value, setValue] as const;
};

export default useAsyncStoredState;
