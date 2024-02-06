import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { spacing } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import Link from "./Link.jsx";

const RelatedWhales = ({ whales }) => {
  const navigation = useNavigation();

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
