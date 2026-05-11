import { FlatList, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import articles from "../../../lib/data/articles.ts";
import { spacing, styles } from "../../../lib/styles.ts";
import Link from "../components/Link.jsx";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.container}
        contentContainerStyle={homeScreenStyles.container}
        data={articles}
        renderItem={({ item }) => (
          <Link onPress={() => navigation.push("Article", { id: item.id })}>
            {item.title}
          </Link>
        )}
      />
    </View>
  );
};

const homeScreenStyles = StyleSheet.create({
  container: {
    padding: spacing.md,
    gap: spacing.sm,
  },
});

export default HomeScreen;
