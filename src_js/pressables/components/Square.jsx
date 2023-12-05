import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../../../lib/styles.ts";

const Square = ({ squares, index, gameState, play }) => (
  <Pressable style={squareStyles.square}>
    <Text>
      {squares[index] === "whale"
        ? "🐳"
        : squares[index] === "dolphin"
        ? "🐬"
        : ""}
    </Text>
  </Pressable>
);

const squareStyles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    borderColor: colors.orcaBlue,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  squarePressed: {
    backgroundColor: colors.electricAqua,
  },
  squareText: {
    fontSize: 50,
  },
  squareTextPressed: {
    fontSize: 32,
  },
});

export default Square;
