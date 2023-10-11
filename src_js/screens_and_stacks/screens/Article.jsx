import { useContext } from "react";
import { ScrollView, View } from "../../../lib/base.tsx";
import styles from "../../../lib/styles.ts";
import { StateContext } from "../State.js";
import Article from "../components/Article.jsx";
import RelatedArticles from "../components/RelatedArticles.jsx";
import RelatedWhales from "../components/RelatedWhales.jsx";
import articles from "../../../lib/data/articles.ts";
import whales from "../../../lib/data/whales.ts";

const ArticleScreen = () => {
  const id = "1";
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
    <ScrollView style={styles.container}>
      <Article title={article.title} content={article.content} />
      <View style={{ marginTop: 60 }}>
        <RelatedArticles articles={relatedArticles} />
        <RelatedWhales whales={relatedWhales} />
      </View>
    </ScrollView>
  );
};

export default ArticleScreen;
