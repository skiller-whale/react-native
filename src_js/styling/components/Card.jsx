import { StyleSheet, Text, View } from "react-native";
import { colors, fonts, sizes, spacing, styles } from "../styles/styles.js";

const Card = ({ children }) => (
  <View>{children}</View>
);

Card.Title = ({ children }) => (
  <Text>{children}</Text>
);

Card.Content = ({ children }) => (
  <View>{children}</View>
);

export default Card;
