import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, ScrollView, Button, Modal} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { color } from 'react-native-reanimated';


export default function Checkout({ navigation }){
  return(
    <>
    <View style={conteinerStyle.container}>
      <View style={conteinerStyle.header}>
        <Image style={{alignSelf: 'flex-start', height: 40, width: 200 ,resizeMode:'stretch' }} source={require('./images/check_out.png')} />
      </View>

      <View style={conteinerStyle.body}>
      <Text style = {{color:'#F2B938', fontSize: 40, fontWeight: 'bold', alignSelf:'center'}}>Loja Jeito de Ser</Text>
          <Text style={{fontSize: 25, alignSelf: 'center'}}>Agradecemos sua visita</Text>
        <Image style={imageStyles.imageCenter} source={require('./images/check_out_tks.png')} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={buttonStyle.buttonYellow}>
          <Text style={{color: 'black', fontSize: 20, alignSelf: 'center'}}>VOLTAR A TELA INICAL</Text>
      </TouchableOpacity>
    </View>
    </> 
               
  );
}



const conteinerStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  header:{
    flex: 0.08,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 25,
  },

  body: {
    flex: 0.92,
    justifyContent: 'space-around',
  },

});

const imageStyles=StyleSheet.create({
  imageCenter:{
    flex: 1,
    // width: "100%",
    // height: 450,
    alignSelf: 'center',
  },

});

const buttonStyle = StyleSheet.create({
  buttonYellow:{
    backgroundColor: '#F2B938',
    textAlign: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,        
  },

  buttonWhite:{
    backgroundColor: '#e5e5e5',
    textAlign: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,        
  },

  floatingButton: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 15,
    right: 15,
    width: 60,
    height: 60,
    backgroundColor: 'rgb(253,107,13)',
    borderRadius: 100,
  },
});

const stylesModal = StyleSheet.create ({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    
    modalView: {
      flex:1,
      width: "100%",
      backgroundColor: "rgba(255,255,255,0.5)",
      padding:0
    },
    modalButton1: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      position: 'absolute',
      bottom: 170,
      right: 0,
      
    },
    modalButton2: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      position: 'absolute',
      bottom: 135,
      right: 0,
    },
    modalButton3: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      position: 'absolute',
      bottom: 100,
      right: 0,
      margin:0,
    },
  
    textStyle: {
      color: "black",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
  
    imgModal:{
      resizeMode:'contain',
      width:"30%",
      height: 25,
      marginRight: 10,
    },
  
  });