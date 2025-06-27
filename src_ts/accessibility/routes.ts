import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type BaseStackScreen = "Index" | "Article";

export type BaseStackScreenParams = {
  Index: undefined;
  Article: { id: string };
};

export type BaseStackScreenProps<Route extends BaseStackScreen = "Index"> =
  NativeStackScreenProps<BaseStackScreenParams, Route>;
