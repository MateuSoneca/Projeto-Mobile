import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import React from 'react';
import { FlatList, Pressable, SafeAreaView, Text, View, Button, StatusBar, StyleSheet, Animated,Image  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BouncyCheckbox from "react-native-bouncy-checkbox";
LocaleConfig.locales['fr'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: ['Jan.', 'Fev.', 'Mar', 'Abril', 'Mai', 'Jun', 'Jul.', 'Agos', 'Set.', 'Out.', 'Nov.', 'Déc.'],
  dayNames: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'],
  dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.'],
  today: "Hoje"
};
LocaleConfig.defaultLocale = 'fr';


export default function Frequencia({ navigation }) {
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
        }}>Frequência</Text>
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
        <Text style={{color:'white', fontWeight:'bold'}}>Essa semana!</Text>
        <View style={styles.check}>
          <BouncyCheckbox
            size={15}
            fillColor="orange"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "orange" }}
            onPress={(isChecked: boolean) => {}}
          />
          
          <BouncyCheckbox
            size={15}
            fillColor="orange"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "orange" }}
            onPress={(isChecked: boolean) => {}}
          />
          <BouncyCheckbox
            size={15}
            fillColor="orange"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "orange" }}
            onPress={(isChecked: boolean) => {}}
          />
          <BouncyCheckbox
            size={15}
            fillColor="orange"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "orange" }}
            onPress={(isChecked: boolean) => {}}
          />
          <BouncyCheckbox
            size={15}
            fillColor="orange"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "orange" }}
            onPress={(isChecked: boolean) => {}}
          />
          <BouncyCheckbox
            size={15}
            fillColor="orange"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "orange" }}
            onPress={(isChecked: boolean) => {}}
          />
          <BouncyCheckbox
            size={15}
            fillColor="orange"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: "orange" }}
            onPress={(isChecked: boolean) => {}}
          />
        </View>
        
      </View>
     
      <View style={styles.calendario}>
          <Calendar
            markingType={'period'}
            markedDates={{
              '2022-05-24': {startingDay: false, color: 'lightblue'},
              '2022-05-23': {selected: true, endingDay: false, color: 'lightblue', textColor: 'gray'},
              '2022-05-02': {disabled: true, startingDay: true, color: 'lightblue'},
              '2022-05-03': {disabled: true, startingDay: false, color: 'lightblue', endingDay: true},
              '2022-05-09': {disabled: true, startingDay: true, color: 'lightblue', endingDay: true}
            }}
          />
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
  corpo: {
    marginTop:40,
    backgroundColor:'#03466F',
    borderRadius:16,
    flexDirection: "column",
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    marginHorizontal:20,
    height:80,
    paddingTop:10
  },
  check:{
    paddingTop:10,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  calendario:{
    margin:16,
    marginTop:40,
    borderRadius:8,
    borderWidth:1,
    padding:8,
  },
  dia:{
    position:'absolute',
    top:172,
    right:260,
    width:15,
    height:15,
    borderRadius:4,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',

  }
}
)