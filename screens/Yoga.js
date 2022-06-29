import React from 'react';
import { FlatList, Pressable, SafeAreaView, Text, View, Button, StatusBar, StyleSheet, Animated,Image  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Frequencia({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Text
        style={{
          backgroundColor: '#03466F',
          color: 'white',
          
          fontSize: 24,
          padding:16,
          textAlign: "center"
        }}>Yoga</Text>
        <Pressable style={{position:'absolute', left:8, top:12,  padding:8}} onPress={() =>navigation.navigate('treinos')}>
          <Icon
            color="white"
            name="arrow-left"
            size={24}
            type="material"
          />
        </Pressable>
    </View>
    <View style={styles.tudo}>
      <View style={styles.borda}>
        <View style={styles.imagem}>
          <Image source={require('../assets/yoga.png')} style={{width:100, height:100}}/>
          <Text style={{marginTop:8,color:'#03466F', fontSize:20,fontWeight:'bold'}}>Oceano</Text>
        </View>
        <View style={styles.corpo}>
          <Text style={styles.fonte}>30 min</Text>
          <Text style={styles.fonte}>45 min</Text>
          <Text style={styles.fonte}>60 min</Text>
        </View>
      </View>
      <View style={styles.borda}>
        <View style={styles.imagem}>
          <Image source={require('../assets/stretch.png')} style={{width:100, height:100}}/>
          <Text style={{marginTop:8,color:'#03466F', fontSize:20,fontWeight:'bold'}}>Deserto</Text>
        </View>
        <View style={styles.corpo}>
          <Text style={styles.fonte}>30 min</Text>
          <Text style={styles.fonte}>45 min</Text>
          <Text style={styles.fonte}>60 min</Text>
        </View>
      </View>
      <View style={{width:'100%'}}>
        <View style={styles.imagem}>
          <Image source={require('../assets/yoga-pose.png')} style={{width:100, height:100}}/>
          <Text style={{marginTop:8,color:'#03466F', fontSize:20,fontWeight:'bold'}}>Morning</Text>
        </View>
        <View style={styles.corpo} >
          <Text style={styles.fonte}>30 min</Text>
          <Text style={styles.fonte}>45 min</Text>
          <Text style={styles.fonte}>60 min</Text>
        </View>
      </View>
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
  imagem: {
    justifyContent:'flex-start',
    alignItems: 'center',
    margin:8,

  },
  corpo: {
   flex:0,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:12,
    paddingHorizontal:50,
    
  },
  borda:{
    borderBottomWidth:1,
    margin:0,
    width:'100%',
    borderColor:'gray'
  },
  tudo: {
    marginHorizontal:0,
    paddingVertical:20,
    flex:1,
    justifyContent: 'space-between',
    alignItems: 'center', 
  },
  fonte: {
    fontSize:15,
    color:'gray',
    fontWeight:'bold'
  }
});
