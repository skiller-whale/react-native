// simple styled wrappers around the native components
import {
  type ImageProps as RNImageProps,
  type SwitchProps as RNSwitchProps,
  type TextProps as RNTextProps,
} from "react-native";
import {
  Button as RNButton,
  FlatList as RNFlatList,
  Image as RNImage,
  ScrollView as RNScrollView,
  SectionList as RNSectionList,
  Switch as RNSwitch,
  Text as RNText,
  View as RNView,
} from "react-native";
import styles, { colors, fontSizes, fontFamilies } from "./styles.ts";

// Button
export const Button = RNButton;

// FlatList
export const FlatList = RNFlatList;

// Image
type ImageProps = Omit<RNImageProps, "source"> & {
  asset: string;
  width: number;
  height: number;
  source?: RNImageProps["source"];
};

export const Image = ({ asset, width, height, ...rest }: ImageProps) => {
  const { source, style, ..._rest } = rest;
  const _source = source ? source : require(`../assets/${asset}`);
  const _style = typeof style === "object" ? { width, height, ...style } : { width, height };
  return <RNImage source={_source} style={_style} {..._rest} />;
};

// ScrollView
export const ScrollView = RNScrollView;

// SectionList
export const SectionList = RNSectionList;

// Switch
export const Switch = (props: RNSwitchProps) => (
  <RNSwitch
    trackColor={{ false: colors.lightGrey, true: colors.turquoise }}
    thumbColor={colors.turquoise}
    {...props}
  />
);

// Text
type TextProps = RNTextProps & {
  font?: keyof typeof fontFamilies;
  size?: keyof typeof fontSizes;
  color?: keyof typeof colors;
};

export const Text = ({ children, font, size, color, style, ...rest }: TextProps) => {
  const _style =
    typeof style === "object"
      ? { ...styles.text({ font, size, color }), ...style }
      : styles.text({ font, size, color });
  return (
    <RNText style={_style} {...rest}>
      {children}
    </RNText>
  );
};

// View
export const View = RNView;
