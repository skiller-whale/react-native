import { drizzle, type ExpoSQLiteDatabase } from "drizzle-orm/expo-sqlite";
import { openDatabaseAsync, type SQLiteDatabase } from "expo-sqlite";
import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";
import { Platform } from "react-native";
import useAsyncEffect from "use-async-effect";
import type { Schema } from "../schema.ts";
import * as schema from "../schema.ts";

const DatabaseContext = createContext({
  dbIsReady: false,
  db: {} as SQLiteDatabase,
  drizzleDB: {} as ExpoSQLiteDatabase<Schema>,
});

export const DatabaseProvider = ({ children }: PropsWithChildren) => {
  const [dbIsReady, setDbIsReady] = useState(false);
  const [db, setDB] = useState({} as SQLiteDatabase);
  const [drizzleDB, setDrizzleDB] = useState({} as ExpoSQLiteDatabase<Schema>);

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
