import { FlatList, Pressable, StyleSheet } from "react-native";
import { colors, spacing } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import Button from "../components/Button.jsx";

const ArticleDisplay = ({ articles, setCurrentArticleId, newArticle }) => (
  <FlatList
    scrollEnabled={false}
    style={articlesIndexStyles.container}
    data={articles}
    renderItem={({ item }) => (
      <Pressable onPress={() => setCurrentArticleId(item.id)}>
        <Text style={articlesIndexStyles.articleLink}>{item.title}</Text>
      </Pressable>
    )}
    ListHeaderComponent={
      <Button
        style={articlesIndexStyles.newArticleButton}
        icon="add"
        onPress={newArticle}
      >
        New Article
      </Button>
    }
    ListEmptyComponent={<Text>No articles :(</Text>}
  />
);

const articlesIndexStyles = StyleSheet.create({
  container: {
    padding: spacing.md,
  },
  newArticleButton: {
    marginBottom: spacing.sm,
  },
  articleLink: {
    padding: spacing.sm,
    color: colors.oceanBlue,
    textDecorationLine: "underline",
  },
});

export default ArticleDisplay;
