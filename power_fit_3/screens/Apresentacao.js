import React from 'react';
import { Image, View, Text, TextInput, Button, ImageBackground, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import logo from '../assets/cadimia.png'; 

const image = { uri: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1928&q=80" };



export default function Login({ navigation }) {
  return (
    <SafeAreaView
      style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
    
      <Text style={{ textAlign: 'center', position: "relative", bottom: 90}}>
        <Image source={logo} style={styles.logo} /> 
      </Text>
      

      <Pressable onPress={() => navigation.navigate('login')}> 
          <Text style={styles.entrar}>Já sou Cadastrado</Text>
      </Pressable>

      <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center'}}>
      OU
      </Text>

      <Pressable onPress={() => navigation.navigate('cadastro')}>
          <Text style={styles.cadastrar}>Criar Conta</Text>
      </Pressable>

      <View style={{paddingTop: 24}}>

      

 
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    
  },
  image: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'lightgrey'
  },

  logo: {
    borderRadius: 90,  
    width: 150,
    height: 100,
    position: 'relative',
    top: 40
  },

  input: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },

   rotulo: { 
    color: 'lightgrey', 
    paddingTop: 16 
  },

  entrar: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#03466F',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderRadius: 19
  },

  cadastrar: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#FA6300',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderRadius: 19
  }
});

