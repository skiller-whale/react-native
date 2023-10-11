import { ImageSourcePropType } from "react-native";
import assets from "../assets.ts";

export type Article = {
  id: string;
  title: string;
  content: string;
  tag: string[];
  whales: string[];
  image: ImageSourcePropType;
};

const articles: Article[] = [
  {
    id: "1",
    title: "Orcas set their sights on humans",
    content:
      "Killer whales have had enough. They're no longer content with blubbery seals, they want some scrawny human meat. And they're capsizing boats to get it!",
    tag: ["news", "world news"],
    whales: ["orca", "skiller"],
    image: assets.whaleImages["orcas-hunt-people"],
  },
  {
    id: "2",
    title: "'My hunting days are over' says Orca matriarch",
    content: `"I've taught my family all I can, it's up to them now to carry on our tradition of hunting for sport".`,
    tag: ["sport", "hunting"],
    whales: ["orca", "skiller"],
    image: assets.whaleImages["matriarch"],
  },
  {
    id: "3",
    title: "Whale spotted in the Thames",
    content:
      "Yes, you heard that right! A minke whale was spotted in the river Thames, heading to the houses of parliament.",
    tag: ["news", "politics"],
    whales: ["minke"],
    image: assets.whaleImages["minke"],
  },
  {
    id: "4",
    title: "The new mental health trend",
    content:
      "Whale spotting is an excellent way to get outdoors, meet new people and calm the nervous system.",
    tag: ["lifestyle", "mental health"],
    whales: ["orca", "humpback", "beluga", "blue", "bowhead", "narwhal", "fin"],
    image: assets.whaleImages["whale-watching"],
  },
  {
    id: "5",
    title: "Blue whales vs Bowheads",
    content: "Who will win the final???",
    tag: ["sport", "dolphin games"],
    whales: ["blue", "bowhead"],
    image: assets.whaleImages["bowhead-vs-blue"],
  },
  {
    id: "6",
    title: "Killer whales aren't cute, they're killers!",
    content: "This is just my opinion.",
    tag: ["opinion"],
    whales: ["orca"],
    image: assets.whaleImages["dont-worry-this-seal-survived"],
  },
  {
    id: "7",
    title: "Jojoba oil suitable alternative to sperm whale oil",
    content:
      "Spermaceti is a waxy substance found in the head cavities of the sperm whale, used to make cosmetics and candles since the 17th C. But jojoba oil is just as good and smells just as weird! Thank goodness!",
    tag: ["news", "science"],
    whales: ["sperm"],
    image: assets.whaleImages["sperm-whale"],
  },
  {
    id: "8",
    title: "Dolphins worried about rising temps",
    content:
      "Dolphins are cutting down on jumping above the water to limit their sun exposure. 'I don't want to get wrinkles', says one anonymous dolphin.",
    tag: ["lifestyle", "beauty"],
    whales: ["dolphin"],
    image: assets.whaleImages["dolphin"],
  },
  {
    id: "9",
    title: "Meeting set between PM and Orca leader",
    content:
      "The PM is prepared to make a deal to prevent the hunting of humans in Orca territory.",
    tag: ["news", "politics"],
    whales: ["orca"],
    image: assets.whaleImages["orca-meeting"],
  },
];

export default articles;
