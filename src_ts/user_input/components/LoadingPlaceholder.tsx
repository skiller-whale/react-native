import { ActivityIndicator, StyleSheet, View } from "react-native";
import { colors, spacing } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";

type Props = {
  message: string;
};

const LoadingPlaceholder = ({ message }: Props) => (
  <View style={loadingPlaceholderStyles.container}>
    <ActivityIndicator size="large" color={colors.orcaBlue} />
    <Text style={loadingPlaceholderStyles.message}>{message}</Text>
  </View>
);

const loadingPlaceholderStyles = StyleSheet.create({
  container: {
    padding: spacing.md,
    gap: spacing.sm,
  },
  message: {
    textAlign: "center",
  },
});

export default LoadingPlaceholder;
