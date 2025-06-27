import type { PropsWithChildren } from "react";
import { Pressable, StyleSheet } from "react-native";
import { colors } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";

type Props = PropsWithChildren<{
  onPress: () => void;
}>;

const Link = ({ onPress, children }: Props) => (
  <Pressable onPress={onPress}>
    <Text style={linkStyles.text}>{children}</Text>
  </Pressable>
);

const linkStyles = StyleSheet.create({
  text: {
    color: colors.oceanBlue,
    textDecorationLine: "underline",
  },
});

export default Link;
