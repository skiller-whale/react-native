import { useFocusEffect } from "@react-navigation/native";
import { useContext } from "react";
import { BackHandler, StyleSheet, View } from "react-native";
import { colors, spacing, styles } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import { DispatchContext } from "../State.ts";
import Button from "../components/Button.tsx";
import TextInput from "../components/TextInput.tsx";
import type { BaseStackScreenProps } from "../routes.ts";

type Props = {
  automatic: boolean;
  goHome: () => void;
  goBack: () => void;
};

// type Props = BaseStackScreenProps<"Login">;

const LoginModal = ({ automatic, goHome, goBack }: Props) => {
  const dispatch = useContext(DispatchContext);

  const login = () => {
    dispatch({ type: "login" });
    goBack();
  };
  // const goBack = () => { /* ... */ };
  // const goHome = () => { /* ... */ };

  return (
    <View style={modalStyles.wrapper}>
      <View style={modalStyles.container}>
        <View style={modalStyles.header}>
          <Text>Login</Text>
        </View>
        <View style={modalStyles.body}>
          {automatic ? (
            <Text>
              You have no free articles remaining. Please log in to continue
              reading.
            </Text>
          ) : null}
          <TextInput placeholder="username" />
          <TextInput placeholder="password" />
          <View style={modalStyles.buttons}>
            <Button
              style={modalStyles.button}
              onPress={automatic ? goHome : goBack}
              title="Cancel"
            />
            <Button style={modalStyles.button} onPress={login} title="Login" />
          </View>
        </View>
      </View>
    </View>
  );
};

const modalStyles = StyleSheet.create({
  wrapper: {},
  container: {
    width: "80%",
    backgroundColor: colors.white,
    ...styles.shadow,
  },
  header: {
    padding: spacing.md,
    backgroundColor: colors.coralOrange,
  },
  body: {
    padding: spacing.md,
    gap: spacing.md,
  },
  buttons: {
    flexDirection: "row",
    gap: spacing.md,
  },
  button: {
    flex: 1,
  },
});

export default LoginModal;
