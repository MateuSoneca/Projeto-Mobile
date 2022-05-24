import React from 'react';
import { FlatList, Pressable, Text, View, ImageBackground, StyleSheet, Button , Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import yoga from '../assets/yoga1.png'
import caminhada from '../assets/caminhada.png'; 
import corrida from '../assets/corrida.png'; 
import musculacao from '../assets/musculacao.png'; 


export default function Treinos({ navigation }) {
  
  
  return (
     
    <SafeAreaView style={{flex :1}}>  
    <View style={{flex :2}}>
       <View style={styles.titulo}>
         
        <Pressable
        onPress={() => navigation.navigate('')} title="Open right drawer" 
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
        <AntDesign name="arrowleft" size={24} color="white" />
        </Pressable>

          <Text onPress={() => navigation.navigate('paginaInicial')}
            style={{ flex: 2,
              color: 'white',
              fontSize: 24,
              textAlign: 'center',            
            }}>
            Treinos
          </Text>

      </View>
      
      <Pressable>
         <View style={styles.image}>
         <Image source={yoga} style={styles.logo}/> 
         <Image source={caminhada} style={styles.logo}/> 
         </View>
       </Pressable>

       <Pressable>
        <View style={styles.image}>
        <Image source={musculacao} style={styles.logo}/> 
        <Image source={corrida} style={styles.logo}/> 
        </View>
       </Pressable>
         
    </View>
    </SafeAreaView>

  );
}


const styles = StyleSheet.create({
 
 

  titulo: {
          flexDirection: 'row',
          paddingLeft: 16,
          backgroundColor: '#03466F',
          height: 56,
          alignItems: 'center'
  },
   logo: {
        borderRadius: 10,  
        width: 130,
        height: 100,
  },
 
  image: {
    flexDirection: 'row',
    padding:16,
    paddingTop: 160,
    justifyContent: 'space-between',
    alignItems: 'center',
    },

  
  

});