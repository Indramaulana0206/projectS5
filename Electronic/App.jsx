// import { Text, View , TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import React, { Component } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Utama from './src/screens/utama';
import Kedua from './src/screens/kedua'
import About from './src/screens/about';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



const Mytab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="utama" component={Utama}
        options={{
          tabBarLabel: 'Home',headerShown:false, tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='home-circle' color={color} size={size}  />
          )
        }} />
      <Tab.Screen name="kedua" component={Kedua}
        options={{
          tabBarLabel:'Search',headerShown:false, tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name='magnify' color={color} size={size} /> 
          )
        }} />
      <Tab.Screen name="About" component={About}
        options={{
          tabBarLabel: 'Profil',headerShown:false, tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='account' color={color} size={size} />
          )
        }} />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Main' component={Mytab} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;