import { Text, View } from "../../../lib/base.tsx";

type Props = {
  title: string;
  content: string;
};

const Article = ({ title, content }: Props) => (
  <View style={{ padding: 20, gap: 20 }}>
    <Text size="xl" font="serif" style={{ textAlign: "center" }}>
      {title}
    </Text>
    <Text>{content}</Text>
  </View>
);

export default Article;
