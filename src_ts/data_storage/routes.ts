import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export const BaseStackID = "BaseStack";

export type BaseStackScreen = "Index" | "Article" | "Settings";

export type BaseStackScreenParams = {
  Index: undefined;
  Article: { id: string };
  Settings: undefined;
};

export type BaseStackScreenProps<Route extends BaseStackScreen = "Index"> =
  NativeStackScreenProps<BaseStackScreenParams, Route, typeof BaseStackID>;
