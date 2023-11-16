import { StyleSheet, View } from "react-native";
import { StyledText as Text } from "../styles/typography.jsx";
import { colors, sizes, spacing } from "../styles/styles.js";

const Header = () => (
  <View style={headerStyles.header}>
    <Text style={headerStyles.headerText}>The Daily Whale</Text>
  </View>
);

const headerStyles = StyleSheet.create({
  header: {
    backgroundColor: colors.blue,
    padding: spacing.lg,
  },
  headerText: {
    fontSize: sizes.xl,
    color: colors.white,
  },
});

export default Header;
