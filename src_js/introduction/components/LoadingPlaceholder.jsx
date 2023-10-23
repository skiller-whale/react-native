import { ActivityIndicator, Text, View } from "react-native";
import { colors } from "../../../lib/styles.ts";

const LoadingPlaceholder = () => (
  <View style={{ padding: 16, gap: 10 }}>
    <ActivityIndicator size="large" color={colors.orcaBlue} />
    <Text style={{ fontSize: 16, textAlign: "center" }}>Loading articles</Text>
  </View>
);

export default LoadingPlaceholder;
