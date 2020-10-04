import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import MapView,  {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image,TouchableOpacity,TouchableHighlight, Alert, ImageBackground, Modal,PermissionsAndroid} from 'react-native';

export default function Map({ navigation} : { navigation: any}) 
  {
    const [modalVisible, setModalVisible] = useState(false);
    let myCoordinate= {latitude:-23.5554272, longitude:-46.6048644}

    return(
        <View style={styles.container}>
            
            {/* HEADER */}
            <View style={styles.header}>
            <TouchableOpacity
              style={styles.imgContainer}
              onPress={() => {
                navigation.navigate('Home');
              }} >
              <Image style={styles.imgHeader} source={require('./images/icons/arrow-back.png')}/>
            </TouchableOpacity>
                
                <Text style={styles.textHeader}>Localização</Text>
                <TouchableOpacity
                    style={styles.imgContainer2}
                    onPress={() => {
                    navigation.navigate('Home');
                }} >
                    <Image style={styles.imgHeader} source={require('./images/icons/magnifier.png')}/>
                </TouchableOpacity>
            </View>
            {/* END OF HEADER */}

            {/* MAP */}
            <View style={styles.mapContainer}>
                <MapView style={styles.mapStyle}
                    initialRegion={{
                        latitude: myCoordinate.latitude,
                        longitude: myCoordinate.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                      }}
                >
                    <Marker coordinate={{
              latitude: myCoordinate.latitude,
              longitude: myCoordinate.longitude,
            }}/>
                </MapView>
                
            </View>
            {/* END OF MAP */}
            
            <Modal
                animationType="slide"
                
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                }}
            >
                <View style={stylesModal.centeredView}>
                <View style={stylesModal.modalView}>
                    <View style={stylesModal.headerZero}>
                        <Image style={stylesModal.imageModal}
                        source={require('./images/icons/store-button.png')}/>
                    </View>
                    <View style={stylesModal.modalHeader}>
                        <ImageBackground style={stylesModal.lotacao} source={require('./images/icons/green-circle.png')}>
                            <Text style={stylesModal.textLotacao}>Lotação {'\n'} Mínima</Text>
                        </ImageBackground>
                        <Text style={stylesModal.textStyle}>Loja</Text>
                        <Text style={stylesModal.textStyleModalFooter}>
                            Jeito de Ser - Aqui tem Natura
                        </Text>
                        <Text style={stylesModal.textStyle}>
                            Rua Peixote Gomide, 2318
                        </Text>

                    </View>

                    <View style={stylesModal.modalBody}>
                        <Text style={stylesModal.textModalBody}>AGENDE SEU ATENDIMENTO</Text>
                        <TouchableHighlight
                        style={stylesModal.modalButton2}
                        underlayColor={'#F2AA33'}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                            navigation.navigate('Map');
                        }} >
                        <Text style={stylesModal.textStyle}>Horários com consutorias</Text>
                        </TouchableHighlight
>
                        
                        <TouchableHighlight
                        style={stylesModal.modalButton2}
                        underlayColor={'#F2AA33'}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}>
                        <Text style={stylesModal.textStyle}>Horários sem consultoria</Text>
                        </TouchableHighlight
>    
                    </View>

                    <View style={stylesModal.modalFooter}>
                        <TouchableHighlight
                        style={stylesModal.modalButton1}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                        >
                        <Text style={stylesModal.textStyleModalFooter}>CONFIRMAR</Text>
                        </TouchableHighlight
>
                        <TouchableHighlight
                         style={stylesModal.modalButton1}
                         onPress={() => {
                            setModalVisible(!modalVisible);
                            navigation.navigate('Map');
                        }} >
                        <Text style={stylesModal.textStyleModalFooter}>TRAÇAR ROTA</Text>
                        </TouchableHighlight
>
                    </View>                 
                </View>
                </View>
            </Modal>
      
            {/* FOOTER */}
            <View style={styles.footer}> 
                <ImageBackground style={styles.imgFooter} source={require('./images/icons/base-maps.png')}>
                    <TouchableOpacity
                        style={styles.footerButton}
                        onPress={() => {setModalVisible(true)}}
                    >
                        <Image style={styles.imgButton} source={require('./images/icons/store-button.png')}/>
                        <Text style={styles.textFooter}>Loja</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.footerButton}
                        onPress={() => {
                        navigation.navigate('Home');
                    }} >
                        <Image style={styles.imgButton} source={require('./images/icons/consultor-button.png')}/>
                        <Text style={styles.textFooter}>Consultor(a)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.footerButton}
                        onPress={() => {
                        navigation.navigate('Home');
                    }} >
                        <Image style={styles.imgButton} source={require('./images/icons/drugstore-button.png')}/>
                        <Text style={styles.textFooter}>Farmácias</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            {/* END OF FOOTER */}
            
            
        </View>
            
        
    );
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        marginTop:20,
    },

    header:{
        flex: 0.06,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "100%",
        backgroundColor: 'white',
        padding: 10,
    },
    imgContainer:{
        flex:1,
        height: "100%",
        marginLeft: 10,
    },
    imgContainer2:{
        flex:1,
        height: "100%",
        marginRight: 10,
        alignItems: 'flex-end',
    },
    imgHeader:{
        resizeMode:'contain',
        width: '40%',
        height: '100%',
      },
      textHeader:{
        flex:3,
        fontSize: 20,
        alignSelf:'center'
      },

      //MAP
      mapContainer:{
        flex:1,
        alignItems:'center'
      },
      mapStyle: {        
        width:Dimensions.get('window').width,
        height:"100%",
        //width: Dimensions.get('window').width,
        //height: Dimensions.get('window').height,
      },

      //FOOTER
      footer:{
        flex: 0.15,
        width:"110%",
      },

      imgFooter:{
        width: "100%",
        height: "120%",
        flexDirection:'row',
        justifyContent:'space-evenly',
        
      },
      imgButton:{
        resizeMode:'contain',
        width: '100%',
        height: '100%',

      },
      footerButton:{
        flex:0.3,
        height: "70%",
        marginTop: -10,
        textAlign:'center',
        alignItems:'center',
        
      },
      textFooter:{
        fontSize: 14,
        margin:-7
      },
});

const stylesModal = StyleSheet.create ({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      
    },
    
    modalView: {
      flex:0.5,
      flexDirection:'column',
      width: "90%",
      backgroundColor: "rgba(255,255,255,0.5)",
      padding:0,
      textAlign: 'center',
      justifyContent: "center",
      alignItems: "center",
    },

    lotacao:{
        resizeMode:'contain',
        height: 70,
        width:70,
        position:'absolute',
        right:0,
        top:-35,
        alignItems:'center',
        justifyContent:'center'

    },
    textLotacao:{
        color:'white'

    },
    headerZero:{
        flex: 0.1,
        width: '100%',
        flexDirection:'column',
        backgroundColor:'#F6F6F6',
        borderBottomColor:'#E7E7E7',
        borderBottomWidth:2,

        alignItems: 'center',
        justifyContent:'space-evenly'
    },
    modalHeader:{
        flex: 0.3,
        flexDirection:'column',
        backgroundColor:'#F6F6F6',
        width:"100%",

        alignItems: 'center',
        justifyContent:'space-evenly'
    },
    modalBody:{
        flex: 0.5,
        width:"100%",
        flexDirection:'column',
        alignItems: 'center',
        justifyContent:'space-around',
        backgroundColor:'white',
        textAlign: 'center',
    },
    modalFooter:{
        flex: 0.2,
        flexDirection:'row',
        backgroundColor:'white',
        
    },
    modalButton1: {
        flex:1,
        flexDirection:"column",
        height: "100%",
        justifyContent:'center',
    },
    modalButton2: {
      height: 50,
      width: "90%",
      borderWidth:1,
      borderRadius:5,
      borderColor: 'rgb(222,222,222)',
      
      shadowColor:'black',
      shadowOpacity:1,
      shadowOffset:{
        width: 100,
        height: 50,
      },
      justifyContent: 'center'
    },
  
    textStyle: {
      color: "black",
      fontWeight: "bold",
      textAlign: "center"
    },
    textModalBody:{
        fontSize: 12,
    },
    textStyleModalFooter:{
      color: "#F2AA33",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 18
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
  
    imageModal:{
      resizeMode:'contain',
      height:'200%',
      marginTop: -40,
      borderBottomColor:'#E7E7E7',
    },

  
  });