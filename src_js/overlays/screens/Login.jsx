import { useFocusEffect } from "@react-navigation/native";
import { useContext } from "react";
import { BackHandler, StyleSheet, View } from "react-native";
import { colors, spacing, styles } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import { DispatchContext } from "../State.js";
import Button from "../components/Button.jsx";
import TextInput from "../components/TextInput.jsx";

const Login = ({ automatic, goHome, goBack }) => {
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
            <Button onPress={automatic ? goHome : goBack} title="Cancel" />
            <Button onPress={login} title="Login" />
          </View>
        </View>
      </View>
    </View>
  );
};

const modalStyles = StyleSheet.create({
  wrapper: {},
  container: {
    backgroundColor: "white",
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
});

export default Login;
