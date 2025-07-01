import type { FC } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NavigationIndependentTree } from "@react-navigation/native";

// JS modules
import AccessibilityJS from "../src_js/accessibility/App.jsx";
import AnimationsJS from "../src_js/animations/App.jsx";
import ComplexAnimationsJS from "../src_js/complex_animations/App.jsx";
import DataStorageJS from "../src_js/data_storage/App.jsx";
import DebuggingJS from "../src_js/debugging/App.jsx";
import GesturesJS from "../src_js/gestures/App.jsx";
import IntroductionJS from "../src_js/introduction/App.jsx";
import LinksJS from "../src_js/links/App.jsx";
import ListsJS from "../src_js/lists/App.jsx";
import NavigationJS from "../src_js/navigation/App.jsx";
import OverlaysJS from "../src_js/overlays/App.jsx";
import PerformanceJS from "../src_js/performance/App.jsx";
import PressablesJS from "../src_js/pressables/App.jsx";
import ScreensAndStacksJS from "../src_js/screens_and_stacks/App.jsx";
import SecurityJS from "../src_js/security/App.jsx";
import StylingJS from "../src_js/styling/App.jsx";
import UserInputJS from "../src_js/user_input/App.jsx";

// TS modules
import AccessibilityTS from "../src_ts/accessibility/App.tsx";
import AnimationsTS from "../src_ts/animations/App.tsx";
import ComplexAnimationsTS from "../src_ts/complex_animations/App.tsx";
import DataStorageTS from "../src_ts/data_storage/App.tsx";
import DebuggingTS from "../src_ts/debugging/App.tsx";
import GesturesTS from "../src_ts/gestures/App.tsx";
import IntroductionTS from "../src_ts/introduction/App.tsx";
import LinksTS from "../src_ts/links/App.tsx";
import ListsTS from "../src_ts/lists/App.tsx";
import NavigationTS from "../src_ts/navigation/App.tsx";
import OverlaysTS from "../src_ts/overlays/App.tsx";
import PerformanceTS from "../src_ts/performance/App.tsx";
import PressablesTS from "../src_ts/pressables/App.tsx";
import ScreensAndStacksTS from "../src_ts/screens_and_stacks/App.tsx";
import SecurityTS from "../src_ts/security/App.tsx";
import StylingTS from "../src_ts/styling/App.tsx";
import UserInputTS from "../src_ts/user_input/App.tsx";

const Wrapper = (Module: FC): FC => {
  return () => {
    const insets = useSafeAreaInsets();
    return (
      <NavigationIndependentTree>
        <View style={{ flex: 1, paddingBottom: insets.bottom }}>
          <Module />
        </View>
      </NavigationIndependentTree>
    );
  };
};

export const screensJS = {
  "/js/introduction": Wrapper(IntroductionJS),
  "/js/styling": Wrapper(StylingJS),
  "/js/lists": Wrapper(ListsJS),
  "/js/user_input": Wrapper(UserInputJS),
  "/js/pressables": Wrapper(PressablesJS),
  "/js/screens_and_stacks": Wrapper(ScreensAndStacksJS),
  "/js/navigation": Wrapper(NavigationJS),
  "/js/overlays": Wrapper(OverlaysJS),
  "/js/animations": Wrapper(AnimationsJS),
  "/js/complex_animations": Wrapper(ComplexAnimationsJS),
  "/js/gestures": Wrapper(GesturesJS),
  "/js/links": Wrapper(LinksJS),
  "/js/links/two": Wrapper(LinksJS),
  "/js/links/three": Wrapper(LinksJS),
  "/js/links/four": Wrapper(LinksJS),
  "/js/data_storage": Wrapper(DataStorageJS),
  "/js/security": Wrapper(SecurityJS),
  "/js/accessibility": Wrapper(AccessibilityJS),
  "/js/debugging": Wrapper(DebuggingJS),
  "/js/performance": Wrapper(PerformanceJS),
} as const;

export const screensTS = {
  "/ts/introduction": Wrapper(IntroductionTS),
  "/ts/styling": Wrapper(StylingTS),
  "/ts/lists": Wrapper(ListsTS),
  "/ts/user_input": Wrapper(UserInputTS),
  "/ts/pressables": Wrapper(PressablesTS),
  "/ts/screens_and_stacks": Wrapper(ScreensAndStacksTS),
  "/ts/navigation": Wrapper(NavigationTS),
  "/ts/overlays": Wrapper(OverlaysTS),
  "/ts/animations": Wrapper(AnimationsTS),
  "/ts/complex_animations": Wrapper(ComplexAnimationsTS),
  "/ts/gestures": Wrapper(GesturesTS),
  "/ts/links": Wrapper(LinksTS),
  "/ts/links/two": Wrapper(LinksTS),
  "/ts/links/three": Wrapper(LinksTS),
  "/ts/links/four": Wrapper(LinksTS),
  "/ts/data_storage": Wrapper(DataStorageTS),
  "/ts/security": Wrapper(SecurityTS),
  "/ts/accessibility": Wrapper(AccessibilityTS),
  "/ts/debugging": Wrapper(DebuggingTS),
  "/ts/performance": Wrapper(PerformanceTS),
} as const;

export const screensForLinking = {
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
  "/js/data_storage": "js/data_storage",
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
  "/ts/data_storage": "ts/data_storage",
  "/ts/security": "ts/security",
  "/ts/accessibility": "ts/accessibility",
  "/ts/debugging": "ts/debugging",
  "/ts/performance": "ts/performance",
} as const;
