import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import type { Whale } from "../../../lib/data/whales.ts";
import { spacing } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import type { BaseStackScreenProps } from "../routes.ts";
import Link from "./Link.tsx";

type Props = {
  whales: Whale[];
};

const RelatedWhales = ({ whales }: Props) => {
  const navigation = useNavigation<BaseStackScreenProps["navigation"]>();

  return (
    <View style={articlesStyles.container}>
      <Text size="lg">Related Whales</Text>
      {whales.length ? (
        whales.map((whale) => (
          <Link
            key={whale.id}
            onPress={() => navigation.push("Whale", { id: whale.id })}
          >
            {whale.name}
          </Link>
        ))
      ) : (
        <Text>None</Text>
      )}
    </View>
  );
};

const articlesStyles = StyleSheet.create({
  container: {
    padding: spacing.md,
    gap: spacing.md,
  },
});

export default RelatedWhales;
