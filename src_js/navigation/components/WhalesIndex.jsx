import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, View } from "react-native";
import whales from "../../../lib/data/whales.ts";
import { spacing, styles } from "../../../lib/styles.ts";
import Link from "../components/Link.jsx";

const WhalesIndex = ({ nested = false }) => {
  const navigation = useNavigation();

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={whalesIndexStyles.container}
      scrollEnabled={!nested}
      data={whales}
      renderItem={({ item }) => (
        <View style={whalesIndexStyles.listItem}>
          <Link onPress={() => navigation.push("Whale", { id: item.id })}>
            {item.name}
          </Link>
        </View>
      )}
    />
  );
};

const whalesIndexStyles = StyleSheet.create({
  container: {
    padding: spacing.md,
    gap: spacing.sm,
  },
});

export default WhalesIndex;
