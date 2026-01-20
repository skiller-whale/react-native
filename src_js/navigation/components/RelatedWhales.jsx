import { FlatList, StyleSheet } from "react-native";
import { spacing } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import Link from "./Link.jsx";

const RelatedWhales = ({ whales }) => (
  <FlatList
    contentContainerStyle={articlesStyles.container}
    scrollEnabled={false}
    data={whales}
    ListHeaderComponent={() => <Text size="lg">Related Whales</Text>}
    ListEmptyComponent={() => <Text>None</Text>}
    renderItem={({ item }) => (
      <Link screen="Whale" params={{ id: item.id }}>
        {item.name}
      </Link>
    )}
  />
);

const articlesStyles = StyleSheet.create({
  container: {
    padding: spacing.md,
    gap: spacing.sm,
  },
});

export default RelatedWhales;
