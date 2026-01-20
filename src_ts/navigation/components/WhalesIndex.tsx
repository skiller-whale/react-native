import { FlatList, StyleSheet } from "react-native";
import whales from "../../../lib/data/whales.ts";
import { spacing, styles } from "../../../lib/styles.ts";
import Link from "../components/Link.tsx";

type Props = {
  nested?: boolean;
};

const WhalesIndex = ({ nested = false }: Props) => (
  <FlatList
    style={styles.container}
    contentContainerStyle={whalesIndexStyles.container}
    scrollEnabled={!nested}
    data={whales}
    renderItem={({ item }) => (
      <Link screen="Whale" params={{ id: item.id }}>
        {item.name}
      </Link>
    )}
  />
);

const whalesIndexStyles = StyleSheet.create({
  container: {
    padding: spacing.md,
    gap: spacing.sm,
  },
});

export default WhalesIndex;
