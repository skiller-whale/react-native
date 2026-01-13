import { useNavigation } from "@react-navigation/core";
import { Pressable } from "react-native";
import { StyledText as Text } from "../../../lib/typography.tsx";

const Link = ({ children }) => {
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
