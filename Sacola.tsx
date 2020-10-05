import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, ScrollView, Button, Modal} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { color } from 'react-native-reanimated';


export default function Sacola ({ navigation }){
  return(
    <>
    <View style={conteinerStyle.container}>
      <View style={conteinerStyle.header}>
        <Image style={{alignSelf: 'flex-start', height: 40 }} source={require('./images/sacola.png')} />
      </View>

      <View style={conteinerStyle.body}>
        <Image style={imageStyles.imageCenter} source={require('./images/produto_sacola.png')} />
        <Image style={imageStyles.imageCenter} source={require('./images/valor_pagar.png')} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('PagCaixa')} style={buttonStyle.buttonWhite}>
          <Text style={{color: 'black', fontSize: 20, alignSelf: 'center'}}>PAGAMENTO NOS CAIXAS</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('PagApp')} style={buttonStyle.buttonYellow}>
          <Text style={{color: 'black', fontSize: 20, alignSelf: 'center'}}>PAGAMENTO VIA APLICATIVO</Text>
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
  imagem:{
    height: "100%",
    width: "96%",
  },

  imagemView:{
    flex: 0.3,
    width: "100%",
    alignItems: 'center',
    justifyContent:'center',
  },

  imgHeader:{
    alignSelf: 'flex-start',
    resizeMode:'contain',
    // width:"100%",
    height: 30,
  },

  imageCenter:{
    flex: 1,
    resizeMode: 'contain',
    width: "100%",
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