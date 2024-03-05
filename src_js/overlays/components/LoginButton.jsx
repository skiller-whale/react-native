import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { Alert, Pressable } from "react-native";
import { colors, spacing } from "../../../lib/styles.ts";
import { DispatchContext, StateContext } from "../State.js";

const LoginButton = () => {
  const navigation = useNavigation();

  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const showLogoutPrompt = () => {
    // todo
  };
  const showLoginPrompt = () => {
    // todo
  };

  return (
    <Pressable
      style={{ paddingRight: spacing.md }}
      onPress={state.loggedIn ? showLogoutPrompt : showLoginPrompt}
    >
      <MaterialCommunityIcons
        name={state.loggedIn ? "logout" : "login"}
        color={colors.white}
        size={28}
      />
    </Pressable>
  );
};

export default LoginButton;
