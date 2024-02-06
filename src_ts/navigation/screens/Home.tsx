import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScrollView, StyleSheet, View } from "react-native";
import { colors, spacing, styles } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import ArticlesIndex from "../components/ArticlesIndex.tsx";
import WhalesIndex from "../components/WhalesIndex.tsx";
import CategoriesScreen from "../screens/Categories.tsx";
import { BaseTabID, type BaseTabScreenParams } from "../routes.ts";

const HomeScreen = () => (
  <ScrollView
    style={styles.container}
    contentContainerStyle={homeScreenStyles.container}
  >
    <View>
      <Text size="lg">Articles</Text>
      <ArticlesIndex />
    </View>
    <View>
      <Text size="lg">Whales</Text>
      <WhalesIndex />
    </View>
  </ScrollView>
);

const homeScreenStyles = StyleSheet.create({
  container: {
    padding: spacing.md,
    gap: spacing.lg,
  },
});

const tabStyles = {
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

const CategoriesIcon = ({ color, size }: IconProps) => (
  <MaterialCommunityIcons name="apps" color={color} size={size} />
);

export default HomeScreen;
