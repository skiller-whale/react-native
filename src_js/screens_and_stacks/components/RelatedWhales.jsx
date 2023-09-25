import { Text, View } from "../../../lib/base.tsx";
import Link from "./Link.jsx";

const RelatedWhales = ({ whales }) => (
  <View style={articlesStyles.container}>
    <Text size="lg">Related Whales</Text>
    {whales.length ? (
      whales.map((whale) => <Link key={whale.id}>{whale.name}</Link>)
    ) : (
      <Text>None</Text>
    )}
  </View>
);

const articlesStyles = {
  container: {
    padding: 20,
    gap: 10,
  },
};

export default RelatedWhales;
