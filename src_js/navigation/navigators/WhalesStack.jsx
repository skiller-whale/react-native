import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../../../lib/styles.ts";
import WhalesIndex from "../components/WhalesIndex.jsx";
import WhaleScreen from "../screens/Whale.jsx";
import { getWhaleNameFromID } from "../utils.js";

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
        const { id } = route.params;
        return { title: getWhaleNameFromID(id) };
      },
    },
  },
});

export default WhalesStack;
