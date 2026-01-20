import { useNavigation } from "@react-navigation/core";
import { Pressable } from "react-native";
import { StyledText as Text } from "../../../lib/typography.tsx";
import type {
  NavigationProp,
  Screen,
  ScreenParams,
} from "../navigators/RootStack.tsx";

type Props<S extends Screen> = {
  children: string;
} & (undefined extends ScreenParams[S]
  ? { screen: S; params?: ScreenParams[S] }
  : { screen: S; params: ScreenParams[S] });

const Link = <S extends Screen>({ screen, params, children }: Props<S>) => {
  const navigation = useNavigation<NavigationProp>();
  // @ts-expect-error: React Navigation's types can't handle this level of generics
  // (but it's okay, because the `Props` type above ensures type safety here)
  const onPress = () => navigation.push(screen, params);

  return (
    <Pressable onPress={onPress}>
      <Text color="oceanBlue" style={{ textDecorationLine: "underline" }}>
        {children}
      </Text>
    </Pressable>
  );
};

export default Link;
