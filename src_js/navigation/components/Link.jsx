import { useNavigation } from "@react-navigation/core";
import { Pressable } from "react-native";
import { StyledText as Text } from "../../../lib/typography.tsx";

const Link = ({ screen, params, children }) => {
  const navigation = useNavigation();
  const onPress = () => navigation.push(screen, params);

  return (
    <Pressable onPress={onPress}>
      <Text color="oceanBlue" style={{ textDecorationLine: "underline" }}>
        {children}
      </Text>
    </Pressable>
  );
};

export default Link;
