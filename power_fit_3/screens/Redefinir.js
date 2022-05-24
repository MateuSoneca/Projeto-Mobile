import React from 'react';
import { Image, View, Text, TextInput, Button, ImageBackground, StyleSheet, SafeAreaView, Pressable, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Redefinir({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../assets/cadimia.png')} style={{width:200, height:200,}} /> 
      </View>
     <Text style={styles.rotulo}> Email</Text>
      <TextInput
        style={styles.input}
        keyboardType='email-address'
      />
      <View style={styles.salvar}>
      <Pressable onPress={() => navigation.navigate('apresentacao')}>
          <Text stlye={{fontWeight: 'bold', color: 'white'}} >Salvar</Text>
      </Pressable>
      </View>
      <View style={styles.cancelar}>
      <Pressable onPress={() => navigation.navigate('apresentacao')}>
          <Text stlye={{fontWeight: 'bold', color: 'white'}} >Cancelar</Text>
      </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
    backgroundColor: 'white',
  },
  logo: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    maringTop:40,
    
  },
  rotulo: { 
    color: 'black', 
    paddingTop: 0,
    marginHorizontal:48,
    marginTop: 24, 
  },
  salvar: {
    margin: 8,
    backgroundColor: '#FA6300',
    fontWeight: 'bold',
    justifyContent:'center',
    color: 'white',
    textAlign: 'center',
    borderRadius: 20,
    marginTop: 16,
    height:40,
    marginHorizontal:60,
  },
  cancelar: {
    margin: 8,
    backgroundColor: '#03466F',
    fontWeight: 'bold',
    justifyContent:'center',
    color: 'white',
    textAlign: 'center',
    borderRadius: 20,
    marginTop: 8,
    height:40,
    marginHorizontal:60,

  },
   input: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginHorizontal: 24,
  },

});