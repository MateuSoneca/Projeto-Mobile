import React from 'react';
import styled from 'styled-components/native' ;
import background from '../../assets/background.webp'
export const Container = styled.SafeAreaView`
  background-color: #ffffff;
  flex:1;
  justify-content: center;
  align-items: center;
`;


export const InputArea=styled.View`
  padding:40px;
  width: 100%;
`;

export const Botao=styled.TouchableOpacity`
  height:44px;
  background-color:#FA6300;
  border-radius:30;
  justify-content:center;
  align-items:center;
`;
export const BotaoText=styled.Text`
  color:#ffffff;
  font-size:18;
  font-family:roboto;
  `;

export const EsqueceuBotao=styled.TouchableOpacity`
  flex-direction:row;
  justify-content:center;
  margin-top:50px;
  margin-bottom:50px;
`;
export const EsqueceuBotaoText=styled.Text`
  font-size:16px;
  color:black;
`;

export const CadastrarBotao=styled.TouchableOpacity`
  height:44px;
  border-radius:30;
  justify-content:center;
  align-items:center;  background-color:#03466F;
  
`;



