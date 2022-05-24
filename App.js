import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet, BrowserRouter, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HeaderTitle } from '@react-navigation/elements'

import Apresentacao from './screens/Apresentacao';
import Cadastro from './screens/Cadastro';
import Login from './screens/Login';
import PaginaInicial from './screens/PaginaInicial';

import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettinsScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

 export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="PowerFit" screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="apresentacao" component={Apresentacao}  />
        <Drawer.Screen name="cadastro" component={Cadastro} />
        <Drawer.Screen name="login" component={Login} />
        <Drawer.Screen name="" component={PaginaInicial} 
        options={{  
          headerShown: true, headerBackground: () => ( 
          <View  style={{
            height: 56, backgroundColor: '#03466F',  
            color: 'white' }}>
            <HeaderTitle style={{position: 'relative', top: 20, color: 'white', textAlign: 'center'}}>PowerFit</HeaderTitle>
          </View> ) }}
        />
      </Drawer.Navigator>
    </NavigationContainer>

  );
}

//backup main package.json
//"main": "node_modules/expo/AppEntry.js",
