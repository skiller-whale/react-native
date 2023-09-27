import { Text, View } from "../../../lib/base.tsx";
import type { Article } from "../data/articles.ts";
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
