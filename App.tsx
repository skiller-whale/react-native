import "@expo/metro-runtime";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as Linking from "expo-linking";
import * as SplashScreen from "expo-splash-screen";
import { useReducer, useState } from "react";
import { Image, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import assets from "./lib/assets.ts";
import { colors } from "./lib/styles.ts";
import { StyledText as Text } from "./lib/typography.tsx";
import useAsyncEffect from "./lib/useAsyncEffect.ts";
import Index from "./src_app/Index.tsx";
import Splash from "./src_app/Splash.tsx";
import {
  DispatchContext,
  StateContext,
  initialState,
  storedStateKey,
  updateAndStore,
} from "./src_app/State.tsx";
import { screensJS, screensTS, screensForLinking } from "./src_app/navigation.tsx";

SplashScreen.preventAutoHideAsync();

const prefix = Linking.createURL("/");

const RootStack = createNativeStackNavigator({
  fallback: Splash,
  initialRouteName: "index",
  screenOptions: ({ route }) => ({
    headerStyle: { backgroundColor: colors.turquoise },
    headerTintColor: colors.orcaBlue,
    headerTitle: () => (
      <Text size="lg">{route.name.split("/").slice(0, 3).join("/")}</Text>
    ),
    headerRight: () => (
      <View style={{ paddingRight: 16 }}>
        <Image
          source={assets.appImages.ada}
          style={{ width: 30, height: 30 }}
        />
      </View>
    ),
  }),
  screens: {
    index: {
      screen: Index,
      options: {
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
      },
    },
    ...screensJS,
    ...screensTS,
  },
  linking: {
    prefixes: [prefix],
    config: {
      screens: screensForLinking,
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

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
        <SafeAreaProvider>
          <Navigation
            initialState={state.navigationState}
            onStateChange={(navigationState) => {
              if (navigationState) {
                dispatch({ type: "set-navigation-state", navigationState });
              }
            }}
          />
        </SafeAreaProvider>
      </DispatchContext.Provider>
    </StateContext.Provider>
  ) : (
    <Splash />
  );
};

export default App;
