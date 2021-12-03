import React from 'react';
import { View, Text } from 'react-native';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import Avatar from '../Avatar';

export type MemberProps = {
  id: string,
  userName: string,
  avatar_url: string,
  status: string,
}

type Props = {
  data: MemberProps
}

const Member = ({ data }: Props) => {
  const isOnline = data.status === 'online';
  const { on, primary } = theme.colors;

  return (
    <View style={styles.container}>
      <Avatar urlImage={data.avatar_url} />
      <View>
        <Text style={styles.title}>{data.userName}</Text>
        <View style={styles.status}>
          <View 
            style={[ 
              styles.bulletStatus, 
              { backgroundColor: isOnline ? on : primary}
            ]}
            
          />
          <Text style={styles.nameStatus}>
            {isOnline ? 'Dispnível' : 'Ocupado'}</Text>
        </View>
      </View>
    </View>
  );
};

export default Member
