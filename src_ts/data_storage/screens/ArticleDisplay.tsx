import { Image, ScrollView, StyleSheet, View } from "react-native";
import {
  colors,
  fontFamilies,
  fontSizes,
  spacing,
  styles,
} from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import { type BaseStackScreenProps } from "../routes.ts";
import { useArticles } from "../state/Articles.tsx";
import { useSettings } from "../state/Settings.tsx";

const ArticleDisplay = ({ route }: BaseStackScreenProps<"Article">) => {
  const { id } = route.params;
  const { articles, isOnline } = useArticles();
  const article = articles.find((article) => article.id === id)!;

  const { fontFamily, fontSize } = useSettings();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={articleStyles.article}
    >
      {isOnline ? null : (
        <View style={articleStyles.offline}>
          <Text style={articleStyles.offlineText}>you are offline</Text>
        </View>
      )}
      <Text style={articleStyles.heading} font={fontFamily}>
        {article.title}
      </Text>
      <Image
        src={article.imageSrc}
        style={articleStyles.image}
        resizeMode="contain"
      />
      {article.content.map((text, index) => (
        <Text key={index} font={fontFamily} size={fontSize}>
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
  offline: {
    backgroundColor: colors.coralOrange,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  offlineText: {
    fontWeight: "700",
    color: colors.white,
  },
  heading: {
    fontFamily: fontFamilies.serif,
    fontWeight: "600",
    fontSize: fontSizes.xl,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
});

export default ArticleDisplay;
