import { NavigationContainer } from "@react-navigation/native";
import { useReducer } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RootSiblingParent } from "react-native-root-siblings";
import { styles } from "../../lib/styles.ts";
import RootStack from "./RootStack.tsx";
import {
  DispatchContext,
  StateContext,
  initialState,
  stateReducer,
} from "./State.ts";

const App = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <NavigationContainer independent={true}>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <RootSiblingParent>
            <RootStack />
          </RootSiblingParent>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </NavigationContainer>
  );
};

export default App;
