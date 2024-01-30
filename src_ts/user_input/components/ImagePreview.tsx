import { Image, StyleSheet } from "react-native";

type Props = {
  source: string;
};

const ImagePreview = ({ source }: Props) => (
  <Image
    source={{ uri: source }}
    resizeMode="contain"
    style={imagePreviewStyles.image}
  />
);

const imagePreviewStyles = StyleSheet.create({
  image: {
    height: 200,
  },
});

export default ImagePreview;
