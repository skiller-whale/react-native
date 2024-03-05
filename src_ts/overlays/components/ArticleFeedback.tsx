import { MaterialCommunityIcons } from "@expo/vector-icons";
import BottomSheet from "@gorhom/bottom-sheet";
import { useContext, useRef } from "react";
import { StyleSheet, View } from "react-native";
import Toast from "react-native-root-toast";
import { spacing, styles } from "../../../lib/styles.ts";
import { DispatchContext } from "../State.ts";
import Button from "./Button.tsx";
import TextInput from "./TextInput.tsx";

type Props = {
  articleId: string;
};

const ArticleFeedback = ({ articleId }: Props) => {
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
      <Button
        onPress={() => {
          dispatch({ type: "submitFeedback", articleId });
        }}
        title="Submit"
      />
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
