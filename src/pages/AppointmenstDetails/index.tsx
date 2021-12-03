import React, { useState, useEffect } from 'react';
import {
  ImageBackground,
  Text,
  View,
  FlatList,
  Alert,
  Share,
  Platform,
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import * as Linking from 'expo-linking';
import { useRoute } from '@react-navigation/core';
import { Fontisto } from '@expo/vector-icons';
import Banner from '../../assets/banner.png';
import Background from '../../components/Background';
import Header from '../../components/Header';
import ListHeader from '../../components/ListHeader';
import Member, { MemberProps } from '../../components/Member';
import ListDivider from '../../components/ListDivider';
import ButtonIcon from '../../components/ButtonIcon';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { AppointmentsProps } from '../../components/Appointments';
import api from '../../services/api';
import Loading from '../../components/Loading';

interface Params {
  guildSelected: AppointmentsProps;
}

interface GuildWidget {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
}

const AppointmentsDetails = () => {
  const route = useRoute();
  const { guildSelected } = route.params as Params;
  const [widget, setWidget] = useState<GuildWidget | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getWidgets = async () => {
    try {
      const { data } = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);

      setWidget(data);

    } catch (error) {
      Alert.alert('Verifique as configurações do servidor, será que o widget está habilitado?');
    } finally {
      setLoading(false);
    }
  }

  const handleShareInvite = () => {
    const message = Platform.OS === 'ios' 
      ? `Junte-se a ${guildSelected.guild.name}`
      : widget?.instant_invite;

    Share.share({
      message,
      url: widget ? widget.instant_invite : '',
    });
  }

  const handleOpenGuild = () => {
    Linking.openURL(widget?.instant_invite || '');
  }

  useEffect(() => {
    getWidgets();
  }, []);

  return (
    <Background>
      <Header 
        title="Detalhes" 
        action={
          guildSelected.guild.owner && (
            <BorderlessButton onPress={handleShareInvite}>
              <Fontisto name="share" size={24} color={theme.colors.primary} />
            </BorderlessButton>
          )
        }
      />
      <ImageBackground 
        source={Banner}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>{guildSelected.guild.name}</Text>
          <Text style={styles.subtitle}>
            {guildSelected.descriptions}
          </Text>
        </View>
      </ImageBackground>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ListHeader 
            title="Jogadores"
            subtitle={`Total ${widget ? widget.members.length : 0}`}
          />
          {widget && (
            <FlatList 
              data={widget.members}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Member data={item} />
              )}
              ItemSeparatorComponent={() => <ListDivider />}
              style={styles.members}
            />
          )}
        </>
      )}
      {guildSelected.guild.owner && (
        <View style={styles.footer}>
          <ButtonIcon
            onPress={handleOpenGuild}
            textButton="Entrar na partida"
          />
        </View>
      )}
    </Background>
  );
};

export default AppointmentsDetails;
