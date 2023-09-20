import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export const StackID = "Stack";

export type StackRoute = keyof StackParamList;

export const Routes = {
  Home: "Home",
  Article1: "Article1",
  Article2: "Article2",
  Orca: "Orca",
  Skiller: "Skiller",
  Article: "Article",
  Whale: "Whale",
};

export type StackParamList = {
  Home: undefined;
  Article1: undefined;
  Article2: undefined;
  Orca: undefined;
  Skiller: undefined;
  Article: { id: string };
  Whale: { id: string };
};

export type StackScreenProps<Route extends StackRoute = "Home"> = NativeStackScreenProps<
  StackParamList,
  Route,
  typeof StackID
>;

export type StackNavigationProp<Route extends StackRoute = "Home"> =
  StackScreenProps<Route>["navigation"];
