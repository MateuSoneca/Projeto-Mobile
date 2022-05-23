import React from 'react';
import { Text, View, StyleSheet, BrowserRouter } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Apresentacao from './screens/Apresentacao';
import Lista from './screens/Listagem';
import Cadastro from './screens/Cadastro';
import Login from './screens/Login';
import PaginaInicial from './screens/PaginaInicial';
import Redefinir from './screens/Redefinir';
import Nutricao from './screens/Nutricao'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="apresentacao" component={Apresentacao} />
        <Stack.Screen name="lista" component={Lista} />
        <Stack.Screen name="cadastro" component={Cadastro} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="paginaInicial" component={PaginaInicial} />
        <Stack.Screen name="Nutricao" component={Nutricao} />
        <Stack.Screen name="Redefinir" component={Redefinir} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
