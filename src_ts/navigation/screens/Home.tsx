import { ScrollView, StyleSheet, View } from "react-native";
import { spacing, styles } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import ArticlesIndex from "../components/ArticlesIndex.tsx";
import WhalesIndex from "../components/WhalesIndex.tsx";

const HomeScreen = () => (
  <ScrollView
    style={styles.container}
    contentContainerStyle={[homeScreenStyles.container]}
  >
    <View>
      <Text size="lg">Articles</Text>
      <ArticlesIndex nested={true} />
    </View>
    <View>
      <Text size="lg">Whales</Text>
      <WhalesIndex nested={true} />
    </View>
  </ScrollView>
);

const homeScreenStyles = StyleSheet.create({
  container: {
    padding: spacing.md,
    gap: spacing.lg,
  },
});

export default HomeScreen;
