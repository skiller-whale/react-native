import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseAsync } from "expo-sqlite";
import { createContext, useContext, useState } from "react";
import { Platform } from "react-native";
import useAsyncEffect from "use-async-effect";
import { articles, content } from "../schema.js";

const DatabaseContext = createContext({
  dbIsReady: false,
  db: {},
  drizzleDB: {},
});

export const DatabaseProvider = ({ children }) => {
  const [dbIsReady, setDbIsReady] = useState(false);
  const [db, setDB] = useState({});
  const [drizzleDB, setDrizzleDB] = useState({});

  useAsyncEffect(async () => {
    if (Platform.OS !== "web") {
      // TODO: connect to the database
      setDbIsReady(true);
    }
  }, []);

  return (
    <DatabaseContext.Provider value={{ dbIsReady, db, drizzleDB }}>
      {children}
    </DatabaseContext.Provider>
  );
};

export const useDatabase = () => useContext(DatabaseContext);
