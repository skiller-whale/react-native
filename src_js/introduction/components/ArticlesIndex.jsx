import { Pressable, ScrollView, Text } from "react-native";
import { colors } from "../../../lib/styles.ts";

const ArticlesIndex = ({ articles, setArticle }) => (
  <ScrollView style={{ flex: 1, padding: 16, gap: 10 }}>
    {articles.length === 0 ? (
      <Text style={{ fontSize: 16 }}>There are no articles today :(</Text>
    ) : (
      articles.map((article) => (
        <Text
          key={article.id}
          style={{
            fontSize: 16,
            color: colors.oceanBlue,
            textDecorationLine: "underline",
          }}
        >
          {article.title}
        </Text>
      ))
    )}
  </ScrollView>
);

export default ArticlesIndex;
