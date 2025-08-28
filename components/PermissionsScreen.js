// PermissionsScreen.js
import React from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';


const PermissionsScreen = ({ navigation }) => {
  // Function to handle the button press and navigate to the next screen
  const handlePress = () => {
    // In your final app, this will navigate to the Dashboard screen
    navigation.navigate('Dashboard');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.content}>
        {/* The App's Logo/Title */}
        <Text style={styles.title}>Permissions Required</Text>
        <Text style={styles.body}>To ensure DriveScore can accurately monitor your driving and provide real-time feedback, we require access to Bluetooth and Location services.</Text>
        
        <View style = {styles.SecondaryContainter}>
          <Text style={styles.headingText}>Bluetooth Connection</Text>
          <Text style = {styles.bodyText}>Bluetooth is essential for connecting to your vehicle's DriveScore dongle, enabling seamless data collection during your trips.</Text>
        </View>

        <View style = {styles.SecondaryContainter}>
          <Text style={styles.headingText}>Location Services</Text>
          <Text style = {styles.bodyText}>Location access allows us to map your routes, identify driving events (like harsh braking), and provide accurate trip summaries.</Text>
        </View>        
        
        {/* The call-to-action button */}
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Allow Permissions</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e', // Your dark gray background
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: -80, // Adjust to visually center the content
  },
  LogoWrapper: {
    borderRadius: 50,
    overflow: 'hidden',
  },
  LogoImage:{
    width: 100,
    height: 100,
  },
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
  body: {
    fontSize: 20,
    fontWeight: '300',
    color: '#F5F5F5',
    textAlign: 'center',
    flex: 15,
    justifyContent: 'flex-start', 
    alignItems: 'center',

  },
  appName: {
    fontSize: 47,
    fontWeight: 'bold',
    color: '#00FFFF', // Your primary accent color
    marginTop: 10,
    marginBottom: 50,
    textAlign: 'center',
    flex: 2,
    paddingTop: 50,

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
  SecondaryContainter:{
    backgroundColor: '#1E2128FF',
    borderRadius: 15,
    padding: 15,
  },
  headingText:{
    color: '#f5f5f5',
    fontsize: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  bodyText:{
    color: '#f5f5f5',
    fontsize: 16,
    lineHeight: 24,
  }
});

export default PermissionsScreen;


