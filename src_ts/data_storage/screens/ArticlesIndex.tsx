import { FlatList, Pressable, StyleSheet, View } from "react-native";
import LoadingPlaceholder from "../../../lib/LoadingPlaceholder.tsx";
import { colors, spacing, styles } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import type { BaseStackScreenProps } from "../routes.ts";
import { useArticles } from "../state/Articles.tsx";
import { useSettings } from "../state/Settings.tsx";

const ArticlesIndex = ({ navigation }: BaseStackScreenProps<"Index">) => {
  const { articles, articlesAreReady, isOnline } = useArticles();
  const { fontSize, fontFamily } = useSettings();

  return !articlesAreReady ? (
    <View style={styles.container}>
      <LoadingPlaceholder />
    </View>
  ) : (
    <FlatList
      style={styles.container}
      data={articles}
      ListHeaderComponent={() =>
        isOnline ? null : (
          <View style={indexStyles.offline}>
            <Text style={indexStyles.offlineText}>you are offline</Text>
          </View>
        )
      }
      ListEmptyComponent={() =>
        isOnline ? (
          <Text
            style={indexStyles.noArticles}
            font={fontFamily}
            size={fontSize}
          >
            There are no articles available.
          </Text>
        ) : (
          <Text
            style={indexStyles.noArticles}
            font={fontFamily}
            size={fontSize}
          >
            You don't have any cached articles.
          </Text>
        )
      }
      renderItem={({ item }) => (
        <Pressable
          onPress={() => navigation.navigate("Article", { id: item.id })}
        >
          <Text style={indexStyles.linkText} font={fontFamily} size={fontSize}>
            {item.title}
          </Text>
        </Pressable>
      )}
    />
  );
};

const indexStyles = StyleSheet.create({
  offline: {
    backgroundColor: colors.coralOrange,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  offlineText: {
    fontWeight: "700",
    color: colors.white,
  },
  noArticles: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  linkText: {
    color: colors.oceanBlue,
    textDecorationLine: "underline",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
});

export default ArticlesIndex;
