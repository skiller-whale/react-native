import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../../../lib/styles.ts";
import type { GameState, SquareState } from "../hooks/useGame.ts";

type Props = {
  squares: SquareState[];
  index: number;
  gameState: GameState;
  play: (squareIndex: number) => void;
};

const Square = ({ squares, index, gameState, play }: Props) => (
  <Pressable style={squareStyles.square}>
    <Text style={squareStyles.squareText}>
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
});

export default Square;
