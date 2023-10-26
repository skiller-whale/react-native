import { Text, View } from "react-native";
import whales from "../../../lib/data/whales.ts";
import Card from "../components/Card.tsx";
import { styles } from "../styles/styles.ts";

const Whales = () => (
  <View>
    {whales.map((whale) => (
      <Card key={whale.id}>
        <Card.Title>{whale.name}</Card.Title>
        <Card.Content>
          <Text>{whale.about}</Text>
        </Card.Content>
      </Card>
    ))}
  </View>
);

export default Whales;
