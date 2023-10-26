import { useState } from "react";
import { ScrollView, View } from "react-native";
import Header from "./components/Header.jsx";
import Tabs from "./components/Tabs.jsx";
import Articles from "./screens/Articles.jsx";
import Pictures from "./screens/Pictures.jsx";
import Whales from "./screens/Whales.jsx";
import { styles } from "./styles/styles.js";

const App = () => {
  const [tab, setTab] = useState("articles");

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        {tab === "articles" ? (
          <Articles />
        ) : tab === "whales" ? (
          <Whales />
        ) : (
          <Pictures />
        )}
      </ScrollView>
      <Tabs tab={tab} setTab={setTab} />
    </View>
  );
};

export default App;
