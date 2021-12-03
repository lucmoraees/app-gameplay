import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useAuth } from '../../hook/auth';
import Avatar from '../Avatar';
import { styles } from './styles';
import ModalSair from '../ModalSair'

const Profile = () => {
  const {user} = useAuth();
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <ModalSair closeModal={() => setVisible(false)} visible={visible} />
      <RectButton onPress={() => setVisible(true)}>
        <Avatar urlImage={user.avatar} />
      </RectButton>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>
          <Text style={styles.userName}>
            {user.firstName}
          </Text>
        </View>
        <Text style={styles.message}>
          Hoje é dia de vitória!
        </Text>
      </View>
    </View>
  )
}

export default Profile;
