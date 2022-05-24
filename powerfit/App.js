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
import Nutricao from './screens/Nutricao';
import Yoga from './screens/Yoga';
import Frequencia from './screens/Frequencia';
import Corrida from './screens/Corrida';
import Caminhada from './screens/Caminhada'

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
        <Stack.Screen name="frequencia" component={Frequencia} />
        <Stack.Screen name="yoga" component={Yoga} />
        <Stack.Screen name="Corrida" component={Corrida} />
        <Stack.Screen name="Caminhada" component={Caminhada} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
