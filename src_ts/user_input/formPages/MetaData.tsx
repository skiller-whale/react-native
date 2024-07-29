import type { Picker as RNPicker } from "@react-native-picker/picker";
import { useRef, type Dispatch, type SetStateAction } from "react";
import { TextInput as RNTextInput, StyleSheet, View } from "react-native";
import { articleTags } from "../../../lib/data/articles.ts";
import whales, { type WhaleId } from "../../../lib/data/whales.ts";
import { spacing, styles } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import type { Article } from "../dummyApi.ts";
import Checkbox from "../inputs/Checkbox.tsx";
import DateTimePicker from "../inputs/DatetimePicker.tsx";
import Picker from "../inputs/Picker.tsx";
import TextInput from "../inputs/TextInput.tsx";

const articleTagOptions = articleTags.map((tag) => ({
  label: `${tag[0].toUpperCase()}${tag.slice(1)}`,
  value: tag,
}));

type Props = {
  article: Article;
  setArticle: Dispatch<SetStateAction<Article>>;
};

const MetaData = ({ article, setArticle }: Props) => {
  const setArticleTitle = (title: string) => setArticle({ ...article, title });
  const setArticleAuthor = (author: string) =>
    setArticle({ ...article, author });
  const setArticleTag = (tag: string) => setArticle({ ...article, tag });
  const setArticleDate = (date: Date) => setArticle({ ...article, date });
  const toggleArticleWhale = (whaleId: WhaleId) => {
    const whales = article.whales.includes(whaleId)
      ? article.whales.filter((id) => id !== whaleId)
      : [...article.whales, whaleId];
    setArticle({ ...article, whales });
  };

  const authorInputRef = useRef<RNTextInput>(null);

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
            value={article.whales.includes(whale.id)}
            onPress={() => toggleArticleWhale(whale.id)}
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
