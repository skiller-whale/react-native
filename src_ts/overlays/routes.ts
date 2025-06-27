import type { NativeStackScreenProps } from "@react-navigation/native-stack";

// base stack
export type BaseStackScreen = "Home" | "Article" | "Login";

export type BaseStackScreenParams = {
  Home: undefined;
  Article: { id: string };
  Login: { automatic?: boolean };
};

export type BaseStackScreenProps<Route extends BaseStackScreen = "Home"> =
  NativeStackScreenProps<BaseStackScreenParams, Route>;
