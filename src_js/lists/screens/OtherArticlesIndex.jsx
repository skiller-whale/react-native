import {
  FlatList,
  Pressable,
  SectionList,
  StyleSheet,
  View,
} from "react-native";
import { colors, spacing } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import LoadingPlaceholder from "../components/LoadingPlaceholder.jsx";

const OtherArticlesIndex = ({
  articlesLoading,
  articles,
  setSelectedArticleId,
}) => {
  const scienceArticles = articles.filter((article) =>
    article.tag.includes("science"),
  );
  const politicsArticles = articles.filter((article) =>
    article.tag.includes("politics"),
  );
  const cultureArticles = articles.filter((article) =>
    article.tag.includes("culture"),
  );
  const sportsArticles = articles.filter((article) =>
    article.tag.includes("sport"),
  );

  const renderItem = ({ item }) => (
    <Pressable onPress={() => setSelectedArticleId(item.id)}>
      <Text style={indexStyles.linkText}>{item.title}</Text>
    </Pressable>
  );

  return (
    <View style={{ flex: 1 }}>
      {articlesLoading ? (
        <LoadingPlaceholder />
      ) : (
        <FlatList
          style={indexStyles.articles}
          data={[
            ...scienceArticles,
            ...politicsArticles,
            ...cultureArticles,
            ...sportsArticles,
          ]}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const indexStyles = StyleSheet.create({
  articles: {
    padding: spacing.md,
  },
  sectionHeader: {
    padding: spacing.sm,
    backgroundColor: colors.lightGrey,
    color: colors.coralOrange,
    fontWeight: "600",
  },
  linkText: {
    color: colors.oceanBlue,
    textDecorationLine: "underline",
    padding: spacing.sm,
  },
});

export default OtherArticlesIndex;
