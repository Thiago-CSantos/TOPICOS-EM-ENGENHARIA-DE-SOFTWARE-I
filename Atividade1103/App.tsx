import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

const Drawe = createDrawerNavigator();

import HomeScreen from './screens/HomeScreen';
import CadastroAlunoScreen from './screens/CadastroAlunoScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import CadastroFuncionarioScreen from './screens/CadastroFuncionarioScreen';

export default function App() {
  return (
    <NavigationContainer>
      <Drawe.Navigator initialRouteName='Home'>
        <Drawe.Screen name="Home" component={HomeScreen} />
        <Drawe.Screen name="CadastroAluno" component={CadastroAlunoScreen} />
        <Drawe.Screen name="CadastroFuncionario" component={CadastroFuncionarioScreen} />
        <Drawe.Screen name="Notifications" component={NotificationsScreen} />
      </Drawe.Navigator>
    </NavigationContainer>
  );
}
