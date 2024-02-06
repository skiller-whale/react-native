import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FlatList, Pressable, StyleSheet, View } from "react-native";
import articles from "../../../lib/data/articles.ts";
import { colors, spacing, styles } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import Link from "../components/Link.jsx";
import { toTitleCase } from "../utils.js";

const CategoryScreen = ({ tag }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={articles.filter((article) => article.tag.includes(tag))}
        ListHeaderComponent={() => (
          <View style={categoryScreenStyles.header}>
            <Text>Category: {toTitleCase(tag)}</Text>
            <MaterialCommunityIcons name="arrow-down" size={24} color="black" />
          </View>
        )}
        renderItem={({ item }) => (
          <View style={categoryScreenStyles.link}>
            <Link onPress={() => navigation.push("Article", { id: item.id })}>
              {item.title}
            </Link>
          </View>
        )}
      />
    </View>
  );
};

const categoryScreenStyles = StyleSheet.create({
  header: {
    backgroundColor: colors.turquoise,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  link: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
});

export default CategoryScreen;
