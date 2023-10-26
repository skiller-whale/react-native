import {
  Image as _Image,
  ImageBackground as _ImageBackground,
  Pressable as _Pressable,
  ScrollView as _ScrollView,
  Text as _Text,
  View as _View,
} from "react-native";
import { styles } from "./styles.js";

export const Image = (props) => <_Image {...props} />;

export const ImageBackground = (props) => <_ImageBackground {...props} />;

export const Pressable = ({ children, ...rest }) => (
  <_Pressable {...rest}>{children}</_Pressable>
);

export const ScrollView = ({ children, ...rest }) => (
  <_ScrollView {...rest}>{children}</_ScrollView>
);

export const Text = ({ children, style, ...rest }) => (
  <_Text style={[styles.text, style]} {...rest}>
    {children}
  </_Text>
);

export const View = ({ children, ...rest }) => (
  <_View {...rest}>{children}</_View>
);
