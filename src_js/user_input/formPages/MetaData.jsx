import { useRef } from "react";
import { TextInput as RNTextInput, StyleSheet, View } from "react-native";
import { articleTags } from "../../../lib/data/articles.ts";
import whales from "../../../lib/data/whales.ts";
import { spacing, styles } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import Checkbox from "../inputs/Checkbox.jsx";
import DateTimePicker from "../inputs/DatetimePicker.jsx";
import Picker from "../inputs/Picker.jsx";
import TextInput from "../inputs/TextInput.jsx";

const articleTagOptions = articleTags.map((tag) => ({
  label: `${tag[0].toUpperCase()}${tag.slice(1)}`,
  value: tag,
}));

const MetaData = ({ article, setArticle }) => {
  const setArticleTitle = (title) => setArticle({ ...article, title });
  const setArticleAuthor = (author) => setArticle({ ...article, author });
  const setArticleTag = (tag) => setArticle({ ...article, tag });
  const setArticleDate = (date) => setArticle({ ...article, date });
  const toggleArticleWhale = (whaleId) => {
    const whales = article.whales.includes(whaleId)
      ? article.whales.filter((id) => id !== whaleId)
      : [...article.whales, whaleId];
    setArticle({ ...article, whales });
  };

  const authorInputRef = useRef(null);

  return (
    <View style={styles.gap}>
      <Text size="lg">Basic Information</Text>
      <TextInput
        label="Title"
        autoFocus={true}
        nextInputRef={authorInputRef}
        value={article.title}
        onChangeText={setArticleTitle}
      />
      <TextInput
        label="Author"
        ref={authorInputRef}
        value={article.author}
        onChangeText={setArticleAuthor}
      />
      <DateTimePicker
        label="Date"
        value={article.date}
        onChange={(_, date) => {
          if (date) setArticleDate(date);
        }}
      />
      <Picker label="Tag" options={articleTagOptions} />
      <View style={metaDataStyles.checkboxes}>
        {whales.map((whale) => (
          <Checkbox
            key={whale.id}
            style={metaDataStyles.checkbox}
            label={whale.name}
          />
        ))}
      </View>
    </View>
  );
};

const metaDataStyles = StyleSheet.create({
  checkboxes: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
  },
  checkbox: {
    width: "45%",
  },
});

export default MetaData;
