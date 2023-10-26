import { Text, View } from "../styles/core.jsx";
import { colors, sizes, spacing } from "../styles/styles.js";

const Header = () => (
  <View style={headerStyles.header}>
    <Text style={headerStyles.headerText}>The Daily Whale</Text>
  </View>
);

const headerStyles = {
  header: {
    backgroundColor: colors.blue,
    padding: spacing.lg,
  },
  headerText: {
    fontSize: sizes.xl,
    color: colors.white,
  },
};

export default Header;
