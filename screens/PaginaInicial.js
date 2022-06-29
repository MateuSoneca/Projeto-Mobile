import React from 'react';
import { FlatList, Pressable, SafeAreaView, Text, View, ImageBackground, StyleSheet, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AntDesign } from '@expo/vector-icons';
import Swiper from 'react-native-swiper'
import freq from '../assets/frequencia.png'
import treinos from '../assets/treinos.png'
import nutri from '../assets/nutri_fit.png'
import avaliacao from '../assets/avaliacao.png'

export default function PaginaInicial({ navigation }) {
  
 return (
   <SafeAreaView style={{paddingHorizontal: 36}}>

    <View>
      <View>
        <Text style= {{position: 'relative', top: 20, fontStyle: 'Copperplate', fontWeight: 'bold'}}>
        Olá Usuario!
        </Text>
      </View>
      <View style={{ height: 600, position: 'relative', top: 50, }}>
        <Swiper style={styles.wrapper} showsButtons={true}> 

          <View style={styles.slide1}>
            <ImageBackground source={treinos} style={styles.image}>
            <Pressable onPress={() => navigation.navigate('treinos')}>
              <Text style={styles.treinos}>Treinos</Text>
            </Pressable>
            </ImageBackground>         
          </View>

         <View style={styles.slide2}>
            <ImageBackground source={freq} style={styles.image}>             
            <Pressable onPress={() => navigation.navigate('frequencia')}>
              <Text style={styles.freq}>Frequência</Text>
            </Pressable>
            </ImageBackground>        
          </View>

          <View style={styles.slide3}>
            <ImageBackground source={nutri} style={styles.image}>             
            <Pressable onPress={() => navigation.navigate('Nutricao')}>
              <Text style={styles.treinos}>Nutri Fit</Text>
            </Pressable>
            </ImageBackground>        
          </View>

          <View style={styles.slide4}>
            <ImageBackground source={avaliacao} style={styles.image}>             
            <Pressable onPress={() => navigation.navigate('Avaliacao')}>
              <Text style={styles.freq}>Avaliação</Text>
            </Pressable>
            </ImageBackground>        
          </View>
        </Swiper>
      </View>

      <View>
        
      </View>
    </View>
    </SafeAreaView>
    )
}
  const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width:'100%',
  },

  image2: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 40
   
  },
  image3: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20
   
  },

   treinos: {
    position: 'relative',
    top: 155,
    padding: 11,
    paddingHorizontal: 20,
    margin: 30,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#03466F',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderRadius: 19
  },

  freq: {
    position: 'relative',
    top: 155,
    padding: 11,
    paddingHorizontal: 20,
    margin: 30,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#FA6300',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderRadius: 19
  },
});
