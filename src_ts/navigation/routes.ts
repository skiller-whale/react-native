import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { DrawerScreenProps } from "@react-navigation/drawer";
import type { CompositeScreenProps } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { ArticleTag } from "../../lib/data/articles";

// base stack
export type BaseStackScreen = "Home" | "Article" | "Whale";

export type BaseStackScreenParams = {
  Home: undefined;
  Article: { id: string };
  Whale: { id: string };
};

export type BaseStackScreenProps<Route extends BaseStackScreen = "Home"> =
  NativeStackScreenProps<BaseStackScreenParams, Route>;

// base tabs
export type BaseTabScreen = "Articles" | "Whales" | "Categories";

export type BaseTabScreenParams = {
  Articles: undefined;
  Whales: undefined;
  Categories: undefined;
};

export type BaseTabScreenProps<Route extends BaseTabScreen = "Articles"> =
  BottomTabScreenProps<BaseTabScreenParams, Route>;

// articles stack
export type ArticlesStackScreen = "ArticlesIndex" | "Article";

export type ArticlesStackScreenParams = {
  ArticlesIndex: undefined;
  Article: { id: string };
};

export type ArticlesStackScreenProps = CompositeScreenProps<
  NativeStackScreenProps<
    ArticlesStackScreenParams,
    ArticlesStackScreen
  >,
  BaseStackScreenProps
>;

// whales stack
export type WhalesStackScreen = "WhalesIndex" | "Whale";

export type WhalesStackScreenParams = {
  WhalesIndex: undefined;
  Whale: { id: string };
};

export type WhalesStackScreenProps = CompositeScreenProps<
  NativeStackScreenProps<
    WhalesStackScreenParams,
    WhalesStackScreen
  >,
  BaseStackScreenProps
>;

// categories drawer
export type CategoriesDrawerScreenParams = Record<ArticleTag, undefined>;

export type CategoriesDrawerScreenProps = CompositeScreenProps<
  DrawerScreenProps<
    CategoriesDrawerScreenParams,
    ArticleTag
  >,
  BaseStackScreenProps
>;
