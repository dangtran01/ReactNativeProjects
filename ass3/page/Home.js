
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground,TouchableOpacity,Image } from 'react-native';
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';



export default function Home() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <StatusBar barStyle="dark-content" />

        <ImageBackground source={require('./mathbg.jpeg')}
         style={styles.background}
         >
             <View style={styles.ButtonFrame}>
            <TouchableOpacity style={styles.Button}  onPress={() => navigation.navigate('Page2')}>
            <Image source={require('./next1.jpeg')} style={styles.Icon}/>
            </TouchableOpacity> 
        </View>
       
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius:10,

  },
   ButtonFrame :{
    borderTopWidth: 3,
    position:'absolute',
    bottom:3,
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
    height: 100,
    width: 450
  }
});
