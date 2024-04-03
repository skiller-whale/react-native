import { useEffect, useState } from "react";
import { FlatList, StyleSheet, TextInput, View } from "react-native";
import * as Linking from "expo-linking";
import articles from "../../../lib/data/articles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import { colors, spacing, styles } from "../../../lib/styles.ts";
import Button from "../components/Button.jsx";
import Link from "../components/Link.jsx";
import HighlightedText from "../../lists/components/HighlightedText.jsx";

const ArticlesIndexScreen = ({ navigation }) => {
  const [query, setQuery] = useState("");

  const handleURL = (url) => {
    const { queryParams } = Linking.parse(url);
    const query = queryParams?.q;
    if (typeof query === "string") {
      setQuery(query);
    }
  };

  const visibleArticles =
    query.length > 0
      ? articles.filter((article) =>
          article.title.toLowerCase().includes(query.toLowerCase()),
        )
      : articles;

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={articlesIndexScreenStyles.container}
      ListHeaderComponent={
        <View style={articlesIndexScreenStyles.header}>
          <Button
            onPress={() =>
              Linking.openURL(
                "https://skiller-whale.github.io/deep-link-tester/",
              )
            }
            title="Deep Link Tester"
          />
          <TextInput
            style={articlesIndexScreenStyles.searchInput}
            value={query}
            onChangeText={setQuery}
            placeholder="Search"
          />
        </View>
      }
      data={visibleArticles}
      renderItem={({ item }) => (
        <Link onPress={() => navigation.push("Article", { id: item.id })}>
          {<HighlightedText text={item.title} highlight={query} />}
        </Link>
      )}
    />
  );
};

const articlesIndexScreenStyles = StyleSheet.create({
  container: {
    padding: spacing.md,
    gap: spacing.sm,
  },
  header: {
    gap: spacing.md,
  },
  searchInput: {
    padding: spacing.sm,
    borderWidth: 1,
    borderColor: colors.orcaBlue,
  },
});

export default ArticlesIndexScreen;
