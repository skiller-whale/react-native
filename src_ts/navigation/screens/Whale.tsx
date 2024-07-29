import { ScrollView, StyleSheet, View } from "react-native";
import articles from "../../../lib/data/articles.ts";
import whales from "../../../lib/data/whales.ts";
import { spacing, styles } from "../../../lib/styles.ts";
import Article from "../components/Article.tsx";
import RelatedArticles from "../components/RelatedArticles.tsx";
import type { BaseStackScreenProps } from "../routes.ts";

const WhaleScreen = ({ route }: BaseStackScreenProps<"Whale">) => {
  const { id } = route.params;
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
    <ScrollView style={[styles.container, whaleScreenStyles.container]}>
      <Article title={whale.name} content={whale.about} />
      <View>
        <RelatedArticles articles={relatedArticles} />
      </View>
    </ScrollView>
  );
};

const whaleScreenStyles = StyleSheet.create({
  container: {
    gap: spacing.xl,
  },
});

export default WhaleScreen;
