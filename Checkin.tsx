import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, ScrollView, Button, Modal} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';


export default function Checkin ({navigation}){
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // alert('Check-in realizado com sucesso! Aproveite sua experiência Natura');
    navigation.navigate('Compras');
      
  };

  if (hasPermission === null) {
    return <Text>Solicitando permissão de câmera</Text>;
  }
  if (hasPermission === false) {
    return <Text>Sem acesso a câmera</Text>;
  }

  return(
    <>
    <View style = {styles.container}>

      <View style={styles.headerExt}>
        <View style={styles.headerInt1}>
          <Image style={styles.imgHeader} source={require('./images/icons/menu.png')} />
          <Image style={styles.logoHeader} source={require('./images/natura-logo-h1.png')} />
        </View>
        <View style={styles.headerInt2}>
          <Text style={styles.headText}>CHECK-IN</Text>
        </View>
      
      </View>

      <View style={styles.containerInter}>
          <Text style = {styles.textInter}>Aponte o leitor abaixo para o código na entrada da loja para realizar seu check-in</Text>
      </View>

  </View>

  <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end',}}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && <Button color={'#F2B938'} title={'Escanear Novamente'} onPress={() =>setScanned(false)} />}
  </View>

    </>
               
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 0.5,
      backgroundColor: 'white',
      alignItems: 'center',
      alignContent: 'center',
      marginTop: '10%'
    },

    containerInter: {
      flex: 0.8,
      backgroundColor: '#F2B938',
      textAlign: 'center',
      justifyContent: 'center',
    },
    
    headText:{
      fontSize: 22,
      color: 'black',

    },

    textInter: {
      fontSize: 18,
      justifyContent: 'center',
      margin: '10%'
    },

    icon:{
      width: 100,
      height: 100,
    },
  
    imgHeader:{
      resizeMode:'contain',
      width:"20%",
      height: 25,
      marginRight: 10,
    },
  
    logoHeader:{
      resizeMode:'contain',
      width: "60%",
      height: 50,
      marginLeft: 3,
      padding:0,
    },
  
    headerExt:{
      flex: 0.1,
      width: "100%",
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
    },

    headerInt1:{
      flex:0.5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },

    headerInt2:{
      flex:0.5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
  
    svcontainer:{
      flex:0.1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    menuHorizontal:{
      height: 30,
      backgroundColor:'white',
      paddingRight: 20,
      paddingLeft:20,
      alignSelf: 'center'
    },
  
    imagemView:{
      flex: 0.3,
      width: "100%",
      alignItems: 'center',
      justifyContent:'center',
    },
  
    imagem:{
      height: "100%",
      width: "96%",
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