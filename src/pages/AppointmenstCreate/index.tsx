import React, { useState, } from 'react';
import {
  View, 
  Text, 
  ScrollView, 
  KeyboardAvoidingView,
} from 'react-native';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { GuildProps } from '../../components/Guild';
import Header from '../../components/Header';
import CategorySelect from '../../components/CategorySelect';
import BoxInput from '../../components/BoxInput';
import Textarea from '../../components/TextArea';
import Button from '../../components/Button';
import GuildIcon from '../../components/GuildIcon';
import ModalList from '../../components/ModalList';
import Guilds from '../Guilds';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';

const AppointmenstCreate = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps )
  const [day, setDay] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [hours, setHours] = useState<string>('');
  const [minute, setMinute] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleOpenGuilds = () => {
    setVisible(true);
  };

  const handleGuildSelected = (guildSelect: GuildProps) => {
    setGuild(guildSelect);
    setVisible(false);
  };

  const handleSave = async () => {
    const newAppointments = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} às ${hours}:${minute}h`,
      description,
    }
    
    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);

    const appointments = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENTS, 
      JSON.stringify([...appointments, newAppointments])
    );

    navigation.navigate('Home');
  }

  
  return(
    <KeyboardAvoidingView 
      behavior={'position'} 
      style={styles.container}
    >
      <ScrollView>
        <Header title="Agendar Partida" />
        <Text style={[{ marginLeft: 24, marginTop: 36, marginBottom: 18} ,styles.label]}>
          Categoria
        </Text>
        <CategorySelect
          hasCheckBox
          categorySelected={category}
          setCategory={setCategory}
        />
        <View style={styles.form}>
          <RectButton onPress={handleOpenGuilds}>
            <View style={styles.select}>
              {guild.icon ? (
                <GuildIcon guildId={guild.id} iconId={guild.icon} />
              ) : (
                <View style={styles.image} />
              )}
              <View style={styles.selectBody}>
                <Text style={styles.label}>
                  {guild.name ?  guild.name : "Selecione um servidor"}
                </Text>
              </View>
              <Feather 
                name="chevron-right"
                color={theme.colors.heading}
                size={18}
              />
            </View>
          </RectButton>
          <View style={styles.field}>
            <View>
              <Text style={styles.label}>Dia e Mês</Text>
              <View style={styles.column}>
                <BoxInput 
                  maxLength={2} 
                  value={day}
                  onChangeText={setDay}
                />
                <Text style={styles.divider}>/</Text>
                <BoxInput 
                  maxLength={2}
                  onChangeText={setMonth}
                  value={month}
                />
              </View>
            </View>
            
            <View>
              <Text style={styles.label}>Hora e Minuto</Text>
              <View style={styles.column}>
                <BoxInput 
                  maxLength={2} 
                  onChangeText={setHours}
                  value={hours}
                />
                <Text style={styles.divider}>:</Text>
                <BoxInput 
                  maxLength={2}
                  onChangeText={setMinute}
                  value={minute}
                />
              </View>
            </View>
          </View>
          
          <View style={[styles.field, { marginBottom: 12 }]}>
            <Text style={styles.label}>
              Descrição
            </Text>
            <Text style={styles.caracteresLimit}>
              Max 100 caracteres
            </Text>
          </View>

          <Textarea 
            multiline
            maxLength={100}
            numberOfLines={5}
            autoCorrect={false}
            onChangeText={setDescription}
            value={description}
          />

          <View style={styles.footer}>
            <Button 
              textButton="Agendar"
              onPress={handleSave}
            />
          </View>
        </View>
      </ScrollView>
      <ModalList closeModal={() => setVisible(false)} visible={visible}>
        <Guilds handleGuildSelected={handleGuildSelected} />
      </ModalList>
    </KeyboardAvoidingView>
  );
};

export default AppointmenstCreate;
