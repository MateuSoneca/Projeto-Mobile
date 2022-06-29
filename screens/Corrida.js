import React from 'react';
import { FlatList, Pressable, SafeAreaView, Text, View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AntDesign } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function Corrida({ navigation }) {
  
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
          <Pressable  style={{position:'absolute', left:9, top:10,  padding:8}} onPress={() =>navigation.navigate('treinos')}>
          <Icon
            color="white"
            name="arrow-left"
            size={24}
            type="material"
          />
          
          </Pressable>

          <Text onPress={() => navigation.navigate('')}
            style={{ flex: 2,
              color: 'white',
              fontSize: 24,
              textAlign: 'center',
              fontStyle: 'Anton'
            }}>
            Corrida
          </Text>
          
      </View>

    
       <View style={styles.time}> 
     00:00:00
      <Text> Duração</Text>
      </View>

      <View style={styles.timedis}> 
      0,00
      <Text> Distancia(km)</Text>
      </View>

       <View style={styles.timecal}> 
      0
      <Text> Calorias</Text>
      </View>

       <View style={styles.timetemp}> 
      00:00
      <Text> Tempo</Text>
       </View>
       
    
     <TouchableOpacity
        style={styles.adding}
        onPress={',,,'}
      >
        <Text style={{color: 'white', fontSize: 20, }}>Começar</Text>
      </TouchableOpacity>
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
    bottom: 100, 
    right: 130, 
    height: 50, 
  
    borderRadius: 300, 
    justifyContent: 'center', 
    alignItems: 'center',
    width:100,
    backgroundColor:'#FA6300'
    

  },

  time: {
    fontSize:60,
    color:'black',
     right: 50, 
    height: 50,
    bottom:400, 
    position:'absolute',
    alignItems:'center',
  
  },
  timedis: {
     fontSize:40,
    color:'black',
    height: 60,
    left:20,
    bottom:250, 
    position:'absolute',
    alignItems:'center',
    
    
  },
     
  timecal: {
  fontSize:40,
    color:'black',
    height: 60,
    right: 50,
    left: 50,
    bottom:250, 
    position:'absolute',
    alignItems:'center',
    
    
  },

  timetemp: {
      fontSize:40,
    color:'black',
    height: 60,
    right:20,
    bottom:250, 
    position:'absolute',
    alignItems:'center',
        

  },

  
});