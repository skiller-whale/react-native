import { Image, ImageBackground, Text, View } from "react-native";
import articles from "../../../lib/data/articles.ts";

const Pictures = () => (
  <View style={{ padding: 12, gap: 12 }}>
    {articles.map((article) => (
      <View key={article.id}>
        <Image source={article.image} style={{ height: 180, width: 180 }} />
        <Text
          style={{
            backgroundColor: "darkblue",
            color: "white",
            paddingHorizontal: 4,
            alignSelf: "center",
          }}
        >
          {article.title}
        </Text>
      </View>
    ))}
  </View>
);

export default Pictures;
