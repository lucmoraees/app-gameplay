import React, { useState, useCallback } from "react";
import { View, FlatList } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { styles } from './styles';
import Profile from '../../components/Profile';
import ButtonAdd from "../../components/ButtonAdd";
import CategorySelect from "../../components/CategorySelect";
import ListHeader from "../../components/ListHeader";
import Appointments, { AppointmentsProps } from '../../components/Appointments';
import ListDivider from '../../components/ListDivider';
import { COLLECTION_APPOINTMENTS } from "../../configs/database";
import Loading from "../../components/Loading";

const Home = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState<string>('');
  const [appointments, setAppointements] = useState<AppointmentsProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handleCategorySelect = (categoryId: string) => {
    if (categoryId === category) {
      setCategory('')
      return
    }
    setCategory(categoryId);
  }

  const  handleAppointmenstDetails = (guildSelected: AppointmentsProps) => {
    navigation.navigate('AppointmenstDetails', { guildSelected })
  }

  const handleAppointmenstCreate = () => {
    navigation.navigate('AppointmenstCreate')
  }

  const getAppointments = async () => {
    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const appointmentsStorage: AppointmentsProps[] = storage ? JSON.parse(storage) : [];

    if (category) {
      setAppointements(appointmentsStorage.filter(item => item.category === category));
    } else {
      setAppointements(appointmentsStorage);
    }

    setLoading(false);
  }

  useFocusEffect(useCallback(() => {
    getAppointments();
  }, [category]));

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmenstCreate} />
      </View>

      <CategorySelect 
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
      {loading ? (
        <Loading />
      ) : (
        <>
          <ListHeader title="Partidas agendadas" subtitle={`Total ${appointments.length}`}/>
          <FlatList 
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }: any) => (
              <Appointments 
                data={item} 
                onPress={() => handleAppointmenstDetails(item)}
              />
            )}
            style={styles.matches}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider />}
            contentContainerStyle={{ paddingBottom: 30 }}
          />
        </>
      )}
    </View>
  )
}

export default Home;
