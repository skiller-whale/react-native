import { StyleSheet, Text, View } from "react-native";
import { colors, fonts, sizes, spacing, styles } from "../styles/styles.ts";

type Props = {
  children: React.ReactNode;
};

const Card = ({ children }: Props) => <View>{children}</View>;

Card.Title = ({ children }: Props) => <Text>{children}</Text>;

Card.Content = ({ children }: Props) => <View>{children}</View>;

export default Card;
