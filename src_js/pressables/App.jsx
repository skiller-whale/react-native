import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { spacing, styles } from "../../lib/styles.ts";
import { StyledText as Text } from "../../lib/typography.tsx";
import Button from "./components/Button.jsx";
import Feedback from "./components/Feedback.jsx";
import Header from "./components/Header.jsx";
import WhalesAndDolphins from "./components/WhalesAndDolphins.jsx";

const App = () => {
  const [started, setStarted] = useState(false);

  return (
    <View style={styles.container}>
      <Header goBack={() => setStarted(false)} goBackEnabled={started} />
      <View style={styles.container}>
        {started ? (
          <WhalesAndDolphins />
        ) : (
          <View style={appStyles.gameList}>
            <Text size="lg">Play Games</Text>
            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed ? styles.buttonPressed : {},
              ]}
            >
              <Text style={styles.buttonText}>Whales and Dolphins</Text>
            </Pressable>
            <Pressable
              disabled
              style={{ ...styles.buttonPressed, ...styles.buttonDisabled }}
            >
              <Text>Seadoku</Text>
            </Pressable>
            <Pressable disabled>
              <Text>Brinesweeper</Text>
            </Pressable>
            <Pressable disabled>
              <Text>Pac-Manatee</Text>
            </Pressable>
            <Pressable disabled>
              <Text>Flight Swimulator</Text>
            </Pressable>
          </View>
        )}
      </View>
      <Feedback />
    </View>
  );
};

const appStyles = StyleSheet.create({
  gameList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.lg,
  },
});

export default App;
