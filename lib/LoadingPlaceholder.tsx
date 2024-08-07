import { ActivityIndicator, View } from "react-native";
import { colors, spacing } from "./styles.ts";

const LoadingPlaceholder = () => (
  <View style={{ padding: spacing.md }}>
    <ActivityIndicator color={colors.orcaBlue} />
  </View>
);

export default LoadingPlaceholder;
