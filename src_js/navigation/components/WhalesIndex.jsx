import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, View } from "react-native";
import whales from "../../../lib/data/whales.ts";
import { spacing, styles } from "../../../lib/styles.ts";
import Link from "../components/Link.jsx";

const WhalesIndex = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={whales}
        renderItem={({ item }) => (
          <View style={whalesIndexStyles.listItem}>
            <Link onPress={() => navigation.push("Whale", { id: item.id })}>
              {item.name}
            </Link>
          </View>
        )}
      />
    </View>
  );
};

const whalesIndexStyles = StyleSheet.create({
  listItem: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
});

export default WhalesIndex;
