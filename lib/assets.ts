import { ImageSourcePropType } from "react-native";

type AppImage = "ada" | "icon" | "splash";

type WhaleImage =
  | "bowhead-vs-blue"
  | "dolphin"
  | "dont-worry-this-seal-survived"
  | "matriarch"
  | "minke"
  | "orca-meeting"
  | "orcas-hunt-people"
  | "sperm-whale"
  | "whale-watching";

type Assets = {
  appImages: Record<AppImage, ImageSourcePropType>;
  whaleImages: Record<WhaleImage, ImageSourcePropType>;
};

const assets: Assets = {
  appImages: {
    ada: require("../assets/ada.png"),
    icon: require("../assets/icon.png"),
    splash: require("../assets/splash.png"),
  },
  whaleImages: {
    "bowhead-vs-blue": require("../assets/whales/bowhead-vs-blue.jpeg"),
    dolphin: require("../assets/whales/dolphin.jpeg"),
    "dont-worry-this-seal-survived": require("../assets/whales/dont-worry-this-seal-survived.jpeg"),
    matriarch: require("../assets/whales/matriarch.jpeg"),
    minke: require("../assets/whales/minke.jpeg"),
    "orca-meeting": require("../assets/whales/orca-meeting.jpeg"),
    "orcas-hunt-people": require("../assets/whales/orcas-hunt-people.jpeg"),
    "sperm-whale": require("../assets/whales/sperm-whale.jpeg"),
    "whale-watching": require("../assets/whales/whale-watching.jpeg"),
  },
};

export default assets;
