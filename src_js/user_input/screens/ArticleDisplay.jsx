import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { colors, spacing } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import Button from "../components/Button.jsx";
import ImagePreview from "../components/ImagePreview.jsx";
import LoadingPlaceholder from "../components/LoadingPlaceholder.jsx";
import fetch from "../dummyApi.js";

const ArticleDisplay = ({
  isPreview,
  article,
  refreshArticles = async () => {},
  goBack = () => {},
}) => {
  const [deleting, setDeleting] = useState(false);

  const deleteArticle = async () => {
    setDeleting(true);
    await fetch(`https://dummyapi.skillerwhale/articles/${article.id}`, {
      method: "DELETE",
    });
    goBack();
    refreshArticles();
  };

  return (
    <View style={articleDisplayStyles.container}>
      {deleting ? (
        <LoadingPlaceholder message="Deleting article..." />
      ) : (
        <>
          <View style={articleDisplayStyles.header}>
            <Text size="lg" style={articleDisplayStyles.title}>
              [{article.tag}] {article.title}
            </Text>
            {!isPreview ? (
              <Button icon="delete" onPress={deleteArticle} />
            ) : null}
          </View>
          <Text>by {article.author}</Text>
          <Text>written on {article.date.toLocaleDateString()}</Text>
          {article.whales.length > 0 ? (
            <Text style={articleDisplayStyles.subtitle}>
              Whales mentioned in this article: {article.whales.join(", ")}
            </Text>
          ) : null}
          <ImagePreview source={article.imageSrc} />
          {article.content.map((paragraph, index) => (
            <Text key={index}>{paragraph}</Text>
          ))}
        </>
      )}
    </View>
  );
};

const articleDisplayStyles = StyleSheet.create({
  container: {
    padding: spacing.md,
    gap: spacing.md,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    padding: spacing.sm,
    backgroundColor: colors.rayYellow,
    fontStyle: "italic",
  },
});

export default ArticleDisplay;
