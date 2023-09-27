import { useContext } from "react";
import { ScrollView, Text, View } from "../../../lib/base.tsx";
import styles from "../../../lib/styles.ts";
import { StateContext } from "../State.ts";
import Article from "../components/Article.tsx";
import RelatedArticles from "../components/RelatedArticles.tsx";
import articles from "../data/articles.ts";
import whales from "../data/whales.ts";
import type { ScreenProps } from "../routes.ts";

const WhaleScreen = () => {
  const id = "orca";
  const whale = whales.find((whale) => whale.id === id);
  if (!whale) {
    return (
      <ScrollView style={styles.container}>
        <Article title="Whale not found" content="" />
      </ScrollView>
    );
  }

  const relatedArticles = articles.filter((article) =>
    article.whales.includes(whale.id),
  );

  return (
    <ScrollView style={styles.container}>
      <Article title={whale.name} content={whale.about} />
      <View style={{ marginTop: 60 }}>
        <RelatedArticles articles={relatedArticles} />
      </View>
    </ScrollView>
  );
};

export default WhaleScreen;
