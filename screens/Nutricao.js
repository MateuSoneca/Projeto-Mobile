import React from 'react';
import { FlatList, Pressable, SafeAreaView, Text, View, Button, StatusBar, StyleSheet, Animated  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Nutricao({navigation}) {

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
        }}>Nutrição</Text>
        <Pressable style={{position:'absolute', left:8, top:12,  padding:8}} onPress={() =>navigation.navigate('')}>
          <Icon
            color="white"
            name="arrow-left"
            size={24}
            type="material"
          />
        </Pressable>
    </View>
    <View style={styles.corpo}>
      <View style={styles.titulo}>
        <Text style={{fontWeight: 'bold',fontSize: 32,}}>Diário</Text>
        <Text style={{color: "gray"}}>Terça-feira, 12 de abril</Text>
      </View>
        <View style={styles.head}>
        <View style={{width:100, alignItems:'center '}}>
        <Text numberOfLines={2}>270 consumidas</Text>
        
        </View>
        <View style={{alignItems:'center', alignContent: 'center', marginHorizontal:10}}>
          <View style={styles.progressBar}>
            <Animated.View
              style={
                ([StyleSheet.absoluteFill], 
                { backgroundColor: 'orange', width:'50%',borderRadius: 16,  })
              }></Animated.View>
          </View>
          <Text style={{color:'gray', marginTop:2}}>Faltam 1000kcal</Text>
        </View>
        <View style={{width:100, alignItems:'center', paddingLeft:8}}>
          <Text>200 queimadas</Text>
        </View>
      </View>
    </View>
    <View >
    <Text style={{paddingTop:32, textAlign:'center',color:'gray'}}>Meta diária: 200 kcal</Text>
    </View>
      <View style={styles.meio}>
        <View style={{width:100, alignItems: 'center',}}>
        <Text>110g/200g</Text>
          <View style={styles.menorProgressBar}>
          <Animated.View
                style={
                  ([StyleSheet.absoluteFill], 
                  { backgroundColor: 'orange', width:'50%',borderRadius: 16,  })
                }></Animated.View>
          </View>
          <Text style={{color:'gray'}}>Proteína</Text>
        </View>
        
        <View style={{width:100, alignItems: 'center',}}>
        <Text>110g/200g</Text>
          <View style={styles.menorProgressBar}>
          <Animated.View
                style={
                  ([StyleSheet.absoluteFill], 
                  { backgroundColor: 'orange', width:'50%',borderRadius: 16,  })
                }></Animated.View>
          </View>
          <Text style={{color:'gray'}}>Carboidrato</Text>
        </View>
        
        <View style={{width:100, alignItems: 'center',}}>
        <Text >110g/200g</Text>
          <View style={styles.menorProgressBar}>
          <Animated.View
                style={
                  ([StyleSheet.absoluteFill], 
                  { backgroundColor: 'orange', width:'5 0%',borderRadius: 16,  })
                }></Animated.View>
          </View>
          <Text style={{color:'gray'}}>Gordura</Text>
        </View>
        </View>
    <View style={styles.agua}>
      <Text style={{fontSize:20, fontWeight:'bold',color:'white'}}>Água</Text>
      <Text style={{fontSize:20, fontWeight:'bold',color:'white'}}>800ml</Text>
    </View>
    
    <View style={styles.sub_cafe}>
      <View style={styles.linha}>
        <Text style={{fontSize:15, fontWeight:'bold',color:'white'}}>Pão</Text>
        <Text style={{fontSize:15, fontWeight:'bold',color:'white'}}>50g</Text>
      </View>
      <View style={styles.linha}>
        <Text style={{fontSize:15, fontWeight:'bold',color:'white'}}>Requeijão</Text>
        <Text style={{fontSize:15, fontWeight:'bold',color:'white'}}>50g</Text>
      </View>
      <View style={styles.linha}>
        <Text style={{fontSize:15, fontWeight:'bold',color:'white'}}>Queijo</Text>
        <Text style={{fontSize:15, fontWeight:'bold',color:'white'}}>50g</Text>
      </View>
    </View>
    <View style={styles.cafe}>
      <Text style={{fontSize:20, fontWeight:'bold',color:'white'}}>Café da manhã</Text>
      <Text style={{fontSize:20, fontWeight:'bold',color:'white'}}>300kcal</Text>
    </View>
    <View style={styles.almoco}>
      <Text style={{fontSize:20, fontWeight:'bold',color:'white'}}>Água</Text>
      <Text style={{fontSize:20, fontWeight:'bold',color:'white'}}>800ml</Text>
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
  titulo: {
    alignItems: 'center',
  },
  corpo: {
    marginHorizontal:8,
    paddingTop: 24
  },
  progressBar: {
   height: 32,
   flexDirection: "row",
   width: '95%',
   backgroundColor: 'lightgray',
   borderWidth: 0,
   borderRadius: 16,
 },
  menorProgressBar: {
   height: 20,
   flexDirection: "row",
   width: '95%',
   backgroundColor: 'lightgray',
   borderWidth: 0,
   borderRadius: 16,
   marginTop:4,
   
 },
  head: {
      flexDirection: "row",
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      alignContent: 'center',
      marginTop:24,
      marginRight:20,
      
  },
  meio: {
   
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignContent: 'center',
    marginTop:32,
    marginHorizontal:20
  },
  agua:{
    marginTop:40,
    backgroundColor:'#03466F',
    borderRadius:16,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    marginHorizontal:20,
    paddingHorizontal:16,
    height:50,
  },
   cafe:{
    marginTop:24,
    backgroundColor:'#03466F',
    borderRadius:16,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    marginHorizontal:20,
    paddingHorizontal:16,
    height:50,
    position:'relative',
    right:0,
    top:-155,
  },
  sub_cafe:{
    backgroundColor:'lightgray',
    borderRadius:16,
    marginHorizontal:20,
    paddingHorizontal:16,
    height:132,
    marginTop:24,
    paddingTop:62,
  },
  linha:{
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignContent: 'center',
  },
  almoco:{
    marginTop:0,
    backgroundColor:'#03466F',
    borderRadius:16,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    marginHorizontal:20,
    paddingHorizontal:16,
    height:50,
    position:'relative',
    top:-48,
  }
});
