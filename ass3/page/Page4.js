
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground,TouchableOpacity,Image } from 'react-native';
import * as React from 'react';


export default function Page4() {
  return (
    <View style={styles.container}>

        <ImageBackground source={require('./mathbg.jpeg')}
         style={styles.background}
         >
          
        </ImageBackground>
        
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    width: '100%',
    height: '100%'
  },
   Button:{
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius:10,
  },
   ButtonFrame :{
    borderTopWidth: 3,
    backgroundColor: '#1e90ff',
    position:'absolute',
    bottom:5,
    width:'100%',
    padding:5,
    
  },
  icon: {
    height: 62,
    width: 62
  },
  BTN1: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
   Icon: {
    height: 110,
    width: 270
  }
});
