import { useState } from "react";
import {
  Dimensions,
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { colors, spacing } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import type { Article } from "../../../lib/data/articles.ts";

type Props = {
  article: Article;
  updateArticle: (article: Article) => void;
};

const ArticleDisplay = ({ article, updateArticle }: Props) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {};

  return (
    <View style={articleStyles.article}>
      <Text font="serif" size="xl" style={articleStyles.heading}>
        {article.title}
      </Text>
      <Image
        source={article.image}
        style={articleStyles.image}
        resizeMode="contain"
      />
      {article.update ? (
        <Text style={articleStyles.update}>{article.update}</Text>
      ) : null}
      {article.content.map((text, index) => (
        <Text key={index}>{text}</Text>
      ))}
    </View>
  );
};

const articleStyles = StyleSheet.create({
  article: {
    padding: spacing.md,
    gap: spacing.md,
  },
  heading: {
    fontWeight: "600",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  update: {
    padding: spacing.md,
    backgroundColor: colors.coralOrange,
    fontWeight: "600",
  },
});

export default ArticleDisplay;
