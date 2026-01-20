import { createStaticNavigation } from "@react-navigation/native";
import RootStack from "./navigators/RootStack.jsx";
import RootTabs from "./navigators/RootTabs.jsx";

const NavigationContainer = createStaticNavigation(RootStack);

export default () => <NavigationContainer />;
