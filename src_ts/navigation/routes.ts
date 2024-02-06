import type { CompositeScreenProps } from "@react-navigation/native";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { DrawerScreenProps } from "@react-navigation/drawer";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { ArticleTag } from "../../lib/data/articles";

// base stack
export const BaseStackID = "BaseStack";

export type BaseStackScreen = "Home" | "Article" | "Whale";

export type BaseStackScreenParams = {
  Home: undefined;
  Article: { id: string };
  Whale: { id: string };
};

export type BaseStackScreenProps<Route extends BaseStackScreen = "Home"> =
  NativeStackScreenProps<BaseStackScreenParams, Route, typeof BaseStackID>;

// base tabs
export const BaseTabID = "BaseTab";

export type BaseTabScreen = "Articles" | "Whales" | "Categories";

export type BaseTabScreenParams = {
  Articles: undefined;
  Whales: undefined;
  Categories: undefined;
};

export type BaseTabScreenProps<Route extends BaseTabScreen = "Articles"> =
  BottomTabScreenProps<BaseTabScreenParams, Route, typeof BaseTabID>;

// articles stack
export const ArticlesStackID = "ArticlesStack";

export type ArticlesStackScreen = "ArticlesIndex" | "Article";

export type ArticlesStackScreenParams = {
  ArticlesIndex: undefined;
  Article: { id: string };
};

export type ArticlesStackScreenProps = CompositeScreenProps<
  NativeStackScreenProps<
    ArticlesStackScreenParams,
    ArticlesStackScreen,
    typeof ArticlesStackID
  >,
  BaseStackScreenProps
>;

// whales stack
export const WhalesStackID = "WhalesStack";

export type WhalesStackScreen = "WhalesIndex" | "Whale";

export type WhalesStackScreenParams = {
  WhalesIndex: undefined;
  Whale: { id: string };
};

export type WhalesStackScreenProps = CompositeScreenProps<
  NativeStackScreenProps<
    WhalesStackScreenParams,
    WhalesStackScreen,
    typeof WhalesStackID
  >,
  BaseStackScreenProps
>;

// categories drawer
export const CategoriesDrawerID = "CategoriesDrawer";

export type CategoriesDrawerScreenParams = Record<ArticleTag, undefined>;

export type CategoriesDrawerScreenProps = CompositeScreenProps<
  DrawerScreenProps<
    CategoriesDrawerScreenParams,
    ArticleTag,
    typeof CategoriesDrawerID
  >,
  BaseStackScreenProps
>;
