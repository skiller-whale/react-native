import { Pressable, StyleSheet, View } from "react-native";
import { colors, fontSizes, spacing } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import useGame from "../hooks/useGame.js";
import Button from "./Button.jsx";
import Square from "./Square.jsx";

const WhalesAndDolphins = () => {
  const [squares, gameState, startGame, play] = useGame();

  return (
    <View style={gameStyles.container}>
      <Text style={gameStyles.title}>Whales and Dolphins</Text>
      <View style={gameStyles.board}>
        <View style={gameStyles.row}>
          {[0, 1, 2].map((index) => (
            <Square
              key={index}
              squares={squares}
              index={index}
              gameState={gameState}
              play={play}
            />
          ))}
        </View>
        <View style={gameStyles.row}>
          {[3, 4, 5].map((index) => (
            <Square
              key={index}
              squares={squares}
              index={index}
              gameState={gameState}
              play={play}
            />
          ))}
        </View>
        <View style={gameStyles.row}>
          {[6, 7, 8].map((index) => (
            <Square
              key={index}
              squares={squares}
              index={index}
              gameState={gameState}
              play={play}
            />
          ))}
        </View>
      </View>
      <View style={gameStyles.resultContainer}>
        {gameState !== "playing" ? (
          <>
            <Text style={gameStyles.result}>You {gameState}!</Text>
            <Pressable onPress={startGame}>
              <Text>Play Again</Text>
            </Pressable>
          </>
        ) : null}
      </View>
    </View>
  );
};

const gameStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.lg,
  },
  title: {
    fontSize: fontSizes.xl,
    textAlign: "center",
    color: colors.orcaBlue,
  },
  board: {
    borderColor: colors.orcaBlue,
    borderWidth: 1,
  },
  row: {
    flexDirection: "row",
  },
  resultContainer: {
    height: 100,
    gap: spacing.md,
  },
  result: {
    fontSize: fontSizes.lg,
    textAlign: "center",
  },
});

export default WhalesAndDolphins;
