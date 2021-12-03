import React from "react";
import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from "./app.routes";
import { useAuth } from "../hook/auth";
import Login from '../pages/Login';

const Routes = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.id ? <AppRoutes /> : <Login /> }
    </NavigationContainer>
  );
};

export default Routes;
