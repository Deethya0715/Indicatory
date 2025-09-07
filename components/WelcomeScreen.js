// WelcomeScreen.js
import { Image, View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import React from 'react'; // This is the corrected line
import { useState, useEffect } from 'react';

const Logo = ({ style }) => {
  return (
    <View style={[styles.LogoWrapper, style]}>
      <Image source={require('../images/logo.jpg')} style={styles.LogoImage} />
    </View>
  );
};


const WelcomeScreen = ({ navigation }) => {
  // Function to handle the button press and navigate to the next screen
  const handlePress = () => {
    // In your final app, this will navigate to the Permissions screen
    navigation.navigate('AuthScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.content}>
        {/* The App's Logo/Title */}
        <Logo />
        <Text style={styles.title}>Welcome to</Text>
        <Text style={styles.appName}>Indicatory</Text>

        {/* The call-to-action button */}
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    height: 56,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
    textAlign: 'center',
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e', // Your dark gray background
    justifyContent: 'center',
    alignItems: 'center',
  },
  LogoWrapper: {
    borderRadius:20,
    overflow: 'hidden',
  },
  LogoImage:{
    width: 100,
    height: 100,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: -80, // Adjust to visually center the content
  },
  title: {
    fontSize: 28,
    fontWeight: '300',
    color: '#F5F5F5',
  },
  appName: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#00FFFF', // Your primary accent color
    marginTop: 10,
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#00FFFF',
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e1e1e',
    textTransform: 'uppercase',
  },
});

export default WelcomeScreen;