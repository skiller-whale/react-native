import { FlatList, StyleSheet } from "react-native";
import articles from "../../../lib/data/articles.ts";
import { spacing, styles } from "../../../lib/styles.ts";
import Link from "../components/Link.tsx";

type Props = {
  nested?: boolean;
};

const ArticlesIndex = ({ nested = false }: Props) => (
  <FlatList
    style={styles.container}
    contentContainerStyle={articlesIndexStyles.container}
    scrollEnabled={!nested}
    data={articles}
    renderItem={({ item }) => (
      <Link screen="Article" params={{ id: item.id }}>
        {item.title}
      </Link>
    )}
  />
);

const articlesIndexStyles = StyleSheet.create({
  container: {
    padding: spacing.md,
    gap: spacing.sm,
  },
});

export default ArticlesIndex;
