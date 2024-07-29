import { StyleSheet, View } from "react-native";
import { spacing, styles } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";

const NotFoundScreen = () => (
  <View style={[styles.container, notFoundScreenStyles.container]}>
    <Text>Oops!</Text>
  </View>
);

const notFoundScreenStyles = StyleSheet.create({
  container: {
    padding: spacing.md,
    gap: spacing.md,
  },
});

export default NotFoundScreen;
