import React from "react";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import {
  Text,
} from 'react-native';

import discordImg from '../../assets/discord.png';
import { styles } from './styles';

type ButtonPropos = RectButtonProps & {
  textButton: string
}

const ButtonIcon = ({ textButton, ...rest }: ButtonPropos) => {
  return (
    <RectButton style={styles.container} { ...rest}>
      <Text style={styles.title} >
        {textButton}
      </Text>
    </RectButton>
  );
}

export default ButtonIcon;
