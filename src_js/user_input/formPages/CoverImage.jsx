import {
  MediaTypeOptions,
  launchCameraAsync,
  launchImageLibraryAsync,
} from "expo-image-picker";
import { View } from "react-native";
import { styles } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import Button from "../components/Button.jsx";
import ImagePreview from "../components/ImagePreview.jsx";

const CoverImage = ({ article, setArticle }) => {
  return (
    <View style={styles.gap}>
      <Text size="lg">Cover Image</Text>
      <Button icon="image">Upload an Image</Button>
      <Button icon="camera">Upload a Photo</Button>
      {article.imageSrc ? <ImagePreview source={article.imageSrc} /> : null}
    </View>
  );
};

export default CoverImage;
