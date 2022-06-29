import React, { useState, Component }  from 'react';
import { StyleSheet, Text, TextInput, View, Button, Pressable, SafeAreaView, Image, StatusBar,TouchableOpacity  } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import logo from '../assets/cadimia.png'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import RadioForm from 'react-native-simple-radio-button';
import ModalDropdown from 'react-native-modal-dropdown';
 
export default function Avaliacao({ navigation }) {
  const [chosenOption, setChosenOption, ] = useState('masculino'); //will store our current user options
  const options = [
    { label: 'Masculino', value: 'masculino',},
    { label: 'Feminino', value: 'feminino' },
  ]; 
  let data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];
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
        }}>Avalição</Text>
        <Pressable style={{position:'absolute', left:8, top:12,  padding:8}} onPress={() =>navigation.navigate('')}>
          <Icon
            color="white"
            name="arrow-left"
            size={24}
            type="material"
          />
        </Pressable>
    </View>
          <View style={styles.tudo}>

      <View style={{ paddingHorizontal: 16}}> 
      <Text style={styles.rotulo}>Nome</Text> 
        <TextInput
        style={styles.input}
        keyboardType='email-address'
      />

      <Text style={styles.rotulo}>Altura (cm)</Text>
        <TextInput
        style={styles.input}
        keyboardType='email-address'
      />

      <Text style={styles.rotulo}>Peso (Kg)</Text>
        <TextInput
        style={styles.input}
        keyboardType='numeric'
      />

      <Text style={styles.rotulo}>Idade (anos) </Text>
        <TextInput
        style={styles.input}
        keyboardType='numeric'
      />
      <ModalDropdown options={['Ectomorfo', 'Mesoformo','Endomorfo']} defaultValue={'Tipo corporal'} style={{marginTop:16}} textStyle={{fontSize:14}} dropdownTextStyle={{ fontSize:14 }} dropdownStyle={{width:'80%'}} />

      </View>
          <View style={{position:'row', margin:24,}}>
          <RadioForm style={{position:'row', marginTop:16}}
            radio_props={options}
            initial={0} //initial value of this group
            onPress={(value) => {
              setChosenOption(value);
            }} //if the user changes options, set the new value
          />
        </View>

      <Pressable onPress={() => navigation.navigate('paginaInicial')}>
          <Text style={styles.entrar}>Enviar</Text>
      </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({  
  rotulo: { 
    color: 'black',
    paddingVertical: 16
    
  },
  input: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
   container: {
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
    backgroundColor: 'white', 
  },

  entrar: {
    padding: 11,
    marginTop: 160,
    margin: 72,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#FA6300',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderRadius: 19,
  },
  tudo: {
    justifyContent:'center',

  },
  
});