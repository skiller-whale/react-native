import { ImageRequireSource } from "react-native";

export default {
  appImages: {
    ada: require("../assets/ada.png") as ImageRequireSource,
    icon: require("../assets/icon.png") as ImageRequireSource,
    splash: require("../assets/splash.png") as ImageRequireSource,
  },
  whaleImages: {
    "bowhead-vs-blue":
      require("../assets/whales/bowhead-vs-blue.jpeg") as ImageRequireSource,
    dolphin: require("../assets/whales/dolphin.jpeg") as ImageRequireSource,
    "dont-worry-this-seal-survived":
      require("../assets/whales/dont-worry-this-seal-survived.jpeg") as ImageRequireSource,
    matriarch: require("../assets/whales/matriarch.jpeg") as ImageRequireSource,
    minke: require("../assets/whales/minke.jpeg") as ImageRequireSource,
    "orca-meeting":
      require("../assets/whales/orca-meeting.jpeg") as ImageRequireSource,
    "orcas-hunt-people":
      require("../assets/whales/orcas-hunt-people.jpeg") as ImageRequireSource,
    "sperm-whale":
      require("../assets/whales/sperm-whale.jpeg") as ImageRequireSource,
    "whale-watching":
      require("../assets/whales/whale-watching.jpeg") as ImageRequireSource,
  },
} as const;
