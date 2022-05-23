import React from 'react';
import { FlatList, Pressable, SafeAreaView, Text, View, ImageBackground, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AntDesign } from '@expo/vector-icons';


export default function PaginaInicial({ navigation }) {
  
  const Contato = ({ item }) => {
    return (
      <View
        style={styles.container}>     
        <Text style={{ flex: 2, color: 'black' }}>{item.nome}</Text>
        <Text style={{ flex: 1, color: 'black' }}>{item.lancamento}</Text>   
      </View>      
    );
  };
  return (
    <SafeAreaView style={{flex :1}}>
    
    <View style={{flex :1}}>
       <View style={styles.titulo}>
          <Pressable >
            <Text style={{color: 'white'}}>SAIR</Text>
          </Pressable>

          <Text onPress={() => navigation.navigate('apresentacao')}
            style={{ flex: 2,
              color: 'white',
              fontSize: 24,
              textAlign: 'center',
              fontStyle: 'Anton'
            }}>
            PowerFit
          </Text>
          
      </View>
      
    
      <Pressable 
      style={styles.adding}
      onPress={() => navigation.navigate('cadastro')}>
        <Text style={{color: 'white', fontSize: 24}}>+</Text>
      </Pressable>
    </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 56,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    backgroundColor: 'white'
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },

  titulo: {
          flexDirection: 'row',
          paddingLeft: 16,
          backgroundColor: '#03466F',
          height: 56,
          alignItems: 'center'
  },
  
  adding: {
    position: 'absolute', 
    bottom: 56, 
    right: 15, 
    height: 48, 
    width: 48, 
    backgroundColor: 'darkred', 
    borderRadius: 40, 
    justifyContent: 'center', 
    alignItems: 'center'
  }

});