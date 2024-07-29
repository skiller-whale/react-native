import { MaterialIcons } from "@expo/vector-icons";
import { useRef } from "react";
import {
  type NativeScrollEvent,
  type NativeSyntheticEvent,
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import type { Article } from "../../../lib/data/articles.ts";
import { colors, spacing } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import ArticleDisplay from "./ArticleDisplay.tsx";

const windowWidth = Dimensions.get("window").width;

type Props = {
  selectedArticleId: string;
  articles: Article[];
  updateArticle: (article: Article) => void;
};

const ArticleScroller = ({
  selectedArticleId,
  articles,
  updateArticle,
}: Props) => {
  const flatListRef = useRef<FlatList>(null);
  const indexRef = useRef(
    articles.findIndex((a) => a.id === selectedArticleId),
  );

  const next = () => {
    indexRef.current++;
    // complete the implementation of this function
  };
  const prev = () => {
    indexRef.current--;
    // complete the implementation of this function
  };

  const getIndexFromOffset = (offset: number) => {
    const index = offset / windowWidth;
    return Math.round(index);
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    // complete the implementation of this function
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={articleScrollerStyles.links}>
        <Pressable style={articleScrollerStyles.link} onPress={prev}>
          <ArrowLeft />
          <Text style={articleScrollerStyles.linkText}>previous article</Text>
        </Pressable>
        <Pressable style={articleScrollerStyles.link} onPress={next}>
          <Text style={articleScrollerStyles.linkText}>next article</Text>
          <ArrowRight />
        </Pressable>
      </View>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ArticleDisplay article={item} updateArticle={updateArticle} />
        )}
      />
    </View>
  );
};

const ArrowLeft = () => (
  <MaterialIcons
    name="keyboard-arrow-left"
    size={16}
    color={colors.coralOrange}
  />
);

const ArrowRight = () => (
  <MaterialIcons
    name="keyboard-arrow-right"
    size={16}
    color={colors.coralOrange}
  />
);

const articleScrollerStyles = StyleSheet.create({
  links: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.lightGrey,
  },
  link: {
    flexDirection: "row",
    alignItems: "center",
    padding: spacing.md,
  },
  linkText: {
    color: colors.coralOrange,
  },
});

export default ArticleScroller;
