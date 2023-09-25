import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { Pressable } from "react-native";
import { SectionList, Text, View } from "../../../lib/base.tsx";
import styles, { colors } from "../../../lib/styles.ts";
import { DispatchContext, StateContext } from "../State.js";
import Link from "../components/Link.jsx";
import articles from "../data/articles.js";
import whales from "../data/whales.js";

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
