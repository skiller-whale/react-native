import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyledText as Text } from "../../lib/typography.tsx";
import { colors } from "../../lib/styles.ts";
import { BaseTabID, type BaseTabScreenParams } from "./routes.ts";
import ArticlesStack from "./screens/ArticlesStack.tsx";
import WhalesStack from "./screens/WhalesStack.tsx";

const AppWithTab = () => (
  <NavigationContainer independent={true}>
    <Text>complete the exercise...</Text>
  </NavigationContainer>
);

const tabBarStyles = {
  tabBarStyle: {
    backgroundColor: colors.orcaBlue,
  },
  tabBarInactiveTintColor: colors.white,
  tabBarActiveBackgroundColor: colors.turquoise,
  tabBarActiveTintColor: colors.orcaBlue,
};

type IconProps = {
  color: string;
  size: number;
};

const ArticlesIcon = ({ color, size }: IconProps) => (
  <MaterialCommunityIcons name="newspaper" color={color} size={size} />
);

const WhalesIcon = ({ color, size }: IconProps) => (
  <MaterialCommunityIcons name="dolphin" color={color} size={size} />
);

export default AppWithTab;
