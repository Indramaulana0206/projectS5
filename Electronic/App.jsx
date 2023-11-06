// import { Text, View , TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import React, { Component } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import utama from './src/screens/utama';
import kedua from './src/screens/kedua'
import about  from './src/screens/about';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouterName="utama" screenOption={{headerShown : false }}>
        <Stack.Screen name = 'utama' component = {utama}/>
        <Stack.Screen name= 'about' component={about} />
        <Stack.Screen name= 'kedua' component={kedua} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;