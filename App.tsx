import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button,ScrollView, TouchableOpacity, Modal, Alert, TouchableHighlight} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Map from './Map';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{title:'Natura App'}} />

        <Stack.Screen
          name="Fila"
          component={FilaScreen}
          />
        <Stack.Screen 
          name="Map"
          component={Map}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  ); 
}

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return(
    <View style={styles.container}>
       
      <View  style={styles.headerExt}>
        <View style={styles.headerInt1}>
         
            <Image style={styles.imgHeader} source={require('./images/icons/menu.png')}/>
           
          
            <Image style={styles.logoHeader} source={require('./images/natura-logo-h1.png')}/>
          
        </View>
        <View style={styles.headerInt2}>
          
            <Image style={styles.imgHeader} source={require('./images/icons/magnifier.png')}/>
         
            <Image style={styles.imgHeader} source={require('./images/icons/pin.png')}/>
         
            <Image style={styles.imgHeader} source={require('./images/icons/bag.png')}/>
         </View>
      </View>

      <View style={styles.svcontainer}>
      <ScrollView         
        showsHorizontalScrollIndicator={false}
        horizontal>
        <Text style={styles.menuHorizontal}>PROMOÇÕES</Text>
        <Text style={styles.menuHorizontal}>PRESENTES</Text>
        <Text style={styles.menuHorizontal}>PERFUMARIA</Text>
        <Text style={styles.menuHorizontal}>CUIDADOS DIÁRIOS</Text>
        <Text style={styles.menuHorizontal}>MAQUIAGEM</Text>
      </ScrollView>
      </View>

      <View style={styles.imagemView}>
      <Image style={styles.imagem} source={require('./images/imagem-capa.png')}/>
      </View>

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

            {/*<View style={stylesModal.modalButton1}> */}
            <TouchableOpacity style={stylesModal.modalButton1}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={stylesModal.textStyle}>ESPELHO VIRTUAL</Text>
              <Image style={stylesModal.imgModal} source={require('./images/icons/mirror.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={stylesModal.modalButton2}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={stylesModal.textStyle}>ENCONTRE</Text>
              <Image style={stylesModal.imgModal} source={require('./images/icons/flag.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={stylesModal.modalButton3}
              onPress={() => {
                navigation.navigate('Map');
              }}
            >
              <Text style={stylesModal.textStyle}>CHECK-IN</Text>
              <Image style={stylesModal.imgModal} source={require('./images/icons/cod_barras.png')}/>
            </TouchableOpacity>
              
            <TouchableOpacity 
              style={styles.floatingButton}
              onPress={()=> {setModalVisible(false)}}
            >
              <Text>x</Text>
            
          </TouchableOpacity>
            
          </View>
        </View>
      </Modal>
      
      <TouchableOpacity 
          style={styles.floatingButton}
          onPress={()=> {setModalVisible(true)}}
        >
          <Text>+</Text>
        
      </TouchableOpacity>
    </View>
  );
};

const FilaScreen = () => {
  return <Text>This is Maria</Text>;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
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
