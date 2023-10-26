import { useState } from "react";
import { ScrollView, View } from "react-native";
import Header from "./components/Header.tsx";
import Tabs, { type TabName } from "./components/Tabs.tsx";
import Articles from "./screens/Articles.tsx";
import Pictures from "./screens/Pictures.tsx";
import Whales from "./screens/Whales.tsx";
import { styles } from "./styles/styles.ts";

const App = () => {
  const [tab, setTab] = useState<TabName>("articles");

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
