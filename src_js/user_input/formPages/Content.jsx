import { Platform, StyleSheet, View } from "react-native";
import { styles } from "../../../lib/styles.ts";
import TextInput from "../inputs/TextInput.jsx";

const Content = ({ article, setArticle }) => {
  const setArticleContent = (content) => {
    setArticle({ ...article, content: content.split("\n\n") });
  };

  return (
    <View style={styles.gap}>
      <TextInput
        label="Content"
        value={article.content.join("\n\n")}
        onChangeText={setArticleContent}
        multiline
        textAlignVertical="top"
        numberOfLines={20}
        style={Platform.OS === "ios" ? contentStyles.textInputIOS : {}}
      />
    </View>
  );
};

const contentStyles = StyleSheet.create({
  textInputIOS: {
    minHeight: 300,
  },
});

export default Content;
