import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { Pressable, SectionList, View } from "react-native";
import articles from "../../../lib/data/articles.ts";
import whales from "../../../lib/data/whales.ts";
import { colors, styles } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import { DispatchContext, StateContext } from "../State.js";
import Link from "../components/Link.jsx";

const HomeScreen = () => {
  const data = [
    {
      title: "Article",
      data: articles.map((article) => ({
        id: article.id,
        title: article.title,
      })),
    },
    {
      title: "Whale",
      data: whales.map((whale) => ({ id: whale.id, title: whale.name })),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={{ ...styles.row, justifyContent: "flex-end" }}>
        <Pressable onPress={() => console.log("TODO")}>
          <MaterialCommunityIcons
            name="refresh"
            size={24}
            color={colors.orcaBlue}
            style={{ padding: 16 }}
          />
        </Pressable>
      </View>
      <SectionList
        sections={data}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({ section }) => (
          <View style={{ padding: 16 }}>
            <Text size="lg">{section.title}s</Text>
          </View>
        )}
        renderItem={({ item, section }) => (
          <View style={{ paddingHorizontal: 20, paddingVertical: 6 }}>
            <Link>{item.title}</Link>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
