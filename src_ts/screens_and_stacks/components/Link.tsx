import { useNavigation } from "@react-navigation/core";
import { Pressable } from "react-native";
import { StyledText as Text } from "../../../lib/typography.tsx";
import type { NavigationProp, Screen, ScreenParams } from "../routes.ts";

type Props = {
  children: string;
};

const Link = ({ children }: Props) => {
  const onPress = () => console.log("TODO");

  return (
    <Pressable onPress={onPress}>
      <Text color="oceanBlue" style={{ textDecorationLine: "underline" }}>
        {children}
      </Text>
    </Pressable>
  );
};

export default Link;
