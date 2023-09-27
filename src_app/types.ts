import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import modules from "./modules.ts";

export type ModuleRoute =
  | "index"
  | `/js/${(typeof modules)[number][0]}`
  | `/ts/${(typeof modules)[number][0]}`;

export type ModuleStackParamList = Record<ModuleRoute, undefined>;

export type ModuleStackScreenProps<Route extends ModuleRoute> =
  NativeStackScreenProps<ModuleStackParamList, Route, "ModuleStack">;
