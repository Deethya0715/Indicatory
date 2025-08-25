import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import all of your screen components here
import WelcomeScreen from './components/WelcomeScreen';
import PermissionsScreen from './components/PermissionsScreen';
import Dashboard from './components/MainDashboardScreen'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
        <Stack.Screen name='Dashboard' component={MainDashboardScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
