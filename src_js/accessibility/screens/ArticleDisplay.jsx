import { Image, ScrollView, StyleSheet } from "react-native";
import articles from "../../../lib/data/articles.ts";
import {
  colors,
  fontFamilies,
  fontSizes,
  spacing,
} from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import { useAccessibilityState } from "../AccessibilityState.jsx";
import { opacity } from "../constants.js";

const ArticleDisplay = ({ route }) => {
  const { id } = route.params;
  const article = articles.find((article) => article.id === id);

  const { isScreenReaderEnabled } = useAccessibilityState();

  return (
    <ScrollView contentContainerStyle={articleStyles.article}>
      <Text style={articleStyles.heading}>{article.title}</Text>
      {isScreenReaderEnabled ? (
        <Text style={articleStyles.text}>
          This article contains 1 image and {article.content.length} paragraphs.
        </Text>
      ) : null}
      <Image
        source={article.image}
        style={articleStyles.image}
        resizeMode="contain"
      />
      {article.content.map((text, index) => (
        <Text key={index} style={articleStyles.text}>
          {text}
        </Text>
      ))}
    </ScrollView>
  );
};

const articleStyles = StyleSheet.create({
  article: {
    padding: spacing.md,
    gap: spacing.md,
  },
  heading: {
    fontFamily: fontFamilies.serif,
    fontWeight: "600",
    fontSize: fontSizes.xl,
    textAlign: "center",
    color: colors.midGrey,
    opacity,
  },
  image: {
    width: "100%",
    height: 200,
    opacity,
  },
  text: {
    color: colors.midGrey,
    opacity,
  },
});

export default ArticleDisplay;
