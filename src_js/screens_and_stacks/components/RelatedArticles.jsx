import { View } from "react-native";
import { StyledText as Text } from "../../../lib/typography.tsx";
import Link from "./Link.jsx";

const RelatedArticles = ({ articles }) => (
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
};

export default RelatedArticles;
