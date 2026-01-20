import type { ImageRequireSource } from "react-native";
import assets from "../assets.ts";
import type { WhaleId } from "./whales.ts";

export const articleTags = [
  "News",
  "Opinion",
  "Lifestyle",
  "Science",
  "Politics",
  "Culture",
  "Sport",
] as const;

export type ArticleTag = (typeof articleTags)[number];

export type Article = {
  id: string;
  title: string;
  update?: string;
  content: string[];
  tag: ArticleTag[];
  whales: WhaleId[];
  image: ImageRequireSource;
  imageText: string;
  imageSrc: string;
};

export type UploadedArticle = {
  id: string;
  title: string;
  content: string[];
  tag: ArticleTag[];
  whales: WhaleId[];
  imageSrc: string;
};

const articles: Article[] = [
  {
    id: "1",
    title: "Orcas Set Their Sights on Humans",
    content: [
      "In a bizarre turn of events in the animal kingdom, killer whales, also known as orcas, have seemingly developed a taste for human flesh. These majestic marine creatures, renowned for their intelligence and hunting skills, are no longer content with their usual diet of blubbery seals. Instead, they have set their sights on a new prey: humans!",
      "Reports have been pouring in from various coastal regions around the world, with fishermen and sailors sharing spine-tingling tales of close encounters with orcas. These encounters are not limited to a casual swim-by; these orcas are going all-in to get a taste of human flesh. Witnesses claim that the orcas are capsizing boats, seemingly with a deliberate intent to catch their human prey.",
      "Marine biologists and environmental experts are baffled by this unexpected shift in orca behavior. Dr. Emma Williams, a marine biologist, stated, 'Orcas are highly intelligent animals, and their behavior is usually driven by a need for sustenance. However, the recent attacks on boats and seemingly deliberate targeting of humans are perplexing. We're in uncharted waters here.'",
      "While these accounts of orcas targeting humans may sound like a terrifying twist in the animal kingdom, it's essential to remember that these incidents remain exceedingly rare. Killer whales have, for the most part, coexisted peacefully with humans and rarely pose a threat. Experts are actively studying this unusual behavior and working on strategies to ensure the safety of both humans and these remarkable creatures.",
      "For now, coastal communities are advised to exercise caution and remain vigilant when venturing into the waters where orcas have been spotted. The mystery of why these intelligent creatures have developed a newfound taste for human flesh is sure to keep marine scientists and curious minds engaged for some time to come.",
    ],
    tag: ["News"],
    whales: ["orca", "skiller"],
    image: assets.whaleImages["orcas-hunt-people"],
    imageText: assets.whaleImagesAltText["orcas-hunt-people"],
    imageSrc:
      "https://raw.githubusercontent.com/skiller-whale/react-native/main/assets/whales/orcas-hunt-people.jpeg",
  },
  {
    id: "2",
    title: "'My Hunting Days are Over,' Says Orca Matriarch",
    content: [
      "In a touching and surprising statement, a wise and experienced orca matriarch announced that her days of hunting are officially behind her. With a sense of profound wisdom and perhaps a touch of nostalgia, she declared, 'I've taught my family all I can; it's up to them now to carry on our tradition of hunting for sport.'",
      "The orca matriarch, known for her leadership and vast knowledge of hunting techniques, has been an iconic figure among her pod for many years. Her life has been dedicated to ensuring the survival and prosperity of her family, and her decision to retire from hunting marks a significant turning point in the pod's dynamics.",
      "Orcas, often referred to as killer whales, are known for their complex social structures and the transfer of knowledge from one generation to the next. The matriarch plays a crucial role in teaching her family members the art of hunting, including hunting for sport, which is an essential part of their culture.",
      "'I've led my pod through many successful hunts, and I've had the privilege of teaching our young ones the intricacies of the hunt,' the matriarch continued. 'Now, it's their time to take the reins and continue our traditions. It's a natural progression, and I have faith in their abilities.'",
      "While her decision may seem surprising to humans, it highlights the remarkable intelligence and cultural significance of orcas. These marine mammals pass down their knowledge and traditions through generations, ensuring the survival of their species in the ever-changing ocean environment.",
      "Marine biologists and experts are closely observing this remarkable transition within the pod. Dr. Lisa Anderson, a marine biologist, commented, 'The decision of the matriarch to step down from hunting is a rare and fascinating example of the sophisticated social structures within orca pods. It's a testament to their ability to adapt and pass on their cultural heritage.'",
      "The orca matriarch's retirement signifies a generational shift, with her descendants now poised to uphold their traditions and continue the legacy of their pod. As they embark on this new chapter, they will undoubtedly carry with them the wisdom and teachings of their venerable matriarch, ensuring the continuation of their unique way of life in the world's oceans.",
    ],
    tag: ["Sport"],
    whales: ["orca", "skiller"],
    image: assets.whaleImages["matriarch"],
    imageText: assets.whaleImagesAltText["matriarch"],
    imageSrc:
      "https://raw.githubusercontent.com/skiller-whale/react-native/main/assets/whales/matriarch.jpeg",
  },
  {
    id: "3",
    title: "Whale Spotted in the Thames",
    content: [
      "In an extraordinary and unexpected sighting, a majestic minke whale was recently spotted swimming in the iconic River Thames, heading toward the heart of London and the Houses of Parliament. This unusual and awe-inspiring event has left residents and onlookers astonished, as they witnessed a marine giant navigating the urban waters.",
      "The presence of a minke whale in the Thames is an extraordinary occurrence. These graceful creatures are typically found in the open oceans, far away from the bustling metropolis of London. The sighting, however, has brought a moment of wonder and fascination to the city's residents and visitors.",
      "Passersby, tourists, and locals alike gathered along the riverbanks, craning their necks to catch a glimpse of the remarkable visitor. Smartphones and cameras were out in full force, capturing the awe-inspiring moment as the minke whale gracefully swam past iconic landmarks like the Tower Bridge and the London Eye.",
      "Marine biologists and environmental experts are closely monitoring the whale's movements, working to ensure its safety and well-being. Dr. Emily Parker, a marine biologist, stated, 'The appearance of a minke whale in the Thames is certainly an unusual event. While it's captivating to see such a magnificent creature in the heart of the city, we must be cautious and make sure the whale is not distressed and can find its way back to the open sea.'",
      "As the whale made its way toward the Houses of Parliament, it brought an unexpected sense of wonder to the political center of the city. While experts are assessing the situation and the whale's health, Londoners and visitors continue to marvel at this unforgettable encounter with a gentle giant of the ocean in the heart of one of the world's most bustling cities.",
      "The reasons behind the minke whale's journey into the Thames remain a mystery, but one thing is certain: this unusual and enchanting visit has left an indelible mark on the people of London, reminding us all of the remarkable biodiversity that can sometimes emerge in the most unexpected places.",
    ],
    tag: ["News", "Politics"],
    whales: ["minke"],
    image: assets.whaleImages["minke"],
    imageText: assets.whaleImagesAltText["minke"],
    imageSrc:
      "https://raw.githubusercontent.com/skiller-whale/react-native/main/assets/whales/minke.jpeg",
  },
  {
    id: "4",
    title: "The New Mental Health Trend",
    content: [
      "In a world where the pursuit of well-being and mental health takes various forms, a unique and refreshing trend has emerged—whale spotting. This captivating outdoor activity is gaining popularity for its potential to rejuvenate the mind, foster social connections, and provide a profound sense of calm for participants.",
      "Whale spotting, as an outdoor pastime, has quickly become a preferred method for individuals looking to escape the daily hustle and bustle of life. With its ability to reconnect people with nature's wonders, this trend is much more than just a leisure activity; it's a form of self-care that nourishes the soul.",
      "Engaging in whale spotting encourages people to step outside, breathe in the fresh sea air, and immerse themselves in the tranquillity of the natural world. The act of patiently waiting and observing these magnificent marine mammals as they breach the surface, tail-slap, or spout water can be a deeply meditative experience.",
      "What sets whale spotting apart from many other trends is its social aspect. Enthusiasts often join group excursions or attend events, providing a platform for like-minded individuals to connect and share their love for these awe-inspiring creatures. Friendships are forged, and a sense of belonging is fostered as participants bond over their shared experiences.",
      "Dr. Sarah Mitchell, a psychiatrist and mental health expert, recognizes the therapeutic potential of whale spotting. 'The connection between being in nature and improved mental health is well-documented,' she explains. 'Whale spotting offers an additional layer of calmness and connection to the natural world. Engaging in such an activity can have positive effects on one's mental well-being, reducing stress, anxiety, and promoting relaxation.'",
      "Whale spotting as a mental health trend encourages people to disconnect from their screens and the stresses of modern life while reconnecting with nature and the community around them. With its ability to bring people together and offer moments of serenity, it's no wonder that whale spotting is making waves as the new, refreshing trend in the world of self-care and mental well-being.",
    ],
    tag: ["Lifestyle"],
    whales: ["orca", "humpback", "beluga", "blue", "bowhead", "narwhal", "fin"],
    image: assets.whaleImages["whale-watching"],
    imageText: assets.whaleImagesAltText["whale-watching"],
    imageSrc:
      "https://raw.githubusercontent.com/skiller-whale/react-native/main/assets/whales/whale-watching.jpeg",
  },
  {
    id: "5",
    title: "Blue Whales vs Bowheads",
    content: [
      "In a much-anticipated battle of the titans, nature enthusiasts and marine life aficionados are eagerly awaiting the ultimate face-off between two formidable giants of the sea – the Blue Whales and the Bowhead Whales. The question on everyone's mind is: Who will win the final?",
      "Blue Whales, the largest creatures ever to grace the planet, have long been celebrated for their sheer size and power. These magnificent marine mammals can reach lengths of up to 100 feet and weigh as much as 200 tons. With their immense bulk and majestic presence, they are often considered the undisputed champions of the ocean.",
      "On the other side of the competition are the Bowhead Whales, known for their resilience and longevity. These remarkable creatures can live for over 200 years, making them some of the oldest living beings on Earth. Their massive, robust bodies and formidable strength have earned them a reputation as fierce contenders in the battle for ocean supremacy.",
      "The showdown between the Blue Whales and Bowhead Whales is a spectacle that has captured the imagination of marine biologists and nature enthusiasts worldwide. While it's important to remember that these majestic creatures are peaceful by nature and do not engage in battles, the concept of a friendly competition between these species has piqued curiosity and spurred spirited debates among marine life enthusiasts.",
      "Dr. Michael Turner, a marine biologist and avid whale observer, believes that this 'battle' highlights the incredible diversity and grandeur of the world's oceans. 'It's not about who wins in a real fight,' he says, 'but rather about celebrating the unique qualities and attributes of these remarkable creatures that grace our oceans. Both Blue Whales and Bowhead Whales are incredible in their own right.'",
      "While this battle is purely a playful and imaginative exercise, it serves as a reminder of the importance of conservation and respect for the world's marine life. Both Blue Whales and Bowhead Whales face challenges in the form of habitat loss and environmental changes, making it crucial for us to protect and preserve these incredible animals for generations to come.",
      "So, who will win the final in the 'Blue Whales vs. Bowheads' competition? Ultimately, nature itself is the true victor, as we celebrate and honor the diversity and wonder of the ocean's most magnificent inhabitants.",
    ],
    tag: ["Sport"],
    whales: ["blue", "bowhead"],
    image: assets.whaleImages["bowhead-vs-blue"],
    imageText: assets.whaleImagesAltText["bowhead-vs-blue"],
    imageSrc:
      "https://raw.githubusercontent.com/skiller-whale/react-native/main/assets/whales/bowhead-vs-blue.jpeg",
  },
  {
    id: "6",
    title: "Killer Whales Aren't Cute, They're Killers!",
    content: [
      "It's a debate that has persisted for years: Are killer whales, or orcas, as cute as they seem or deserving of their ominous moniker?",
      "Killer whales, the ocean's apex predators, have long captured the fascination of marine enthusiasts, researchers, and the general public alike. Renowned for their striking black-and-white colouring, intelligence, and complex social structures, these magnificent creatures have been the subject of awe and admiration for generations. Yet, for some, their reputation as ruthless hunters is difficult to overlook.",
      "The 'cute vs. killer' debate is largely subjective, rooted in individual perspectives and experiences. Some people find orcas irresistibly endearing, with their playful behaviors, close-knit family groups, and remarkable acrobatics. These enthusiasts point to their high intelligence, which has led to their success in captivity as stars of aquatic shows.",
      "On the other side of the debate, there are those who emphasize the killer instinct of orcas. These individuals highlight the fact that orcas are formidable predators, hunting seals, fish, and even other whales. The term 'killer whale' itself is derived from their reputation as efficient hunters. For them, the term 'killer' is a direct reflection of the animal's natural behavior.",
      "While it's essential to respect differing opinions, the 'cute vs. killer' debate may oversimplify the complexity of orcas as a species. Dr. Maria Rodriguez, a marine biologist, points out, 'Killer whales are neither solely cute nor just killers. They are multifaceted creatures with a range of behaviors and roles within their ecosystems. Their hunting behavior is a part of their natural ecological niche.'",
      "Ultimately, the debate surrounding killer whales is a testament to the diversity of perspectives that arise when humans interact with the natural world. It is crucial to appreciate the complexity of orcas and the vital role they play in maintaining the balance of marine ecosystems. While some may view them as cute and others as killers, one thing is certain: these remarkable creatures continue to captivate our imaginations and inspire a sense of wonder in the world's oceans.",
    ],
    tag: ["Opinion"],
    whales: ["orca"],
    image: assets.whaleImages["dont-worry-this-seal-survived"],
    imageText: assets.whaleImagesAltText["dont-worry-this-seal-survived"],
    imageSrc:
      "https://raw.githubusercontent.com/skiller-whale/react-native/main/assets/whales/dont-worry-this-seal-survived.jpeg",
  },
  {
    id: "7",
    title: "Jojoba Oil Suitable Alternative to Sperm Whale Oil",
    content: [
      "For centuries, the wax-like substance known as spermaceti, harvested from the head cavities of sperm whales, has been used to create cosmetics and candles. With a rich history dating back to the 17th century, this natural resource has been prized for its unique properties. However, the extraction of spermaceti from these magnificent marine mammals raised ethical and ecological concerns. Fortunately, nature has provided us with a sustainable alternative – jojoba oil, which not only rivals spermaceti's qualities but carries its own distinct charm.",
      "Spermaceti, once a sought-after ingredient for its unique properties, was treasured for its versatility in creating high-quality cosmetics, such as cold creams and facial moisturizers. Additionally, it was a key component in the production of luxurious candles, known for their slow, smokeless burn.",
      "As concerns mounted over the ethical implications of whaling and its impact on the fragile balance of marine ecosystems, the search for an alternative to spermaceti became imperative. Enter jojoba oil, a remarkable plant-based alternative that has gained popularity for its versatility and sustainability.",
      "Jojoba oil, derived from the seeds of the jojoba plant native to the American Southwest, boasts many of the same characteristics as spermaceti. It is a natural emollient, known for its moisturizing and hydrating properties, making it an excellent choice for cosmetics and skincare products. Additionally, jojoba oil has the added advantage of being odorless, addressing the peculiar scent of spermaceti that some found off-putting.",
      "Dr. Emily Collins, a sustainability expert, underscores the significance of this natural alternative. 'Jojoba oil not only offers a sustainable and cruelty-free solution to the production of cosmetics and candles but is also beneficial for the environment,' she says. 'The cultivation of jojoba plants supports biodiversity and reduces the demand for animal-based resources.'",
      "The adoption of jojoba oil as an alternative to spermaceti signifies a shift towards environmentally responsible practices. Its growth in popularity has allowed us to continue enjoying the same quality of cosmetics and candles without contributing to the depletion of marine life or the disruption of delicate ecosystems.",
      "In the world of beauty and personal care, jojoba oil's rise to prominence is a testament to our capacity to find innovative, ethical, and sustainable solutions, ensuring that the traditions and products we cherish continue to evolve in harmony with nature.",
    ],
    tag: ["News", "Science"],
    whales: ["sperm"],
    image: assets.whaleImages["sperm-whale"],
    imageText: assets.whaleImagesAltText["sperm-whale"],
    imageSrc:
      "https://raw.githubusercontent.com/skiller-whale/react-native/main/assets/whales/sperm-whale.jpeg",
  },
  {
    id: "8",
    title: "Dolphins Worried about Rising Temperatures",
    content: [
      "In a surprising turn of events, dolphins, those playful and charismatic marine mammals, are showing increasing concern about rising temperatures and their skin health. To protect themselves from the scorching sun, they've started cutting down on their iconic jumps above the water, with one anonymous dolphin declaring, 'I don't want to get wrinkles.'",
      "For years, dolphins have delighted onlookers with their energetic leaps and acrobatics above the water's surface. These majestic displays, often interpreted as signs of joy and playfulness, have endeared dolphins to admirers worldwide. However, recent changes in behavior suggest that dolphins are becoming more cautious about their sun exposure.",
      "Marine biologists have noted that dolphins are spending less time breaching the water's surface. This shift in behavior is a direct response to the increasing temperatures in their natural habitats, which have been on the rise due to climate change. Dolphins, like humans, are sensitive to the harmful effects of prolonged sun exposure, which can lead to skin damage, including wrinkles.",
      "One unnamed dolphin explained, 'We love to leap and play, but we've noticed that the sun's rays have been stronger and harsher lately. We don't want to take any chances with our skin health.'",
      "Dr. Lisa Anderson, a marine biologist, commented on this intriguing development, saying, 'Dolphins, like many other creatures in the animal kingdom, have the ability to adapt to changing environmental conditions. Their decision to limit jumping to protect their skin from the sun's damaging effects is a testament to their adaptability and survival instincts.'",
      "This change in behavior reflects the broader impact of climate change on marine ecosystems, as well as the remarkable ability of animals to adjust to new challenges. Dolphins' concern for their skin health serves as a poignant reminder of the urgent need for conservation and mitigating the effects of climate change to protect the well-being of all creatures, great and small, that inhabit our planet.",
    ],
    tag: ["Lifestyle"],
    whales: ["dolphin"],
    image: assets.whaleImages["dolphin"],
    imageText: assets.whaleImagesAltText["dolphin"],
    imageSrc:
      "https://raw.githubusercontent.com/skiller-whale/react-native/main/assets/whales/dolphin.jpeg",
  },
  {
    id: "9",
    title: "Meeting Set between PM and Orca Leader",
    content: [
      "In an extraordinary and unprecedented development, a meeting has been scheduled between the Prime Minister and a prominent leader of the orca community. The purpose of this historic meeting? To discuss a groundbreaking deal aimed at preventing the hunting of humans in orca territory.",
      "For generations, orcas have been known as the apex predators of the ocean, roaming freely in their vast territories and feeding on various marine life. However, recent concerns about the interaction between humans and orcas have sparked this diplomatic initiative.",
      "The meeting will bring together the highest-ranking political official of a human government and a respected orca leader, whose wisdom and influence within the community are widely acknowledged. Both sides are entering into the negotiations with a sense of gravity, recognizing the importance of finding common ground.",
      "The Prime Minister, in a recent statement, expressed a willingness to negotiate in the spirit of cooperation. 'We understand the concerns of the orca community and their territorial rights,' he said. 'We are committed to reaching an agreement that ensures the safety and well-being of both our human citizens and our oceanic neighbors.'",
      "On the orca side, the leader emphasized their commitment to peaceful coexistence. 'We, as orcas, respect the delicate balance of the marine ecosystem and our role within it,' the orca leader stated. 'We believe that a mutually beneficial agreement is possible, one that safeguards our territory while protecting humans who venture into our waters.'",
      "The forthcoming meeting between the Prime Minister and the orca leader is a testament to the growing recognition of the importance of preserving the ecological harmony of the oceans. It is also a reminder that, in a world facing numerous environmental challenges, diplomacy and cooperation between different species are essential for the future of our shared planet.",
      "As the diplomatic discussions proceed, the world watches with bated breath, hoping for a positive outcome that sets a precedent for harmonious coexistence between humans and the magnificent creatures that inhabit the world's oceans.",
    ],
    tag: ["News", "Politics"],
    whales: ["orca"],
    image: assets.whaleImages["orca-meeting"],
    imageText: assets.whaleImagesAltText["orca-meeting"],
    imageSrc:
      "https://raw.githubusercontent.com/skiller-whale/react-native/main/assets/whales/orca-meeting.jpeg",
  },
  {
    id: "10",
    title: "The Secret Songs of Humpback Whales Revealed",
    content: [
      "In a groundbreaking discovery that has left marine biologists astounded, researchers have unveiled the secret world of humpback whale songs. These majestic creatures, known for their melodic vocalizations, have been found to compose intricate musical compositions that resonate across the vast ocean expanses.",
      "Scientists equipped with advanced underwater recording technology have captured and analysed the mesmerizing patterns of humpback whale songs. Dr. Jonathan Reynolds, a marine acoustics expert, remarked, 'What we're witnessing is akin to a symphony beneath the waves. Each whale seems to have its own unique musical signature, and they engage in a form of underwater communication that goes beyond what we previously understood.'",
      "The revelation opens a new chapter in our understanding of these enigmatic marine mammals. The implications of these complex songs extend beyond mere communication, suggesting a deeper level of social interaction and possibly even a form of artistic expression among humpback whales.",
    ],
    tag: ["News", "Science"],
    whales: ["humpback"],
    image: assets.whaleImages["whale-watching"],
    imageText: assets.whaleImagesAltText["whale-watching"],
    imageSrc:
      "https://raw.githubusercontent.com/skiller-whale/react-native/main/assets/whales/whale-watching.jpeg",
  },
  {
    id: "11",
    title: "The Enigmatic Dance of the Bioluminescent Belugas",
    content: [
      "In a rare and magical spectacle, a pod of beluga whales has been observed engaging in a mesmerizing display of bioluminescent dance. These normally pristine white whales, found in the Arctic waters, are revealing a dazzling array of colors as they move gracefully through the dark ocean depths.",
      "Marine scientists equipped with specialized cameras captured the ethereal glow emitted by the belugas. Dr. Elena Rodriguez, a marine biologist, expressed her awe, stating, 'This phenomenon is truly extraordinary. It appears that the belugas are using bioluminescence not just for camouflage or communication but as a form of expression, turning the ocean into their own magical canvas.'",
      "The discovery of this bioluminescent dance challenges previous notions of beluga behaviour and opens up new avenues for understanding the relationship between marine life and the unique environments they inhabit.",
    ],
    tag: ["News", "Science"],
    whales: ["orca"],
    image: assets.whaleImages["orca-meeting"],
    imageText: assets.whaleImagesAltText["orca-meeting"],
    imageSrc:
      "https://raw.githubusercontent.com/skiller-whale/react-native/main/assets/whales/orca-meeting.jpeg",
  },
  {
    id: "12",
    title: "Bowhead Whales' Ancient Songs Echo Through Time",
    content: [
      "In a captivating revelation that echoes through the annals of time, the ancient songs of bowhead whales have been uncovered by researchers studying the Arctic's icy waters. These whales, known for their longevity, are now believed to carry the echoes of centuries in their hauntingly beautiful vocalizations.",
      "Scientists, utilizing advanced technology, have been able to analyze the unique pitch and pattern of the bowhead whale songs. Dr. Olivia Bennett, an expert in marine archaeology, remarked, 'It's as if these whales are the keepers of a sonic history book. Their songs may hold clues to the changing climate and environmental shifts that have occurred over centuries.'",
      "The discovery not only sheds light on the cultural significance of these ancient creatures but also underscores the importance of preserving their habitats to safeguard the living record they carry within them.",
    ],
    tag: ["News", "Culture"],
    whales: ["bowhead"],
    image: assets.whaleImages["orca-meeting"],
    imageText: assets.whaleImagesAltText["orca-meeting"],
    imageSrc:
      "https://raw.githubusercontent.com/skiller-whale/react-native/main/assets/whales/orca-meeting.jpeg",
  },
  {
    id: "13",
    title: "Narwhals' Mysterious Tusk Signals Decoded",
    content: [
      "In a breakthrough study, researchers have unravelled the mysterious language of narwhals, focusing particularly on the significance of their iconic tusks. These 'unicorns of the sea' are now believed to use their tusks for intricate communication, adding a layer of complexity to our understanding of these elusive marine mammals.",
      "Scientists, utilizing underwater microphones and observation techniques, have decoded the subtle clicks and whistles emitted by narwhals. Dr. Christopher Turner, a marine linguist, explained, 'It's a sophisticated form of communication that involves a combination of tusk taps, specific frequencies, and even variations in the spirals of their tusks. Each narwhal seems to have a unique 'tusk signature' used for individual identification.'",
      "The revelation provides valuable insights into the social dynamics and intricate communication systems of narwhals, highlighting the need for conservation efforts to protect these extraordinary creatures.",
    ],
    tag: ["News", "Science"],
    whales: ["orca"],
    image: assets.whaleImages["orca-meeting"],
    imageText: assets.whaleImagesAltText["orca-meeting"],
    imageSrc:
      "https://raw.githubusercontent.com/skiller-whale/react-native/main/assets/whales/orca-meeting.jpeg",
  },
  {
    id: "14",
    title: "Blue Whales' Epic Migration: A Journey Across Oceans",
    content: [
      "In an epic tale of endurance and migration, blue whales have been tracked on a monumental journey across oceans that spans thousands of miles. Researchers have uncovered the awe-inspiring migration patterns of these colossal marine giants, revealing a remarkable feat of navigation and survival.",
      "Using satellite tracking and advanced telemetry, scientists have traced the migratory routes of blue whales as they traverse vast expanses of open ocean. Dr. Michael Carter, a marine ecologist, stated, 'The scale of their migration is staggering. Blue whales undertake these incredible journeys, likely in search of optimal feeding grounds and breeding areas.'",
      "The discovery not only showcases the adaptability and resilience of blue whales but also emphasizes the importance of international cooperation in preserving the habitats crucial for their survival. As these oceanic nomads continue their remarkable journeys, they inspire a renewed appreciation for the interconnectedness of marine life on a global scale.",
    ],
    tag: ["News", "Politics"],
    whales: ["orca"],
    image: assets.whaleImages["orca-meeting"],
    imageText: assets.whaleImagesAltText["orca-meeting"],
    imageSrc:
      "https://raw.githubusercontent.com/skiller-whale/react-native/main/assets/whales/orca-meeting.jpeg",
  },
  {
    id: "15",
    title: "Fin Whales' Surprising Social Clubs Unveiled",
    content: [
      "In a revelation that challenges previous assumptions about fin whales, researchers have discovered the existence of 'social clubs' among these massive marine mammals. Unlike their more solitary counterparts, certain groups of fin whales engage in unique social behaviors, forming bonds that endure across vast oceanic distances. The observation of these social clubs involved the use of advanced underwater cameras and tracking devices, allowing scientists to document synchronized swimming patterns and vocalizations.",
      "Dr. Olivia Martinez, a marine behaviorist, notes that the discovery challenges the stereotype of fin whales as solitary creatures. 'It seems that they have a need for social connection, and these clubs may serve purposes ranging from shared hunting strategies to companionship during long migrations.' This newfound understanding of fin whale social dynamics raises questions about the complexities of their communication and cooperation, highlighting the need for further research to unravel the intricacies of these unexpected social structures.",
    ],
    tag: ["News", "Culture"],
    whales: ["orca"],
    image: assets.whaleImages["orca-meeting"],
    imageText: assets.whaleImagesAltText["orca-meeting"],
    imageSrc:
      "https://raw.githubusercontent.com/skiller-whale/react-native/main/assets/whales/orca-meeting.jpeg",
  },
  {
    id: "16",
    title: "The Curious Case of the Spotted Orca: A Genetic Anomaly",
    content: [
      "In a rare genetic twist, a spotted orca has been spotted off the coast, leaving marine biologists intrigued by this unusual coloration. Unlike the traditional black and white markings of orcas, this individual exhibits a distinctive spotted pattern, prompting scientists to delve into the genetic mysteries that define these iconic marine predators. Geneticists have collected skin and blubber samples to analyze the unique genetic makeup of the spotted orca.",
      "Dr. Marcus Thompson, a marine geneticist, comments, 'This is an unprecedented discovery. It challenges our understanding of orca genetics and raises questions about the potential for hidden variations in colouration within this species.' The exploration of genetic anomalies in orcas not only contributes to our knowledge of their diversity but also underscores the importance of genetic conservation efforts to protect the unique characteristics that make each individual within this species remarkable.",
    ],
    tag: ["News", "Politics"],
    whales: ["orca"],
    image: assets.whaleImages["orca-meeting"],
    imageText: assets.whaleImagesAltText["orca-meeting"],
    imageSrc:
      "https://raw.githubusercontent.com/skiller-whale/react-native/main/assets/whales/orca-meeting.jpeg",
  },
  {
    id: "17",
    title: "Beluga Ballet: Underwater Choreography Takes Center Stage",
    content: [
      "In a spectacle that resembles an underwater ballet, beluga whales have been observed engaging in a mesmerising display of coordinated movements. These Arctic whales, renowned for their playful nature, are showcasing a level of underwater choreography that has captivated marine enthusiasts and researchers alike. Researchers equipped with underwater cameras have documented the intricate dance-like sequences performed by belugas.",
      "Dr. Isabella Rodriguez, a marine ethologist, notes, 'It's a form of social interaction and communication. The synchronized movements and playful exchanges suggest a level of intelligence and coordination that adds a new dimension to our understanding of beluga behavior.' The study of beluga ballet not only provides insights into the social dynamics of these marine mammals but also prompts a reevaluation of their cognitive abilities, emphasizing the need for continued efforts to understand and protect these fascinating creatures.",
    ],
    tag: ["News", "Culture"],
    whales: ["orca"],
    image: assets.whaleImages["orca-meeting"],
    imageText: assets.whaleImagesAltText["orca-meeting"],
    imageSrc:
      "https://raw.githubusercontent.com/skiller-whale/react-native/main/assets/whales/orca-meeting.jpeg",
  },
  {
    id: "18",
    title: "Pod Politics: Killer Whale Democracy in Action",
    content: [
      "In a fascinating exploration of killer whale social dynamics, researchers have uncovered a form of democracy within orca pods. Contrary to traditional hierarchical structures observed in some animal groups, killer whales engage in collective decision-making, where each member has a voice in determining the direction of the pod's activities. Marine biologists, observing orca pods in various locations, have noted instances of collaborative decision-making.",
      "Dr. James Thompson, a marine sociologist, remarks, 'It appears that killer whales value consensus. From selecting hunting grounds to navigating migratory routes, each member of the pod has a role in the decision-making process.' This democratic aspect of orca pod politics challenges previous notions of predator social structures and emphasizes the intricate social intelligence that contributes to the success and adaptability of killer whale communities.",
    ],
    tag: ["News", "Politics"],
    whales: ["orca"],
    image: assets.whaleImages["orca-meeting"],
    imageText: assets.whaleImagesAltText["orca-meeting"],
    imageSrc:
      "https://raw.githubusercontent.com/skiller-whale/react-native/main/assets/whales/orca-meeting.jpeg",
  },
  {
    id: "19",
    title: "The Language of Humpback Love Songs",
    content: [
      "In a heart-warming discovery, researchers have decoded the intricate language of humpback whale love songs. These melodious vocalizations, often associated with mating rituals, reveal a complex system of communication that goes beyond mere attraction, shedding light on the emotional and social bonds formed among these oceanic giants. Scientists, utilizing hydrophones and behavioural studies, have identified distinct patterns in humpback whale love songs.",
      "Dr. Emily Turner, a marine ethologist, explains, 'It's not just about finding a mate; these love songs serve as a means of emotional connection and strengthening social bonds within humpback communities. It adds a layer of complexity to our understanding of their rich social lives.' The exploration of humpback whale love songs not only deepens our understanding of their social dynamics but also underscores the emotional lives of these majestic creatures, reinforcing the importance of conservation efforts to protect their habitats and ensure the continuation of these unique communication patterns.",
    ],
    tag: ["News", "Culture"],
    whales: ["orca"],
    image: assets.whaleImages["orca-meeting"],
    imageText: assets.whaleImagesAltText["orca-meeting"],
    imageSrc:
      "https://raw.githubusercontent.com/skiller-whale/react-native/main/assets/whales/orca-meeting.jpeg",
  },
  {
    id: "20",
    title: "The Song of the Deep: Mystical Melodies from Narwhals",
    content: [
      "In a mesmerizing discovery beneath the Arctic ice, scientists have unveiled the mystical melodies of narwhals. Known as the 'unicorns of the sea' for their iconic tusks, these enigmatic whales are now captivating researchers with their hauntingly beautiful songs that echo through the frigid waters.",
      "Underwater microphones and cutting-edge recording technology have allowed researchers to capture the ethereal tunes emitted by narwhals. Dr. Sophia Reynolds, a marine acoustician, expressed her awe, stating, 'It's as if the narwhals are weaving a tapestry of sound beneath the ice, creating a symphony that resonates through their icy realm.'",
      "The significance of these narwhal songs extends beyond mere communication. Preliminary analysis suggests that these melodies may play a role in navigation, mate attraction, and even social bonding among narwhal pods. This newfound understanding of narwhal vocalizations opens up avenues for further exploration into the rich tapestry of arctic marine life.",
      "As researchers continue to delve into the depths of narwhal communication, the mystical melodies of these oceanic unicorns reveal a hidden world beneath the ice, reminding us of the vast wonders that exist in the most remote corners of our planet.",
    ],
    tag: ["News", "Science"],
    whales: ["narwhal"],
    image: assets.whaleImages["orca-meeting"],
    imageText: assets.whaleImagesAltText["orca-meeting"],
    imageSrc:
      "https://raw.githubusercontent.com/skiller-whale/react-native/main/assets/whales/orca-meeting.jpeg",
  },
];

export default articles;
