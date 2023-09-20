import { useContext } from "react";
import { ScrollView, Text, View } from "../../../lib/base.tsx";
import { StateContext } from "../State.ts";
import articles from "../data/articles.ts";
import whales from "../data/whales.ts";
import Article from "../components/Article.tsx";
import RelatedArticles from "../components/RelatedArticles.tsx";
import RelatedWhales from "../components/RelatedWhales.tsx";
import type { StackScreenProps } from "../routes.ts";
import styles, { colors } from "../../../lib/styles.ts";

type Props = {
  id: string;
};

const ArticleScreen = ({ id }: Props) => {
  const article = articles.find((article) => article.id === id);
  if (!article) {
    return (
      <ScrollView style={styles.container}>
        <Article title="Article not found" content="" />
      </ScrollView>
    );
  }

  const relatedArticles = articles.filter(
    (other) => other.id !== id && other.tag.some((tag) => article.tag.includes(tag))
  );
  const relatedWhales = whales.filter((whale) => article.whales.includes(whale.id));

  return (
    <ScrollView style={styles.container}>
      <ArticleScreenHeader title={article.title} />
      <Article title={article.title} content={article.content} />
      <View style={{ marginTop: 60 }}>
        <RelatedArticles articles={relatedArticles} />
        <RelatedWhales whales={relatedWhales} />
      </View>
    </ScrollView>
  );
};

const ArticleScreenHeader = ({ title }: { title: string }) => (
  <View style={{ backgroundColor: colors.orcaBlue, padding: 16 }}>
    <Text color="white">{title}</Text>
  </View>
);

export default ArticleScreen;
