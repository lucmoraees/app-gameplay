import React, { useCallback, useEffect, useState } from "react";
import { View, FlatList, Alert } from 'react-native';
import { styles } from "./styles";
import Loading from '../../components/Loading';
import Guild, { GuildProps } from '../../components/Guild';
import ListDivider from '../../components/ListDivider';
import api from "../../services/api";

type Props = {
  handleGuildSelected: (guild: GuildProps) => void;
}

const Guilds = ({ handleGuildSelected }: Props) => {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getGuilds = useCallback(async () => {
    try {
      const { data } = await api.get('/users/@me/guilds');
      setGuilds(data);
    } catch (error) {
      Alert.alert('Algo deu errado ao carregar as guilds')
    } finally {
      setLoading(false);  
    }
  }, []);

  useEffect(() => {
    getGuilds();
  }, [getGuilds]);

  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <FlatList 
          data={guilds}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Guild data={item} onPress={() => handleGuildSelected(item)}/>
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          ListHeaderComponent={() => <ListDivider />}
          showsHorizontalScrollIndicator={false}
          style={styles.guilds}
          contentContainerStyle={{paddingBottom: 30, paddingTop: 104 }}
        />
      )}
    </View>
  );
};

export default Guilds;
