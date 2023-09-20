import { Pressable } from "react-native";
import type { StackParamList, StackRoute, StackNavigationProp } from "../routes.ts";
import styles, { colors } from "../../../lib/styles.ts";
import { useNavigation } from "@react-navigation/core";

type Props = {
  children: string;
};

const Link = ({ children }: Props) => {
  const onPress = () => {};

  return (
    <Pressable onPress={onPress} style={({ pressed }) => (pressed ? pressedStyle : normalStyle)}>
      {children}
    </Pressable>
  );
};

const normalStyle = {
  ...styles.text({}),
  color: colors.oceanBlue,
  textDecorationLine: "underline",
};

const pressedStyle = {
  ...normalStyle,
  color: colors.orcaBlue,
};

export default Link;
