import { useNavigation } from "@react-navigation/core";
import { Pressable } from "react-native";
import { Text } from "../../../lib/base.tsx";
import styles, { colors } from "../../../lib/styles.ts";
import type { NavigationProp, Screen, ScreenParams } from "../routes.ts";

type Props = {
  children: string;
};

const Link = ({ children }: Props) => {
  const onPress = () => console.log("TODO");

  return (
    <Pressable onPress={onPress}>
      <Text
        style={{
          ...styles.text({ color: "oceanBlue" }),
          textDecorationLine: "underline",
        }}
      >
        {children}
      </Text>
    </Pressable>
  );
};

export default Link;
