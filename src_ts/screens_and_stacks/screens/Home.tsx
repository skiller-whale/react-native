import { useContext } from "react";
import { Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SectionList, Text, View } from "../../../lib/base.tsx";
import { StateContext } from "../State.ts";
import articles from "../data/articles.ts";
import whales from "../data/whales.ts";
import Link from "../components/Link.tsx";
import styles, { colors } from "../../../lib/styles.ts";

// use this HomeScreen component first (you'll uncomment and use the one below later)
const HomeScreen = () => {
  const article1 = articles.find((article) => article.id === "1")!;
  const article2 = articles.find((article) => article.id === "2")!;
  const orca = whales.find((whale) => whale.id === "orca")!;
  const skiller = whales.find((whale) => whale.id === "skiller")!;

  return (
    <View style={styles.container}>
      <HomeScreenHeader />
      <View style={{ padding: 16 }}>
        <Text size="lg">Articles</Text>
      </View>
      <View style={{ paddingHorizontal: 20, paddingVertical: 6 }}>
        <Link>{article1.title}</Link>
        <Link>{article2.title}</Link>
      </View>
      <View style={{ padding: 16 }}>
        <Text size="lg">Whales</Text>
      </View>
      <View style={{ paddingHorizontal: 20, paddingVertical: 6 }}>
        <Link>{orca.name}</Link>
        <Link>{skiller.name}</Link>
      </View>
    </View>
  );
};

// uncomment and use this HomeScreen component instead when instructed
// const HomeScreen = () => {
//   const data = [
//     {
//       title: "Article",
//       data: articles.map((article) => ({ id: article.id, title: article.title })),
//     },
//     {
//       title: "Whale",
//       data: whales.map((whale) => ({ id: whale.id, title: whale.name })),
//     },
//   ] as const;

//   return (
//     <View style={styles.container}>
//       <HomeScreenHeader />
//       <SectionList
//         sections={data}
//         keyExtractor={(item) => item.id}
//         renderSectionHeader={({ section }) => (
//           <View style={{ padding: 16 }}>
//             <Text size="lg">{section.title}s</Text>
//           </View>
//         )}
//         renderItem={({ item, section }) => (
//           <View style={{ paddingHorizontal: 20, paddingVertical: 6 }}>
//             <Link>{item.title}</Link>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

const HomeScreenHeader = () => (
  <View style={{ ...styles.row, gap: 16, backgroundColor: colors.orcaBlue, paddingVertical: 16 }}>
    <View style={{ paddingLeft: 18 }}>
      <MaterialCommunityIcons name="dolphin" color={colors.white} size={28} />
    </View>
    <View style={{ flex: 1 }}>
      <Text size="lg" color="white">
        The Daily Whale
      </Text>
    </View>
    <View style={{ paddingRight: 18 }}>
      <Pressable onPress={() => console.log("TODO")}>
        <MaterialCommunityIcons name="refresh" color={colors.white} size={28} />
      </Pressable>
    </View>
  </View>
);

export default HomeScreen;
