import React, {useState} from 'react';
import { Image, View, Text, TextInput, Button, ImageBackground, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import * as firebase from 'firebase';

import { MaterialIcons } from '@expo/vector-icons';
import logo from '../../assets/cadimia.png'; 

const image = { uri: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1928&q=80" };



export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  return (
    <SafeAreaView
      style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
    
      <Text style={{ textAlign: 'center', position: "relative", bottom: 90}}  onPress={() => navigation.navigate('apresentacao')}>
        <Image source={logo} style={styles.logo} /> 
      </Text>
      

     <Text style={styles.rotulo}> Email</Text>
      <TextInput
        style={styles.input}
        keyboardType='email-address'
        value={email}
          onChangeText={(text) => setEmail(text)}
      
      />

      <Text style={styles.rotulo}> Senha </Text>
      <TextInput
      value={senha}
      onChangeText={(text) => setSenha(text)} 
        style={styles.input}
        secureTextEntry={true}
      />

       <Pressable onPress={() => navigation.navigate('Redefinir')}>
          <Text style={styles.esqueci}>Esqueceu a senha?</Text>
      </Pressable>

      <View style={{paddingTop: 24}}>

      <Pressable
      onPress={() => {
              firebase
              .auth()
              .signInWithEmailAndPassword(email, senha)
              .then((userCredential)=>navigation.navigate(''))
                .catch((error)=> alert(error.message));
            }}
            >
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
