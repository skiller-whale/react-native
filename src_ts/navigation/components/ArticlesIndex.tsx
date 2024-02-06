import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, View } from "react-native";
import articles from "../../../lib/data/articles.ts";
import { spacing, styles } from "../../../lib/styles.ts";
import Link from "../components/Link.tsx";
import type { BaseStackScreenProps } from "../routes.ts";

const ArticlesIndex = () => {
  const navigation = useNavigation<BaseStackScreenProps["navigation"]>();

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <View style={articlesIndexStyles.link}>
            <Link onPress={() => navigation.push("Article", { id: item.id })}>
              {item.title}
            </Link>
          </View>
        )}
      />
    </View>
  );
};

const articlesIndexStyles = StyleSheet.create({
  link: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
});

export default ArticlesIndex;
