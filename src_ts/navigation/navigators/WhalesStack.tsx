import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../../../lib/styles.ts";
import WhalesIndex from "../components/WhalesIndex.tsx";
import WhaleScreen, { type WhaleScreenParams } from "../screens/Whale.tsx";
import { getWhaleNameFromID } from "../utils.ts";

const WhalesStack = createNativeStackNavigator({
  initialRouteName: "WhalesIndex",
  screenOptions: {
    headerStyle: { backgroundColor: colors.orcaBlue },
    headerTintColor: colors.white,
  },
  screens: {
    WhalesIndex: {
      screen: WhalesIndex,
      options: {
        headerLeft: () => null,
        headerTitle: "Whales",
      },
    },
    Whale: {
      screen: WhaleScreen,
      options: ({ route }) => {
        const { id } = route.params as WhaleScreenParams;
        return { title: getWhaleNameFromID(id) };
      },
    },
  },
});

export default WhalesStack;
