import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './page/Home';
import Page2 from './page/Page2';
import Page3 from './page/Page3';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />

      <Stack.Screen
          name="Page2"
          component={Page2}
        />
        <Stack.Screen
          name="Page3"
          component={Page3}
        />

      


      </Stack.Navigator>
    </NavigationContainer>
  );
}


