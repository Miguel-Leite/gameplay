import { 
  Image, 
  Text, 
  View 
} from "react-native";

import DiscordImg from '../../assets/discord.png';
import { styles } from "./styles";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

type ButtonIconProps = RectButtonProps & {
  title: string;
}

export function ButtonIcon ({ title, ...rest }: ButtonIconProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>
        {title}
      </Text>
    </RectButton>
  );
}
