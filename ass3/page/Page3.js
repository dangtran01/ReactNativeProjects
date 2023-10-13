
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground,TouchableOpacity,Image } from 'react-native';
import * as React from 'react';
import { useRoute } from '@react-navigation/native';


export default function Page3() {


  const route = useRoute();
  const num1 = route.params?.u1
  const num2 = route.params?.u2
  const num3 = route.params?.u3
  const num4 = route.params?.u4
  const firstNumber = route.params?.r1
  const secondNumber = route.params?.r2


  


  return (

    <View style={styles.container}>

        <ImageBackground source={require('./mathbg.jpeg')}
         style={styles.background}
         >
          {/* <Text style={styles.label}>{num1}</Text>
          <Text style={styles.label}>{num2}</Text>         
          <Text style={styles.label}>{num3}</Text>  
          <Text style={styles.label}>{num4}</Text>       */}
          {/* <SafeAreaView>
            <Text style={styles.question}>{firstNumber} |/ {secondNumber} = ?</Text>
            <TextInput
                value={UserNumber1}
                onChangeText={(UserNumber1) => setUserNumber1(UserNumber1)}
                placeholder={'Enter Any value'}
                style={styles.input}
              />

            <Text style={styles.question}>{firstNumber} - {secondNumber} = ?</Text>
            <TextInput
                value={UserNumber2}
                onChangeText={(UserNumber2) => setUserNumber2(UserNumber2)}
                placeholder={'Enter Any value'}
                style={styles.input}
              />
        </SafeAreaView> */}



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
  label: {
    margin:0,
    fontSize: 15,
    fontWeight: 'bold',
  },
  background: {
    width: '100%',
    height: '100%'
  },
  input: {
    height: 50,
    margin: 5,
    fontWeight: '700' ,
    fontSize:20,
    borderWidth: 2,
    borderRadius: 30,
    padding: 10,
  },
  question: {
    fontSize: 50,
    fontWeight: 'bold',
    letterSpacing: 13,
    color: '#fff',
    textAlign:"center",

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
   Icon: {
    height: 110,
    width: 270
  }
});
