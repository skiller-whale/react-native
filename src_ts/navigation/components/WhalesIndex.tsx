import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, View } from "react-native";
import whales from "../../../lib/data/whales.ts";
import { spacing, styles } from "../../../lib/styles.ts";
import Link from "../components/Link.tsx";
import type { BaseStackScreenProps } from "../routes.ts";

type Props = {
  nested?: boolean;
};

const WhalesIndex = ({ nested = false }: Props) => {
  const navigation = useNavigation<BaseStackScreenProps["navigation"]>();

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={whalesIndexStyles.container}
      scrollEnabled={!nested}
      data={whales}
      renderItem={({ item }) => (
        <Link onPress={() => navigation.push("Whale", { id: item.id })}>
          {item.name}
        </Link>
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
