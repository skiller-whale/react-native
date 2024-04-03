import { Text } from "react-native";
import { colors } from "../../../lib/styles";

const HighlightedText = ({ text, highlight }) => {
  if (highlight === "") {
    return text;
  }

  const regex = new RegExp(`(${highlight})`, "i");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <Text key={index} style={{ backgroundColor: colors.rayYellow }}>
            {part}
          </Text>
        ) : (
          <Text key={index}>{part}</Text>
        )
      )}
    </>
  );
};

export default HighlightedText;
