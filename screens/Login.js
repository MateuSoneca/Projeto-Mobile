import React from 'react';
import { Image, View, Text, TextInput, Button, ImageBackground, StyleSheet, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from '../assets/cadimia.png';
import login from '../assets/login.png'; 


export default function Login({ navigation }) {
  return (
    <SafeAreaView
      style={styles.container}>
    <ImageBackground source={login} style={styles.image}>
    
      <Text style={{ textAlign: 'center', position: "relative", bottom: 90}}  onPress={() => navigation.navigate('apresentacao')}>
        <Image source={logo} style={styles.logo} /> 
      </Text>
      

     <Text style={styles.rotulo}> Email</Text>
      <TextInput
        style={styles.input}
        keyboardType='email-address'
      
      />

      <Text style={styles.rotulo}> Senha </Text>
      <TextInput 
        style={styles.input}
        secureTextEntry={true}
      />

       <Pressable onPress={() => navigation.navigate('cadastro')}>
          <Text style={styles.esqueci}>Esqueceu a senha?</Text>
      </Pressable>

      <View style={{paddingTop: 24}}>

      <Pressable onPress={() => navigation.navigate('')}>
          <Text style={styles.jaSouCad}>Entrar</Text>
      </Pressable>

 
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
    borderRadius: 49,  
    width: 150,
    height: 100,
    position: 'relative',
    top: 70
  },

  input: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    backgroundColor: 'white',
    borderRadius: 14,
  },

   rotulo: { 
    color: 'lightgrey', 
    paddingTop: 16 
  },

  jaSouCad: {
    position: 'relative',
    bottom: 15,
    padding: 11,
    margin: 73,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#FA6300',
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
  },

  esqueci: {
    textAlign: 'end',
    color: 'white',
     textDecorationLine: 'underline'
  }
});

