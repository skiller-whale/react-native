import { useContext } from "react";
import { ScrollView, Text, View } from "../../../lib/base.tsx";
import Article from "../components/Article.tsx";
import type { StackScreenProps } from "../routes.ts";
import { StateContext } from "../State.ts";
import articles from "../data/articles.ts";
import whales from "../data/whales.ts";
import RelatedArticles from "../components/RelatedArticles.tsx";
import styles, { colors } from "../../../lib/styles.ts";

type Props = {
  id: string;
};

const WhaleScreen = ({ id }: Props) => {
  const whale = whales.find((whale) => whale.id === id);
  if (!whale) {
    return (
      <ScrollView style={styles.container}>
        <Article title="Whale not found" content="" />
      </ScrollView>
    );
  }

  const relatedArticles = articles.filter((article) => article.whales.includes(whale.id));

  return (
    <ScrollView style={styles.container}>
      <WhaleScreenHeader title={whale.name} />
      <Article title={whale.name} content={whale.about} />
      <View style={{ marginTop: 60 }}>
        <RelatedArticles articles={relatedArticles} />
      </View>
    </ScrollView>
  );
};

const WhaleScreenHeader = ({ title }: { title: string }) => (
  <View style={{ backgroundColor: colors.orcaBlue, padding: 16 }}>
    <Text color="white">{title}</Text>
  </View>
);

export default WhaleScreen;
