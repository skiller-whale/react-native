import { Link } from "@react-navigation/native";
import { useContext } from "react";
import { FlatList, Switch, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors, styles } from "../lib/styles.ts";
import { StyledText as Text } from "../lib/typography.tsx";
import { DispatchContext, StateContext } from "./State.tsx";
import modules from "./modules.ts";

const Index = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const language = state.typeScript ? "ts" : "js";

  const insets = useSafeAreaInsets();

  return (
    <View style={{ ...styles.container, paddingBottom: insets.bottom }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 16,
          paddingHorizontal: 16,
          paddingVertical: 8,
        }}
      >
        <Text>TypeScript</Text>
        <Switch
          value={state.typeScript}
          onValueChange={(value) =>
            dispatch({ type: "set-typescript", typeScript: value })
          }
        />
      </View>
      <FlatList
        data={modules}
        renderItem={({ item }) => (
          <Link
            style={{
              ...styles.text,
              padding: 10,
              color: colors.oceanBlue,
              backgroundColor: colors.lightGrey,
              marginBottom: 6,
            }}
            screen={`/${language}/${item[0]}`}
            params={{}}
          >{`${item[1]}`}</Link>
        )}
      />
    </View>
  );
};

export default Index;
