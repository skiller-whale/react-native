import { FlatList, StyleSheet, View } from "react-native";
import type { Article } from "../../../lib/data/articles.ts";
import { spacing } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import Link from "./Link.tsx";

type Props = {
  articles: Article[];
};

const RelatedArticles = ({ articles }: Props) => (
  <FlatList
    contentContainerStyle={articlesStyles.container}
    scrollEnabled={false}
    data={articles}
    ListHeaderComponent={() => <Text size="lg">Related Articles</Text>}
    ListEmptyComponent={() => <Text>None</Text>}
    renderItem={({ item }) => (
      <Link screen="Article" params={{ id: item.id }}>
        {item.title}
      </Link>
    )}
  />
);

const articlesStyles = StyleSheet.create({
  container: {
    padding: spacing.md,
    gap: spacing.sm,
  },
});

export default RelatedArticles;
