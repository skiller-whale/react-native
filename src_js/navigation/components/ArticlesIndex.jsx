import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, View } from "react-native";
import articles from "../../../lib/data/articles.ts";
import { spacing, styles } from "../../../lib/styles.ts";
import Link from "../components/Link.jsx";

const ArticlesIndex = ({ nested = false }) => {
  const navigation = useNavigation();

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={articlesIndexStyles.container}
      scrollEnabled={!nested}
      data={articles}
      renderItem={({ item }) => (
        <Link onPress={() => navigation.push("Article", { id: item.id })}>
          {item.title}
        </Link>
      )}
    />
  );
};

const articlesIndexStyles = StyleSheet.create({
  container: {
    padding: spacing.md,
    gap: spacing.sm,
  },
});

export default ArticlesIndex;
