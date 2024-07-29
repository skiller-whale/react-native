import type { ImageRequireSource } from "react-native";

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
  whaleImagesAltText: {
    "bowhead-vs-blue": "Bowhead whale vs. blue whale",
    dolphin: "Two dolphins jumping",
    "dont-worry-this-seal-survived":
      "A seal trapped on some ice with two orcas circling",
    matriarch: "A family of orcas swimming together",
    minke: "A minke whale jumping out of the water",
    "orca-meeting": "Three orcas poking their heads out of the water together",
    "orcas-hunt-people": "An orca attacking a yacht",
    "sperm-whale": "A sperm whale swimming near the surface of the water",
    "whale-watching": "A group of people on a small boat looking at a whale",
  },
} as const;
