import { createStaticNavigation } from "@react-navigation/native";
import { useReducer } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RootSiblingParent } from "react-native-root-siblings";
import { styles } from "../../lib/styles.ts";
import RootStack from "./RootStack.jsx";
import {
  DispatchContext,
  initialState,
  StateContext,
  stateReducer,
} from "./State.js";

const NavigationContainer = createStaticNavigation(RootStack);

const App = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <RootSiblingParent>
          <NavigationContainer />
        </RootSiblingParent>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default App;
