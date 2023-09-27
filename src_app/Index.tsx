import { Link } from "@react-navigation/native";
import { FlatList, Switch, Text, View } from "../lib/base.tsx";
import styles, { colors } from "../lib/styles.ts";
import useAsyncStorage from "../lib/useAsyncStorage.ts";
import modules from "./modules.ts";
import type { ModuleStackScreenProps } from "./types.ts";

const Index = (_: ModuleStackScreenProps<"index">) => {
  const [typeScript, setTypeScript] = useAsyncStorage("ts", false);
  const language = typeScript ? "ts" : "js";

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: 20,
          padding: 20,
        }}
      >
        <Text>TypeScript</Text>
        <Switch
          value={typeScript}
          onValueChange={(value) => setTypeScript(value)}
        />
      </View>
      <FlatList
        data={modules}
        renderItem={({ item }) => (
          <Link
            style={{
              ...styles.text({}),
              padding: 10,
              color: colors.oceanBlue,
              backgroundColor: colors.lightGrey,
              marginBottom: 6,
            }}
            to={{ screen: `/${language}/${item[0]}` }}
          >{`${item[1]}`}</Link>
        )}
      />
    </View>
  );
};

export default Index;
