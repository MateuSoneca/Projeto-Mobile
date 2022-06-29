import React, {useEffect} from 'react';
import {Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import {Container, LoadingIcon} from './Styles';
import Logo from '../../assets/cadimia.png';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';


export default ()=>{
  const navigation= useNavigation();

  useEffect(()=>{
    const checkToken=async()=> {
        const token=await AsyncStorage.getItem('token');
        if(token){
          // validar token
        } else{
            navigation.navigate('login')
        }
    }
    checkToken();
  }, []);


  return(
    <Container>
      <Text style={{position:'absolute',top:30, color:'orange', fontStyle:'italic', fontWeight:'bold', fontFamily:'sans-serif'}}> NO PAIN NO GAIN!</Text>
      <Image source={Logo} style={{width:200,height:200}} />
      <LoadingIcon size="large" color="#FA6300"/>
    </Container>
  );
}