import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home'
import Profile from '../Screens/Profile'
import Appoinment from '../Screens/Appoinment'
import { Ionicons } from '@expo/vector-icons';
// import { NavigationContainer } from '@react-navigation/native'


const Tab = createBottomTabNavigator()

export default function TabNavigation() {
  return (
    // <NavigationContainer>
    <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name='Home' component={Home}  options={{tabBarIcon:({color,size})=>{
          <Ionicons  size={size} color={color} />
        }}}/>
        <Tab.Screen name='Profile' component={Profile} />
        <Tab.Screen name='Appoinment' component={Appoinment} />
    </Tab.Navigator>
    // </NavigationContainer>
  )
}