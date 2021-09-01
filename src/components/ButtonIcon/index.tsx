import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import discorImg from '../../assets/discord.png';
import { styles } from './styles';

type ButtonPropos = TouchableOpacityProps & {
  textButton: string
}

const ButtonIcon = ({ textButton, ...rest }: ButtonPropos) => {
  return (
    <TouchableOpacity style={styles.container} { ...rest}>
      <View style={styles.iconView}>
        <Image source={discorImg} style={styles.iconImg} />
      </View>
      <Text style={styles.title} >
        {textButton}
      </Text>
    </TouchableOpacity>
  );
}

export default ButtonIcon;
