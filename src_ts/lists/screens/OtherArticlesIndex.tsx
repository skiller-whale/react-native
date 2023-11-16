import { type Dispatch, type SetStateAction } from "react";
import {
  type ListRenderItemInfo,
  FlatList,
  SectionList,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import type { Article } from "../../../lib/data/articles.ts";
import { colors, spacing } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import LoadingPlaceholder from "../components/LoadingPlaceholder.tsx";

type Props = {
  articlesLoading: boolean;
  articles: Article[];
  setSelectedArticleId: Dispatch<SetStateAction<string | null>>;
};

type Section = {
  tag: string;
  data: Article[];
};

const OtherArticlesIndex = ({
  articlesLoading,
  articles,
  setSelectedArticleId,
}: Props) => {
  const beautyArticles = articles.filter((article) =>
    article.tag.includes("beauty"),
  );
  const sportsArticles = articles.filter((article) =>
    article.tag.includes("sport"),
  );
  const scienceArticles = articles.filter((article) =>
    article.tag.includes("science"),
  );
  const lifestyleArticles = articles.filter((article) =>
    article.tag.includes("lifestyle"),
  );

  const renderItem = ({ item }: ListRenderItemInfo<Article>) => (
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
            ...beautyArticles,
            ...sportsArticles,
            ...scienceArticles,
            ...lifestyleArticles,
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
