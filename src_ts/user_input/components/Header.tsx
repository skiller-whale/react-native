import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";
import { colors, fontSizes, spacing } from "../../../lib/styles";
import { StyledText as Text } from "../../../lib/typography.tsx";

type Props = {
  goBack: () => void;
  goBackEnabled: boolean;
};

const Header = ({ goBack, goBackEnabled }: Props) => (
  <View style={headerStyles.header}>
    {goBackEnabled ? (
      <Pressable onPress={goBack}>
        <MaterialIcons
          name="arrow-back"
          color={colors.white}
          size={fontSizes.lg}
        />
      </Pressable>
    ) : null}
    <Text color="white" size="lg">
      The Daily Whale
    </Text>
  </View>
);

const headerStyles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.orcaBlue,
    padding: spacing.md,
    gap: spacing.md,
  },
});

export default Header;
