import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

// base stack
export const BaseStackID = "BaseStack";

export type BaseStackScreen = "Home" | "Article";

export type BaseStackScreenParams = {
  Home: NavigatorScreenParams<HomeTabScreenParams>;
  Article: { id: string };
  NotFound: undefined;
};

export type BaseStackScreenProps<Route extends BaseStackScreen = "Home"> =
  NativeStackScreenProps<BaseStackScreenParams, Route, typeof BaseStackID>;

// home tab
export const HomeTabID = "HomeTab";

export type HomeTabScreen = "ArticlesIndex" | "Help";

export type HomeTabScreenParams = {
  ArticlesIndex: undefined;
  Help: undefined;
};

export type HomeTabScreenProps<Route extends HomeTabScreen = "ArticlesIndex"> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabScreenParams, Route, typeof HomeTabID>,
    BaseStackScreenProps
  >;
