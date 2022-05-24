import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Pressable, SafeAreaView, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import logo from '../assets/cadimia.png'; 

export default function Cadastro({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ textAlign: 'center', position: "relative", bottom: 10}} onPress={() => navigation.navigate('apresentacao')}>
        <Image source={logo} style={styles.logo}   /> 
      </Text>

      <View style={{ paddingHorizontal: 16}}> 
      <Text style={styles.rotulo}> Nome Completo</Text> 
        <TextInput
        style={styles.input}
        keyboardType='email-address'
      />

      <Text style={styles.rotulo}> Email</Text>
        <TextInput
        style={styles.input}
        keyboardType='email-address'
      />

      <Text style={styles.rotulo}> CPF</Text>
        <TextInput
        style={styles.input}
        keyboardType='numeric'
      />

      <Text style={styles.rotulo}> Telefone</Text>
        <TextInput
        style={styles.input}
        keyboardType='numeric'
      />

      <Text style={styles.rotulo}> Senha</Text>
        <TextInput
        style={styles.input}
        keyboardType='default'
        secureTextEntry={true}
      />

      </View>

      <Pressable onPress={() => navigation.navigate('paginaInicial')}>
          <Text style={styles.entrar}>Entrar</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({  
  rotulo: { 
    color: 'black',
    paddingTop: 16 
  },
  input: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },

  titulo: {
    paddingLeft: 16,
    backgroundColor: 'black',
    color: 'white',
    height: 56,
    fontSize: 24,
    paddingVertical: 16,

    flexDirection: 'row',
    paddingTop: 16,
    alignItems: 'center'
  },
  logo: {
    borderRadius: 60,  
    width: 150,
    height: 100,
    position: 'relative',
    top: 40
  },
   container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white"  
  },

  entrar: {
    padding: 11,
    marginTop: 19,
    margin: 73,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#FA6300',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderRadius: 19
  },
});