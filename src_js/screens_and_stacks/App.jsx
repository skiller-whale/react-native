import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useReducer } from "react";
import {
  DispatchContext,
  StateContext,
  initialState,
  stateReducer,
} from "./State.js";
import { StackID } from "./routes.js";
import ArticleScreen from "./screens/Article.jsx";
import HomeScreen from "./screens/Home.jsx";
import WhaleScreen from "./screens/Whale.jsx";

const App = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <>
      <HomeScreen />
      <ArticleScreen />
      <WhaleScreen />
    </>
  );
};

export default App;
