import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export const StackID = "Stack";

export const Screens = {
  Home: "Home",
  Article: "Article",
  Whale: "Whale",
} as const;

export type Screen = keyof typeof Screens;

export type ScreenParams = {
  Home: undefined;
  Article: undefined;
  Whale: undefined;
};

export type ScreenProps<Route extends Screen = "Home"> = NativeStackScreenProps<
  ScreenParams,
  Route,
  typeof StackID
>;

export type NavigationProp<Route extends Screen = "Home"> =
  ScreenProps<Route>["navigation"];
