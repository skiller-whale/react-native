import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import type { Article } from "../../../lib/data/articles.ts";
import { spacing } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import type { BaseStackScreenProps } from "../routes.ts";
import Link from "./Link.tsx";

type Props = {
  articles: Article[];
};

const RelatedArticles = ({ articles }: Props) => {
  const navigation = useNavigation<BaseStackScreenProps["navigation"]>();

  return (
    <View style={articlesStyles.container}>
      <Text size="lg">Related Articles</Text>
      {articles.length ? (
        articles.map((article) => (
          <Link
            key={article.id}
            onPress={() => navigation.push("Article", { id: article.id })}
          >
            {article.title}
          </Link>
        ))
      ) : (
        <Text>None</Text>
      )}
    </View>
  );
};

const articlesStyles = StyleSheet.create({
  container: {
    padding: spacing.md,
    gap: spacing.md,
  },
});

export default RelatedArticles;
