import {
  Button as RNButton,
  FlatList as RNFlatList,
  Image as RNImage,
  ScrollView as RNScrollView,
  SectionList as RNSectionList,
  Switch as RNSwitch,
  Text as RNText,
  View as RNView,
  type ImageProps as RNImageProps,
  type SwitchProps as RNSwitchProps,
  type TextProps as RNTextProps,
} from "react-native";
import styles, { colors, fontFamilies, fontSizes } from "./styles.ts";

// Button
export const Button = RNButton;

// FlatList
export const FlatList = RNFlatList;

// Image
type ImageProps = RNImageProps & {
  width: number;
  height: number;
};

export const Image = ({ width, height, style, ...rest }: ImageProps) => {
  const _style =
    typeof style === "object" ? { width, height, ...style } : { width, height };
  return <RNImage style={_style} {...rest} />;
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

export const Text = ({
  children,
  font,
  size,
  color,
  style,
  ...rest
}: TextProps) => {
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
