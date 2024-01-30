import { Image, StyleSheet } from "react-native";

const ImagePreview = ({ source }) => (
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
