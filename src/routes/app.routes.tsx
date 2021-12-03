import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from "../global/styles/theme";

import Home from '../pages/Home';
import AppointmenstDetails from '../pages/AppointmenstDetails';
import AppointmenstCreate from '../pages/AppointmenstCreate';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
          backgroundColor: theme.colors.secondary90,
      },
    }}
  >
    <Screen name="Home" component={Home} />
    <Screen name="AppointmenstDetails" component={AppointmenstDetails} />
    <Screen name="AppointmenstCreate" component={AppointmenstCreate} />
  </Navigator>
)

export default AuthRoutes;
