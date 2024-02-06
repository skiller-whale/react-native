import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../../../lib/styles.ts";
import WhalesIndex from "../components/WhalesIndex.jsx";
import { getWhaleNameFromID } from "../utils.js";
import WhaleScreen from "./Whale.jsx";

const Stack = createNativeStackNavigator();

const WhalesStackScreen = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.orcaBlue },
      headerTintColor: colors.white,
    }}
  >
    <Stack.Screen
      name="WhalesIndex"
      component={WhalesIndex}
      options={{
        headerLeft: () => null,
        headerTitle: "Whales",
      }}
    />
    <Stack.Screen
      name="Whale"
      component={WhaleScreen}
      options={({ route }) => {
        const { id } = route.params;
        return { title: getWhaleNameFromID(id) };
      }}
    />
  </Stack.Navigator>
);

export default WhalesStackScreen;
