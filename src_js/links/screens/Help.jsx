import { ScrollView, StyleSheet } from "react-native";
import * as Linking from "expo-linking";
import { openBrowserAsync } from "expo-web-browser";
import { spacing, styles } from "../../../lib/styles.ts";
import Link from "../components/Link.jsx";

const deepLinkTesterUrl = "https://skiller-whale.github.io/deep-link-tester";

const helplineNumber = "+123456789";

const HelpScreen = () => {
  const openHelpPageExternally = () => {};

  const openHelpPageInternally = () => {};

  const callHelpline = () => {};

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={helpScreenStyles.container}
    >
      <Link onPress={openHelpPageExternally}>View Help Page (external)</Link>
      <Link onPress={openHelpPageInternally}>View Help Page (internal)</Link>
      <Link onPress={callHelpline}>Call Helpline</Link>
    </ScrollView>
  );
};

const helpScreenStyles = StyleSheet.create({
  container: {
    padding: spacing.md,
    gap: spacing.md,
  },
});

export default HelpScreen;
