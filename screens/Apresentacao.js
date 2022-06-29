import React from 'react';
import { Image, View, Text, TextInput, Button, ImageBackground, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import logo from '../assets/cadimia.png'; 
import background from '../assets/background.webp';



export default function Login({ navigation }) {
  return (
    <SafeAreaView style={{flex:1}}>
      <ImageBackground source={background} style={{flex:1}}>
      <View style={{marginVertical:100}}>
          <View >
            <Pressable style={{backgroundColor:'black', padding:80, position:'absolute', top:-5, borderRadius:110, width:100, left:90}}></Pressable>
          </View>
          <View style={styles.centro}>
          <Image source={logo} style={{width:150, height:150}}/>
          </View>
          <View style={{marginTop:80}}>
            <Pressable onPress={() => navigation.navigate('login')} style={styles.botao }>
              <Text style={styles.fonte}>Ja tenho cadastro</Text>
            </Pressable>
            <View style={styles.centro}>
              <Text style={{color:'white', fontWeight:'bold',marginTop:8}}>ou</Text>
            </View>
            <Pressable onPress={() => navigation.navigate('cadastro')} style={styles.botao}>
              <Text style={styles.fonte}>Criar conta</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centro:{
    alignItems:'center'
  },
  botao:{
    backgroundColor:'#FA6300',
    borderRadius:16,
    margin:40,
    marginTop:8,
    alignItems:'center',
    padding:14,
  },
  fonte:{
    fontWeight:'bold',
    color:'white'
  }
});

