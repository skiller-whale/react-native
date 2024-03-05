import { NavigationContainer } from "@react-navigation/native";
import { useReducer } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RootSiblingParent } from "react-native-root-siblings";
import { styles } from "../../lib/styles.ts";
import RootStack from "./RootStack.jsx";
import {
  DispatchContext,
  StateContext,
  initialState,
  stateReducer,
} from "./State.js";

const App = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <NavigationContainer independent={true}>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <RootStack />
        </DispatchContext.Provider>
      </StateContext.Provider>
    </NavigationContainer>
  );
};

export default App;
