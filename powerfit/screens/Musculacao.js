import React from 'react';
import { FlatList, Pressable, Text, View, ImageBackground, StyleSheet, Button , Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import abnominal from '../assets/abnominal.png'; 
import cruxifico from '../assets/cruxifixo.png'; 
import supino  from '../assets/supino.png'; 
import triceps from '../assets/triceps.png'; 
import tricepss from '../assets/tricepss.png'; 


export default function Musculacao({ navigation }) {
  
  
  return (
     
    <SafeAreaView style={{flex :1}}>  
    <View style={{flex :2}}>
       <View style={styles.titulo}>
         
        <Pressable
        onPress={() => navigation.getParent().openDrawer()} title="Open right drawer" 
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
        <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>

          <Text onPress={() => navigation.navigate('paginaInicial')}
            style={{ flex: 2,
              color: 'white',
              fontSize: 24,
              textAlign: 'center',            
            }}>
            Musculação
          </Text>



         
      </View>
      

         <View style={styles.image}>
         <Image source={logo} style={styles.logo}/> 
         <Text style={{}}> Supino inclinado  repetições : 3 de 10x   Intervalo: 40 seg  Carga: 30 kg
         </Text>
         </View>

         <View style={styles.image}>
         <Image source={logo} style={styles.logo}/> 
          <Text>
          Crucifixo na polia alta
          repetições : 3 de 10x 
          Intervalo: 20 seg
          Carga: 25 kg
         </Text>
         </View>

         <View style={styles.image}>
         <Image source={logo} style={styles.logo}/> 
          <Text>
          Tríceps Testa
          repetições : 3 de 20x 
          Intervalo: 40 seg
          Carga: 10 kg
         </Text>
         </View>


        <View style={styles.image}>
        <Image source={logo} style={styles.logo}/> 
         <Text>
          Tríceps Mergulho                                                 
          repetições : 3 de 12x 
          Intervalo: 40 seg
          Carga: Peso Corporal
         </Text>
        </View>

         <View style={styles.image}>
        <Image source={logo} style={styles.logo}/> 
         <Text style={{flex:1}}>
          Abnominal Infra
          repetições : 3 de 10x 
          Intervalo: 30 seg
          Carga: Peso Corporal
         </Text>
        </View>
  

 

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
    padding:10,
    paddingTop: 30,
    alignItems: 'center',
    },


  

});