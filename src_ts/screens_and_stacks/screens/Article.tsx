import type { StaticScreenProps } from "@react-navigation/native";
import { useContext } from "react";
import { ScrollView, View } from "react-native";
import articles from "../../../lib/data/articles.ts";
import whales from "../../../lib/data/whales.ts";
import { styles } from "../../../lib/styles.ts";
import { StateContext } from "../State.ts";
import Article from "../components/Article.tsx";
import RelatedArticles from "../components/RelatedArticles.tsx";
import RelatedWhales from "../components/RelatedWhales.tsx";

type Props = StaticScreenProps<{
  id: string;
}>;

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
      <Article title={article.title} content={article.content[0]} />
      <View style={{ marginTop: 60 }}>
        <RelatedArticles articles={relatedArticles} />
        <RelatedWhales whales={relatedWhales} />
      </View>
    </ScrollView>
  );
};

export default ArticleScreen;
