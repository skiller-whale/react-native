import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useContext, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-root-toast";
import { spacing, styles } from "../../../lib/styles.ts";
import { DispatchContext } from "../State.js";
import Button from "../components/Button.jsx";
import TextInput from "../components/TextInput.jsx";

const ArticleFeedback = ({ route }) => {
  const { id } = route.params;
  const navigation = useNavigation();
  const dispatch = useContext(DispatchContext);

  return (
    <View style={[articleFeedbackStyles.container]}>
      <Button onPress={() => {}} title="Give feedback" />
      <View style={articleFeedbackStyles.stars}>
        <MaterialCommunityIcons name="star" size={24} color="blue" />
        <MaterialCommunityIcons name="star" size={24} color="blue" />
        <MaterialCommunityIcons name="star" size={24} color="blue" />
        <MaterialCommunityIcons name="star" size={24} color="blue" />
        <MaterialCommunityIcons name="star" size={24} color="blue" />
      </View>
      <TextInput placeholder="Leave a comment" multiline={true} />
      <Button onPress={() => {}} title="Submit" />
    </View>
  );
};

const articleFeedbackStyles = StyleSheet.create({
  container: {
    padding: spacing.md,
    paddingTop: 0,
    gap: spacing.md,
  },
  stars: {
    flexDirection: "row",
    gap: spacing.md,
    justifyContent: "center",
  },
});

export default ArticleFeedback;
