import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScrollView, StyleSheet, View } from "react-native";
import { colors, spacing, styles } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import ArticlesIndex from "../components/ArticlesIndex.jsx";
import WhalesIndex from "../components/WhalesIndex.jsx";
import CategoriesScreen from "../screens/Categories.jsx";

const HomeScreen = () => (
  <ScrollView
    style={styles.container}
    contentContainerStyle={homeScreenStyles.container}
  >
    <View>
      <Text size="lg">Articles</Text>
      <ArticlesIndex nested={true} />
    </View>
    <View>
      <Text size="lg">Whales</Text>
      <WhalesIndex nested={true} />
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

const ArticlesIcon = ({ color, size }) => (
  <MaterialCommunityIcons name="newspaper" color={color} size={size} />
);

const WhalesIcon = ({ color, size }) => (
  <MaterialCommunityIcons name="dolphin" color={color} size={size} />
);

const CategoriesIcon = ({ color, size }) => (
  <MaterialCommunityIcons name="apps" color={color} size={size} />
);

export default HomeScreen;
