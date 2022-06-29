import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button, Pressable, SafeAreaView, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import logo from '../assets/cadimia.png'; 
import * as firebase from 'firebase';

export default function Cadastro({ navigation }) {
   const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ textAlign: 'center', position: "relative", bottom: 10}} onPress={() => navigation.navigate('apresentacao')}>
        <Image source={logo} style={styles.logo}   /> 
      </Text>

      <View style={{ paddingHorizontal: 16}}> 
      <Text style={styles.rotulo}> Email</Text> 
        <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        keyboardType='email-address'
      />
      <Text style={styles.rotulo}> Senha</Text>
        <TextInput
        value={senha}
        onChangeText={(text) => setSenha(text)}
        style={styles.input}
        keyboardType='default'
        secureTextEntry={true}
      />

      </View>

      <Pressable onPress={() => {firebase
              .auth()
              .createUserWithEmailAndPassword(email, senha)
              .then((userCredential)=>navigation.navigate('login'))
                .catch((error)=> alert(error.message));
                }}>
          <Text style={styles.entrar}>Cadastrar</Text>
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