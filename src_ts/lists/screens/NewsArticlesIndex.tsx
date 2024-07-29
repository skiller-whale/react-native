import {
  type Dispatch,
  type SetStateAction,
  useCallback,
  useState,
} from "react";
import {
  type ListRenderItemInfo,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import type { Article } from "../../../lib/data/articles.ts";
import { colors, spacing } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import HighlightedText from "../components/HighlightedText.tsx";
import LoadingPlaceholder from "../components/LoadingPlaceholder.tsx";

type Props = {
  articlesLoading: boolean;
  articles: Article[];
  setSelectedArticleId: Dispatch<SetStateAction<string | null>>;
  moreArticlesLoading: boolean;
  fetchMoreArticles: () => void;
};

const ArticlesIndex = ({
  articlesLoading,
  articles,
  setSelectedArticleId,
  moreArticlesLoading,
  fetchMoreArticles,
}: Props) => {
  const newsArticles = articles.filter((article) =>
    article.tag.includes("news"),
  );

  // uncomment this code when instructed
  // const [searchText, setSearchText] = useState("");
  // const shownNewsArticles =
  //   searchText === ""
  //     ? newsArticles
  //     : newsArticles.filter((article) =>
  //         article.title.toLowerCase().includes(searchText.toLowerCase()),
  //       );

  return (
    <View style={{ flex: 1 }}>
      {articlesLoading ? (
        <LoadingPlaceholder />
      ) : (
        <>
          {/* uncomment this code when instructed */}
          {/* <View style={indexStyles.searchInputContainer}>
            <TextInput
              style={indexStyles.searchInput}
              placeholder="search articles"
            />
          </View> */}
          <ScrollView style={indexStyles.articles}>
            {newsArticles.map((article) => (
              <Pressable
                onPress={() => setSelectedArticleId(article.id)}
                key={article.id}
              >
                <Text style={indexStyles.linkText}>{article.title}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </>
      )}
    </View>
  );
};

const NoArticlesPlaceholder = () => (
  <View style={indexStyles.placeholder}>
    <Text>No matching articles</Text>
  </View>
);

const indexStyles = StyleSheet.create({
  articles: {
    flex: 1,
    padding: spacing.md,
    gap: spacing.md,
  },
  searchInputContainer: {
    backgroundColor: colors.lightGrey,
    padding: spacing.md,
  },
  searchInput: {
    backgroundColor: colors.white,
    padding: spacing.sm,
    borderColor: colors.midGrey,
    borderWidth: 1,
    borderRadius: 6,
  },
  placeholder: {
    padding: spacing.sm,
  },
  linkText: {
    color: colors.oceanBlue,
    textDecorationLine: "underline",
    padding: spacing.sm,
  },
});

export default ArticlesIndex;
