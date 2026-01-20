import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { FlatList, Pressable, StyleSheet, View } from "react-native";
import articles from "../../../lib/data/articles.ts";
import { colors, spacing, styles } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import Link from "../components/Link.jsx";

const CategoryScreen = ({ tag }) => {
  const navigation = useNavigation();

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={categoryScreenStyles.container}
      data={articles.filter((article) => article.tag.includes(tag))}
      ListHeaderComponent={() => (
        <Pressable
          style={categoryScreenStyles.header}
          onPress={() => navigation.openDrawer()}
        >
          <Text>Category: {toTitleCase(tag)}</Text>
          <MaterialCommunityIcons name="arrow-down" size={24} color="black" />
        </Pressable>
      )}
      renderItem={({ item }) => (
        <View style={categoryScreenStyles.link}>
          <Link screen="Article" params={{ id: item.id }}>
            {item.title}
          </Link>
        </View>
      )}
    />
  );
};

const categoryScreenStyles = StyleSheet.create({
  container: {
    gap: spacing.sm,
  },
  header: {
    backgroundColor: colors.turquoise,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  link: {
    paddingHorizontal: spacing.md,
  },
});

export default CategoryScreen;
