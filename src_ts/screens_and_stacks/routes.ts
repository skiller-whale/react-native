import type { StaticParamList } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ArticleScreen from "./screens/Article.tsx";
import HomeScreen from "./screens/Home.tsx";
import WhaleScreen from "./screens/Whale.tsx";

export const Stack = createNativeStackNavigator();

/**
 * These types will be useful as you progress through the exercises - be sure
 * to ask the coach if any of them aren't clear by the end!
 * 
 * You don't need to edit any of these types - the compiler will infer all of
 * the relevant details based on the configuration of the `Stack` navigator
 * defined above.
 */

// record of screen names to their params
export type ScreenParams = StaticParamList<typeof Stack>;

// union of all screen names
export type Screen = keyof ScreenParams;

// navigation prop for the stack (for use with the `useNavigation` hook)
export type NavigationProp = NativeStackNavigationProp<ScreenParams>;
