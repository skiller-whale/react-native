import { Text, View } from "react-native";
import articles from "../../../lib/data/articles.ts";
import Card from "../components/Card.tsx";
import { styles } from "../styles/styles.ts";

const Articles = () => (
  <View>
    {articles.map((article) => (
      <Card key={article.id}>
        <Card.Title>{article.title}</Card.Title>
        <Card.Content>
          <Text>{article.content}</Text>
        </Card.Content>
      </Card>
    ))}
  </View>
);

export default Articles;
