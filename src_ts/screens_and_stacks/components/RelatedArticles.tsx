import { View } from "react-native";
import type { Article } from "../../../lib/data/articles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import Link from "./Link.tsx";

type Props = {
  articles: Article[];
};

const RelatedArticles = ({ articles }: Props) => (
  <View style={articlesStyles.container}>
    <Text size="lg">Related Articles</Text>
    {articles.length ? (
      articles.map((article) => <Link key={article.id}>{article.title}</Link>)
    ) : (
      <Text>None</Text>
    )}
  </View>
);

const articlesStyles = {
  container: {
    padding: 20,
    gap: 10,
  },
} as const;

export default RelatedArticles;
