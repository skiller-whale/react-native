import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { colors } from "../../lib/styles.ts";
import { StyledText as Text } from "../../lib/typography.tsx";
import ArticlesStack from "./screens/ArticlesStack.jsx";
import WhalesStack from "./screens/WhalesStack.jsx";

const AppWithTab = () => (
  <NavigationContainer>
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

const ArticlesIcon = ({ color, size }) => (
  <MaterialCommunityIcons name="newspaper" color={color} size={size} />
);

const WhalesIcon = ({ color, size }) => (
  <MaterialCommunityIcons name="dolphin" color={color} size={size} />
);

export default AppWithTab;
