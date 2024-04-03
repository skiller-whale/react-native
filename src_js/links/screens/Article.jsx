import { ScrollView, StyleSheet, View } from "react-native";
import articles from "../../../lib/data/articles.ts";
import {
  colors,
  fontFamilies,
  fontSizes,
  spacing,
  styles,
} from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";

const ArticleScreen = ({ route }) => {
  // find article
  const { id } = route.params;
  const article = articles.find((article) => article.id === id);
  if (!article) {
    return (
      <ScrollView style={styles.container}>
        <View style={articleScreenStyles.articleContainer}>
          <Text style={articleScreenStyles.articleTitle}>
            Article not found
          </Text>
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={articleScreenStyles.container}
    >
      <View style={articleScreenStyles.articleContainer}>
        <Text style={articleScreenStyles.articleTitle}>{article.title}</Text>
        {article.content.map((paragraph, index) => (
          <Text key={index}>{paragraph}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

const articleScreenStyles = StyleSheet.create({
  container: {
    gap: spacing.xl,
    paddingBottom: 30,
  },
  articleContainer: {
    gap: spacing.md,
    padding: spacing.md,
  },
  articleTitle: {
    fontFamily: fontFamilies.serif,
    fontSize: fontSizes.lg,
    textAlign: "center",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 6 },
    shadowRadius: 8,
    elevation: 9,
  },
  bottomSheetContainer: {
    backgroundColor: colors.lightGrey,
  },
  bottomSheetContent: {
    flex: 1,
    padding: spacing.md,
    borderRadius: 0,
  },
});

export default ArticleScreen;
