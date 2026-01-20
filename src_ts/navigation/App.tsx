import { createStaticNavigation } from "@react-navigation/native";
import RootStack from "./navigators/RootStack.tsx";
import RootTabs from "./navigators/RootTabs.tsx";

const NavigationContainer = createStaticNavigation(RootStack);

export default () => <NavigationContainer />;
