import React from 'react';
import { 
  View,
  Image,
  Text,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useAuth } from '../../hook/auth';

import { styles } from './styles';
import IlustartionImg from '../../assets/illustration.png';
import ButtonIcon from '../../components/ButtonIcon';
import { theme } from '../../global/styles/theme';

const Login = () => {
  const { signIn, loading } = useAuth();

  const handleLogin = async () => {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(String(error));
    }
  }

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
        {
          loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon
              textButton="Entrar com o Discord" 
              onPress={handleLogin}
            />
          )
        }
      </View>
    </View>
  );
};

export default Login;
