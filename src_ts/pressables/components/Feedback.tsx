import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";
import { Bar as ProgressBar } from "react-native-progress";
import { colors, spacing } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import useRating from "../hooks/useRating.ts";
import Button from "./Button.tsx";

const Feedback = () => {
  const [rating, increment, decrement, start, stop] = useRating(0, 100);

  return (
    <View style={feedbackStyles.container}>
      <View style={feedbackStyles.progressBarContainer}>
        <Pressable onPress={decrement}>
          <MaterialCommunityIcons
            name="minus"
            size={16}
            color={colors.orcaBlue}
          />
        </Pressable>
        <View style={{ flex: 1 }}>
          <ProgressBar
            progress={rating / 100}
            color={colors.turquoise}
            borderColor={colors.orcaBlue}
            width={null}
            height={20}
          />
        </View>
        <Pressable onPress={increment}>
          <MaterialCommunityIcons
            name="plus"
            size={16}
            color={colors.orcaBlue}
          />
        </Pressable>
      </View>
      <View style={feedbackStyles.feedbackButtonContainer}>
        <Pressable>
          <Text>{`Rate Us! (${rating}/100)`}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const feedbackStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.electricAqua,
    paddingVertical: spacing.md,
    gap: spacing.md,
  },
  progressBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.sm,
    gap: spacing.sm,
  },
  feedbackButtonContainer: {
    paddingHorizontal: spacing.lg,
  },
});

export default Feedback;
