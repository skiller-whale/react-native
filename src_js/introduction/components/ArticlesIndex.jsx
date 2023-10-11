import { Pressable, Text, View } from "react-native";
import { colors } from "../../../lib/styles.ts";

const ArticlesIndex = ({ articles, setArticle }) => (
  <View style={{ padding: 16, gap: 10 }}>
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
  </View>
);

export default ArticlesIndex;
