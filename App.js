import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import all of your screen components here
import WelcomeScreen from './components/WelcomeScreen';
import PermissionsScreen from './components/PermissionsScreen';
import MainDashboardScreen from './components/MainDashboardScreen'
import LiveDrivingScreen from './components/LiveDrivingScreen'
import TripHistoryScreen from './components/TripHistoryScreen'
import TripSummaryScreen from './components/TripSummaryScreen'
import ProfileScreen from './components/ProfileScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
        <Stack.Screen name='MainDashboardScreen' component={MainDashboardScreen}/>
        <Stack.Screen name='LiveDrivingScreen' component={LiveDrivingScreen}/>          
        <Stack.Screen name = 'TripHistoryScreen' component={TripHistoryScreen}/>  
        <Stack.Screen name = 'ProfileScreen' component={ProfileScreen}/>  
      </Stack.Navigator>
    </NavigationContainer>
  );
}
