import "@expo/metro-runtime";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as Linking from "expo-linking";
import * as SplashScreen from "expo-splash-screen";
import { useReducer, useState } from "react";
import { Image, View } from "react-native";
import "react-native-gesture-handler";
import { useAsyncEffect } from "use-async-effect";
import assets from "./lib/assets.ts";
import { colors } from "./lib/styles.ts";
import { StyledText as Text } from "./lib/typography.tsx";
import Index from "./src_app/Index.tsx";
import Splash from "./src_app/Splash.tsx";
import {
  DispatchContext,
  StateContext,
  initialState,
  storedStateKey,
  updateAndStore,
} from "./src_app/State.tsx";
import type { ModuleStackParamList } from "./src_app/types.ts";

// JS modules
import AccessibilityJS from "./src_js/accessibility/App.jsx";
import AnimationsJS from "./src_js/animations/App.jsx";
import ComplexAnimationsJS from "./src_js/complex_animations/App.jsx";
import DebuggingJS from "./src_js/debugging/App.jsx";
import GesturesJS from "./src_js/gestures/App.jsx";
import IntroductionJS from "./src_js/introduction/App.jsx";
import LinksJS from "./src_js/links/App.jsx";
import ListsJS from "./src_js/lists/App.jsx";
import NavigationJS from "./src_js/navigation/App.jsx";
import OverlaysJS from "./src_js/overlays/App.jsx";
import PerformanceJS from "./src_js/performance/App.jsx";
import PressablesJS from "./src_js/pressables/App.jsx";
import ScreensAndStacksJS from "./src_js/screens_and_stacks/App.jsx";
import SecurityJS from "./src_js/security/App.jsx";
import StylingJS from "./src_js/styling/App.jsx";
import UserInputJS from "./src_js/user_input/App.jsx";

// TS modules
import AccessibilityTS from "./src_ts/accessibility/App.tsx";
import AnimationsTS from "./src_ts/animations/App.tsx";
import ComplexAnimationsTS from "./src_ts/complex_animations/App.tsx";
import DebuggingTS from "./src_ts/debugging/App.tsx";
import GesturesTS from "./src_ts/gestures/App.tsx";
import IntroductionTS from "./src_ts/introduction/App.tsx";
import LinksTS from "./src_ts/links/App.tsx";
import ListsTS from "./src_ts/lists/App.tsx";
import NavigationTS from "./src_ts/navigation/App.tsx";
import OverlaysTS from "./src_ts/overlays/App.tsx";
import PerformanceTS from "./src_ts/performance/App.tsx";
import PressablesTS from "./src_ts/pressables/App.tsx";
import ScreensAndStacksTS from "./src_ts/screens_and_stacks/App.tsx";
import SecurityTS from "./src_ts/security/App.tsx";
import StylingTS from "./src_ts/styling/App.tsx";
import UserInputTS from "./src_ts/user_input/App.tsx";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator<ModuleStackParamList>();

const prefix = Linking.createURL("/");

const linking = {
  prefixes: [prefix],
  config: {
    screens: {
      index: "index",
      "/js/introduction": "js/introduction",
      "/js/styling": "js/styling",
      "/js/lists": "js/lists",
      "/js/user_input": "js/user_input",
      "/js/pressables": "js/pressables",
      "/js/screens_and_stacks": "js/screens_and_stacks",
      "/js/navigation": "js/navigation",
      "/js/overlays": "js/overlays",
      "/js/animations": "js/animations",
      "/js/complex_animations": "js/complex_animations",
      "/js/gestures": "js/gestures",
      "/js/links": "js/links",
      "/js/links/two": "js/links/index",
      "/js/links/three": "js/links/help",
      "/js/links/four": "js/links/article/:id",
      "/js/security": "js/security",
      "/js/accessibility": "js/accessibility",
      "/js/debugging": "js/debugging",
      "/js/performance": "js/performance",
      "/ts/introduction": "ts/introduction",
      "/ts/styling": "ts/styling",
      "/ts/lists": "ts/lists",
      "/ts/user_input": "ts/user_input",
      "/ts/pressables": "ts/pressables",
      "/ts/screens_and_stacks": "ts/screens_and_stacks",
      "/ts/navigation": "ts/navigation",
      "/ts/overlays": "ts/overlays",
      "/ts/animations": "ts/animations",
      "/ts/complex_animations": "ts/complex_animations",
      "/ts/gestures": "ts/gestures",
      "/ts/links": "ts/links",
      "/ts/links/two": "ts/links/index",
      "/ts/links/three": "ts/links/help",
      "/ts/links/four": "ts/links/article/:id",
      "/ts/security": "ts/security",
      "/ts/accessibility": "ts/accessibility",
      "/ts/debugging": "ts/debugging",
      "/ts/performance": "ts/performance",
    },
  },
};

const App = () => {
  const [isReady, setIsReady] = useState(false);

  const [state, dispatch] = useReducer(updateAndStore, initialState);

  const [fontsLoaded] = useFonts({
    Exo: require("./assets/fonts/Exo2.ttf"),
    "Exo-Italic": require("./assets/fonts/Exo2-Italic.ttf"),
    Alegreya: require("./assets/fonts/Alegreya.ttf"),
    "Alegreya-Italic": require("./assets/fonts/Alegreya-Italic.ttf"),
  });

  useAsyncEffect(async () => {
    const initialURL = await Linking.getInitialURL();
    if (initialURL && !prefix.startsWith(initialURL)) {
      // let react navigation handle setting the navigation state from the deep link
      setIsReady(true);
      await SplashScreen.hideAsync();
    } else {
      // otherwise restore the previous navigation state from storage
      const storedState = await AsyncStorage.getItem(storedStateKey);
      if (storedState) {
        dispatch({ type: "set-state", state: JSON.parse(storedState) });
      }
      setIsReady(true);
      await SplashScreen.hideAsync();
    }
  }, []);

  return isReady && fontsLoaded ? (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <NavigationContainer
          initialState={state.navigationState}
          onStateChange={(navigationState) => {
            if (navigationState) {
              dispatch({ type: "set-navigation-state", navigationState });
            }
          }}
          linking={linking}
          fallback={<Splash />}
        >
          <Stack.Navigator
            id="ModuleStack"
            initialRouteName="index"
            screenOptions={({ route }) => ({
              headerStyle: { backgroundColor: colors.turquoise },
              headerTintColor: colors.orcaBlue,
              headerTitle: () => (
                <Text size="lg">
                  {route.name.split("/").slice(0, 3).join("/")}
                </Text>
              ),
              headerRight: () => (
                <View style={{ paddingRight: 16 }}>
                  <Image
                    source={assets.appImages.ada}
                    style={{ width: 30, height: 30 }}
                  />
                </View>
              ),
            })}
          >
            <Stack.Screen
              name="index"
              component={Index}
              options={{
                headerLeft: () => (
                  <View style={{ paddingHorizontal: 16 }}>
                    <Image
                      source={assets.appImages.icon}
                      style={{ width: 40, height: 40 }}
                    />
                  </View>
                ),
                headerRight: () => undefined,
                headerTitle: () => <Text size="lg">React Native Coaching</Text>,
              }}
            />
            <Stack.Screen name="/js/introduction" component={IntroductionJS} />
            <Stack.Screen name="/js/styling" component={StylingJS} />
            <Stack.Screen name="/js/lists" component={ListsJS} />
            <Stack.Screen name="/js/user_input" component={UserInputJS} />
            <Stack.Screen name="/js/pressables" component={PressablesJS} />
            <Stack.Screen
              name="/js/screens_and_stacks"
              component={ScreensAndStacksJS}
            />
            <Stack.Screen name="/js/navigation" component={NavigationJS} />
            <Stack.Screen name="/js/overlays" component={OverlaysJS} />
            <Stack.Screen name="/js/animations" component={AnimationsJS} />
            <Stack.Screen
              name="/js/complex_animations"
              component={ComplexAnimationsJS}
            />
            <Stack.Screen name="/js/gestures" component={GesturesJS} />
            <Stack.Screen name="/js/links" component={LinksJS} />
            <Stack.Screen name="/js/links/two" component={LinksJS} />
            <Stack.Screen name="/js/links/three" component={LinksJS} />
            <Stack.Screen name="/js/links/four" component={LinksJS} />
            <Stack.Screen name="/js/security" component={SecurityJS} />
            <Stack.Screen
              name="/js/accessibility"
              component={AccessibilityJS}
            />
            <Stack.Screen name="/js/debugging" component={DebuggingJS} />
            <Stack.Screen name="/js/performance" component={PerformanceJS} />
            <Stack.Screen name="/ts/introduction" component={IntroductionTS} />
            <Stack.Screen name="/ts/styling" component={StylingTS} />
            <Stack.Screen name="/ts/lists" component={ListsTS} />
            <Stack.Screen name="/ts/user_input" component={UserInputTS} />
            <Stack.Screen name="/ts/pressables" component={PressablesTS} />
            <Stack.Screen
              name="/ts/screens_and_stacks"
              component={ScreensAndStacksTS}
            />
            <Stack.Screen name="/ts/navigation" component={NavigationTS} />
            <Stack.Screen name="/ts/overlays" component={OverlaysTS} />
            <Stack.Screen name="/ts/animations" component={AnimationsTS} />
            <Stack.Screen
              name="/ts/complex_animations"
              component={ComplexAnimationsTS}
            />
            <Stack.Screen name="/ts/gestures" component={GesturesTS} />
            <Stack.Screen name="/ts/links" component={LinksTS} />
            <Stack.Screen name="/ts/links/two" component={LinksTS} />
            <Stack.Screen name="/ts/links/three" component={LinksTS} />
            <Stack.Screen name="/ts/security" component={SecurityTS} />
            <Stack.Screen
              name="/ts/accessibility"
              component={AccessibilityTS}
            />
            <Stack.Screen name="/ts/debugging" component={DebuggingTS} />
            <Stack.Screen name="/ts/performance" component={PerformanceTS} />
          </Stack.Navigator>
        </NavigationContainer>
      </DispatchContext.Provider>
    </StateContext.Provider>
  ) : (
    <Splash />
  );
};

export default App;
