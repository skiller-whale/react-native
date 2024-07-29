import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList, Pressable, StyleSheet, View } from "react-native";
import articles from "../../../lib/data/articles.ts";
import { colors, spacing } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import { opacity } from "../constants.js";

const ArticlesIndex = ({ navigation }) => {
  const moreInformation = () => Alert.alert("More information");
  const addToFavourites = () => Alert.alert("Added to favourites");
  const saveForLater = () => Alert.alert("Saved for later");

  return (
    <FlatList
      style={indexStyles.articles}
      data={articles}
      renderItem={({ item }) => (
        <View style={indexStyles.listItem}>
          <Pressable
            onPress={() => navigation.navigate("Article", { id: item.id })}
          >
            <Text style={indexStyles.linkText}>{item.title}</Text>
          </Pressable>
          <View style={indexStyles.listItemActions}>
            <Pressable onPress={moreInformation}>
              <MaterialCommunityIcons
                name="information"
                size={32}
                color={colors.midGrey}
                style={{ opacity }}
              />
            </Pressable>
            <Pressable onPress={addToFavourites}>
              <MaterialCommunityIcons
                name="star"
                size={32}
                color={colors.midGrey}
                style={{ opacity }}
              />
            </Pressable>
            <Pressable onPress={saveForLater}>
              <MaterialCommunityIcons
                name="clock"
                size={32}
                color={colors.midGrey}
                style={{ opacity }}
              />
            </Pressable>
          </View>
        </View>
      )}
    />
  );
};

const indexStyles = StyleSheet.create({
  articles: {
    flex: 1,
    padding: spacing.md,
    gap: spacing.md,
    backgroundColor: colors.lightGrey,
  },
  listItem: {},
  listItemActions: {
    flexDirection: "row",
    gap: spacing.sm,
    justifyContent: "flex-end",
  },
  linkText: {
    color: colors.midGrey,
    padding: spacing.sm,
    opacity,
  },
});

export default ArticlesIndex;
