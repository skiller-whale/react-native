import { useState } from "react";
import { useAsyncEffect } from "use-async-effect";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAsyncStorage = <Value,>(key: string, initialValue?: Value) => {
  const [value, _setValue] = useState<Value | undefined>(initialValue);
  const [isLoaded, setIsLoaded] = useState(false);

  useAsyncEffect(async () => {
    const storedValue = await AsyncStorage.getItem(key);
    if (storedValue) {
      _setValue(JSON.parse(storedValue));
    }
    setIsLoaded(true);
  }, []);

  const setValue = (newValue: Value) => {
    _setValue(newValue);
    AsyncStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setValue, isLoaded] as const;
};

export default useAsyncStorage;