import { ScrollView, StyleSheet, View } from "react-native";
import articles from "../../../lib/data/articles.ts";
import whales from "../../../lib/data/whales.ts";
import { spacing, styles } from "../../../lib/styles.ts";
import Article from "../components/Article.jsx";
import RelatedArticles from "../components/RelatedArticles.jsx";
import RelatedWhales from "../components/RelatedWhales.jsx";

const ArticleScreen = ({ route }) => {
  const { id } = route.params;
  const article = articles.find((article) => article.id === id);
  if (!article) {
    return (
      <ScrollView style={styles.container}>
        <Article title="Article not found" content="" />
      </ScrollView>
    );
  }

  const relatedArticles = articles.filter(
    (other) =>
      other.id !== id && other.tag.some((tag) => article.tag.includes(tag)),
  );
  const relatedWhales = whales.filter((whale) =>
    article.whales.includes(whale.id),
  );

  return (
    <ScrollView style={[styles.container, articleScreenStyles.container]}>
      <Article title={article.title} content={article.content[0]} />
      <View>
        <RelatedArticles articles={relatedArticles} />
        <RelatedWhales whales={relatedWhales} />
      </View>
    </ScrollView>
  );
};

const articleScreenStyles = StyleSheet.create({
  container: {
    gap: spacing.xl,
  },
});

export default ArticleScreen;
