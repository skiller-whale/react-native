import { useNavigation } from "@react-navigation/core";
import { Pressable } from "react-native";
import { Text } from "../../../lib/base.tsx";
import styles from "../../../lib/styles.ts";

const Link = ({ children }) => {
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
