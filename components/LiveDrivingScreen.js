import React from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';


const LiveDrivingScreen = ({ navigation }) => {
  // Function to handle the button press and navigate to the next screen
  const handlePress = () => {
    // In your final app, this will navigate to the Dashboard screen
    navigation.navigate('TripSummary');
  };
}


const styles = StyleSheet.create({
  page: {
    title: {
      fontSize: 34,
      fontWeight: 'bold',
      color: '#F5F5F5',
      textAlign: 'center',
      flex: 1,
      marginTop: 10,
      marginBottom: 50,
      textAlign: 'center',
      paddingTop: 50,
    },
      timeFormatting: {
      fontSize: 47,
      fontWeight: 'bold',
      color: '#00FFFF', // primary accent color
      marginTop: 10,
      marginBottom: 50,
      textAlign: 'center',
      flex: 2,
      paddingTop: 50,
    },
      mapTextOverlay:{
        fontSize: 30,
        fontWeight: 'bold',
        color:'#F5F5F5',
      },
      pauseButton:{
        borderColor: '#00FFFF',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 30,
        marginTop: 20,
        shadowColor: '#00BFFF',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
      },
      buttonText: {
        color: '#f5f5f5',
        fontSize: 16,
        fontWeight: 'bold',
      },
      stopDriveButton:{
        backgroundColor: '#777b7e',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 30,
        marginTop: 20,
        shadowColor: '#4e5052',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
      }

},
})