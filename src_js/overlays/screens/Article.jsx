import { useContext, useEffect, useState } from "react";
import { Modal, ScrollView, StyleSheet, View } from "react-native";
import articles from "../../../lib/data/articles.ts";
import {
  colors,
  fontFamilies,
  fontSizes,
  spacing,
  styles,
} from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import { StateContext } from "../State.js";
import ArticleFeedback from "../components/ArticleFeedback.jsx";
import LoginModal from "../screens/Login.jsx";

const ArticleScreen = ({ navigation, route }) => {
  // find article
  const { id } = route.params;
  const article = articles.find((article) => article.id === id);
  if (!article) {
    return (
      <ScrollView style={styles.container}>
        <View style={articleScreenStyles.articleContainer}>
          <Text style={articleScreenStyles.articleTitle}>
            Article not found
          </Text>
        </View>
      </ScrollView>
    );
  }

  // get global state
  const state = useContext(StateContext);

  // screen mount effects
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!state.loggedIn) {
        setModalVisible(true);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={articleScreenStyles.container}>
        <View style={articleScreenStyles.articleContainer}>
          <Text style={articleScreenStyles.articleTitle}>{article.title}</Text>
          {article.content.map((paragraph, index) => (
            <Text key={index}>{paragraph}</Text>
          ))}
        </View>
      </ScrollView>
      {/* {state.loggedIn && !state.articlesWithFeedback.includes(article.id) ? (
        <ArticleFeedback articleId={article.id} />
      ) : null} */}
    </View>
  );
};

const articleScreenStyles = StyleSheet.create({
  container: {
    gap: spacing.xl,
    paddingBottom: 30,
  },
  articleContainer: {
    gap: spacing.md,
    padding: spacing.md,
  },
  articleTitle: {
    fontFamily: fontFamilies.serif,
    fontSize: fontSizes.lg,
    textAlign: "center",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 6 },
    shadowRadius: 8,
    elevation: 9,
  },
  bottomSheetContainer: {
    backgroundColor: colors.lightGrey,
  },
  bottomSheetContent: {
    flex: 1,
    padding: spacing.md,
    borderRadius: 0,
  },
});

export default ArticleScreen;
