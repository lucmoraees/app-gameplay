import React, { useState } from 'react';
import { 
  View,
  Image,
  Text,
} from 'react-native';

import { styles } from './styles';
import IlustartionImg from '../../assets/illustration.png';
import ButtonIcon from '../../components/ButtonIcon';

const Login = () => {
  return (
    <View style={styles.constainer}>
      <Image 
        source={IlustartionImg} 
        style={styles.img}
        resizeMode="stretch"
      />
      <View style={styles.content} >
        <Text style={styles.title}>
          Conecte-se {'\n'}
          e organize suas {'\n'}
          jogatinas
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos. 
        </Text>
        <ButtonIcon
          textButton="Entrar com o Discord" 
          activeOpacity={.7}
         />
      </View>
    </View>
  );
};

export default Login;
