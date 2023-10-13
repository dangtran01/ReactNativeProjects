
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground,TouchableOpacity,Image,Button,SafeAreaView,TextInput,CheckBox } from 'react-native';
import React, { useState } from 'react';
import getResult from './components/result';
import { useNavigation } from '@react-navigation/native';



export default function Page2() {
  const navigation = useNavigation();

    const [firstNumber, setFirstNumber] = React.useState('');
    const [UserNumber1, setUserNumber1] = React.useState('');
    const [UserNumber2, setUserNumber2] = React.useState('');
    const [UserNumber3, setUserNumber3] = React.useState('');
    const [UserNumber4, setUserNumber4] = React.useState('');
    const [secondNumber, setSecondNumber] = React.useState('');
    const [markers, setMarkers] = useState([
      null, null, null,
      null
    ])

    // const [operation, setOperation] = React.useState("");

    const getRandomNumber = () => {
      const randomNumber = Math.floor(Math.random() * 100);
      setFirstNumber(randomNumber);
      const randomNumber2 = Math.floor(Math.random() * 100);
      setSecondNumber(randomNumber2);
  }
  
  const maker = (a,b) => {
    const result1 = getResult(a,b,"+");
    const result2 = getResult(a,b,"-");
    const result3 = getResult(a,b,"*");
    const result4 = getResult(a,b,"/");

    console.log('')
    console.log(UserNumber1)
    console.log(UserNumber2)
    console.log(UserNumber3)
    console.log(UserNumber4)
    console.log('')
    console.log(result1?.toString())
    console.log(result2?.toString())
    console.log(result3?.toString())
    console.log(result4?.toString())
    // console.log(getResult(a,b,"-"))
    // console.log(getResult(a,b,"*"))
  
  
  }
  
  

  

  return (
    <View style={styles.container}>

        <ImageBackground source={require('./mathbg.jpeg')}
         style={styles.background}
         >
          <Button style={styles.BTN1}
                    title='get random number'
                    onPress={() => getRandomNumber()}
                />



       <SafeAreaView>
       <Text style={styles.question}>{firstNumber} + {secondNumber} = ?</Text>
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
          
        
          
       <Text style={styles.question}>{firstNumber} * {secondNumber} = ?</Text>
       <TextInput
          value={UserNumber3}
          onChangeText={(UserNumber3) => setUserNumber3(UserNumber3)}
          placeholder={'Enter Any value'}
          style={styles.input}
        />
          
       <Text style={styles.question}>{firstNumber} / {secondNumber} = ?</Text>
       <TextInput
          value={UserNumber4}
          onChangeText={(UserNumber4) => setUserNumber4(UserNumber4)}
          placeholder={'Enter Any value'}
          style={styles.input}
        />
          
         
    </SafeAreaView>
            
            
    <View style={styles.ButtonFrame}>
        <TouchableOpacity style={styles.Button} onPress={()=>maker(firstNumber,secondNumber)} > 
        <Text style={styles.label}>Save</Text>
           {/* <Text style={styles.label}>{markers[0]}</Text>
          <Text style={styles.label}>{markers[1]}</Text>
          <Text style={styles.label}>{markers[2]}</Text>
          <Text style={styles.label}>{markers[3]}</Text> */}

        </TouchableOpacity> 


        <TouchableOpacity  onPress={() => navigation.navigate('Page3',
        {u1: UserNumber1,u2:UserNumber2,u3:UserNumber3,u4:UserNumber4,r1:firstNumber,r2:secondNumber}    
        )}>
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

  label: {
    margin:0,
    fontSize: 15,
    fontWeight: 'bold',
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
  background: {
    width: '100%',
    height: '100%'
  },
   Button:{
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
    width:200,
    padding: 20,
    borderRadius:30,
  },
  Button2:{
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
    width:200,
    padding: 20,
    borderRadius:30,
  },
    CheckButton:{
    backgroundColor:'#4E505F',
    width:200,
    height:55,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius:20,
  },
   ButtonFrame :{
    borderTopWidth: 5,
    position:'absolute',
    bottom:20,
    width:'100%',
    padding:30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
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
    height: 69,
    width: 200,
    borderRadius:30,
  }
});
