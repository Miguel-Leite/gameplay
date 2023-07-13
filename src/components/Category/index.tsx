import React from "react";
import { SvgProps } from "react-native-svg";
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { View } from 'react-native';

import { styles } from './styles';
import { theme } from "../../global/styles/theme";

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>
  checked?: boolean;
}

export function Category({ icon: Icon, title, checked=false, ...rest } : Props) {
  const { secondary80, secondary100 } = theme.colors;
  return (
    <RectButton style={styles.container} {...rest}>
      <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      <View style={[styles.content, {opacity: checked ? 1 : 0.4}]}>
        <View style={checked ? styles.checked : styles.unchecked}>
          <Icon 
            width={48}
            height={48}
          />
        </View>
      </View>
    </LinearGradient>
    </RectButton>
  );
}