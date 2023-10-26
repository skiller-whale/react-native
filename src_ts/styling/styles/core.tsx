import type {
  ImageBackgroundProps,
  ImageProps,
  PressableProps,
  TextProps,
  ViewProps,
} from "react-native";
import {
  Image as _Image,
  ImageBackground as _ImageBackground,
  Pressable as _Pressable,
  ScrollView as _ScrollView,
  Text as _Text,
  View as _View,
} from "react-native";
import { styles } from "./styles.ts";

export const Image = (props: ImageProps) => <_Image {...props} />;

export const ImageBackground = (props: ImageBackgroundProps) => <_ImageBackground {...props} />;

export const Pressable = ({ children, ...rest }: PressableProps) => (
  <_Pressable {...rest}>{children}</_Pressable>
);

export const ScrollView = ({ children, ...rest }: ViewProps) => (
  <_ScrollView {...rest}>{children}</_ScrollView>
);

export const Text = ({ children, style, ...rest }: TextProps) => (
  <_Text style={[styles.text, style]} {...rest}>
    {children}
  </_Text>
);

export const View = ({ children, ...rest }: ViewProps) => (
  <_View {...rest}>{children}</_View>
);
