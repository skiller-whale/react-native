import { StyleSheet, View } from "react-native";
import { fontFamilies, fontSizes, spacing } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";

type Props = {
  title: string;
  content: string;
};

const Article = ({ title, content }: Props) => (
  <View style={articleStyles.container}>
    <Text style={articleStyles.title}>
      {title}
    </Text>
    <Text>{content}</Text>
  </View>
);

const articleStyles = StyleSheet.create({
  container: {
    gap: spacing.md,
    padding: spacing.md,
  },
  title: {
    fontFamily: fontFamilies.serif,
    fontSize: fontSizes.lg,
    textAlign: "center",
  },
});

export default Article;
