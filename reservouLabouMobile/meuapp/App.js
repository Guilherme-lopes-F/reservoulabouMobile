import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListarLaboratorios from './src/screens/ListarLaboratorios';
import ReservarLaboratorios from './src/screens/ReservarLaboratorios';
import Cadastro from './src/screens/Cadastro';
import Home from './src/screens/Home';
import Login from './src/screens/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ListarLaboratorios" component={ListarLaboratorios} />
        <Stack.Screen name="ReservarLaboratorio" component={ReservarLaboratorios} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component= {Home} />
        <Stack.Screen name="Login" component= {Login} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
