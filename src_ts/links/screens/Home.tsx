import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../../lib/styles.ts";
import type { HomeTabScreenParams } from "../routes.ts";
import ArticlesIndexScreen from "./ArticlesIndex.tsx";
import HelpScreen from "./Help.tsx";

const Tab = createBottomTabNavigator<HomeTabScreenParams>();

const HomeScreen = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: colors.orcaBlue,
      },
      tabBarInactiveTintColor: colors.white,
      tabBarActiveBackgroundColor: colors.turquoise,
      tabBarActiveTintColor: colors.orcaBlue,
    }}
  >
    <Tab.Screen
      name="ArticlesIndex"
      component={ArticlesIndexScreen}
      options={{
        title: "Articles",
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="newspaper" color={color} size={24} />,
      }}
    />
    <Tab.Screen
      name="Help"
      component={HelpScreen}
      options={{
        title: "Help",
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="help" color={color} size={24} />,
      }}
    />
  </Tab.Navigator>
);

export default HomeScreen;
