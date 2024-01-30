import { View } from "react-native";
import { styles } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import ArticleDisplay from "../screens/ArticleDisplay.jsx";

const Submit = ({ article }) => {
  const articleTitleIsValid = article.title !== "";
  const articleAuthorIsValid = article.author !== "";
  const articleContentIsValid = article.content.length > 0;
  const articleImageIsValid = article.imageSrc !== "";
  const articleIsValid =
    articleTitleIsValid &&
    articleAuthorIsValid &&
    articleContentIsValid &&
    articleImageIsValid;

  return (
    <View style={styles.gap}>
      <Text size="lg">Review & Submit</Text>
      {articleIsValid ? (
        <ArticleDisplay isPreview={true} article={article} />
      ) : (
        <>
          <Text>
            Your article form has errors, please go back and fix them.
          </Text>
          {articleTitleIsValid ? null : <Text>- Title is required</Text>}
          {articleAuthorIsValid ? null : <Text>- Author is required</Text>}
          {articleContentIsValid ? null : <Text>- Content is required</Text>}
          {articleImageIsValid ? null : <Text>- Image is required</Text>}
        </>
      )}
    </View>
  );
};

export default Submit;
