import { Image, View } from "../lib/base.tsx";
import { colors } from "../lib/styles.ts";

const Splash = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: colors.turquoise,
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Image asset="icon.png" width={100} height={100} />
  </View>
);

export default Splash;
