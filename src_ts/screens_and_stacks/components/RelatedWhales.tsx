import { View } from "react-native";
import type { Whale } from "../../../lib/data/whales.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import Link from "./Link.tsx";

type Props = {
  whales: Whale[];
};

const RelatedWhales = ({ whales }: Props) => (
  <View style={articlesStyles.container}>
    <Text size="lg">Related Whales</Text>
    {whales.length ? (
      whales.map((whale) => <Link key={whale.id}>{whale.name}</Link>)
    ) : (
      <Text>None</Text>
    )}
  </View>
);

const articlesStyles = {
  container: {
    padding: 20,
    gap: 10,
  },
} as const;

export default RelatedWhales;
