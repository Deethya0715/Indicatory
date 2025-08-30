import React from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';


const LiveDrivingScreen = ({ navigation }) => {
  // Function to handle the button press and navigate to the next screen
  const handlePress = () => {
    // In your final app, this will navigate to the Dashboard screen
    navigation.navigate('TripSummaryScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.content}>
        {/* The Page's Title */}
        <Text style={styles.title}>On a Drive</Text>

        {/* Time is currently hard Coded/fixed time */}
        <View>
          <Text style={styles.timeFormatting}>10:30:00</Text>
        </View>

        <View style = {styles.container}>
          <Text style={styles.mapTextOverlay}>Bluetooth Connection</Text>
          <Text style = {styles.bodyText}>Bluetooth is essential for connecting to your vehicle's DriveScore dongle, enabling seamless data collection during your trips.</Text>
        </View>
          
        {/* The call-to-action button */}
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Start Drive</Text>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#F5F5F5',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 50,
    paddingTop: 50,
  },
  timeFormatting: {
    fontSize: 47,
    fontWeight: 'bold',
    color: '#00FFFF', // primary accent color
    marginTop: 10,
    marginBottom: 50,
    textAlign: 'center',
    paddingTop: 50,
  },
  mapTextOverlay: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#F5F5F5',
  },
  bodyText: {
    fontSize: 16,
    color: '#F5F5F5',
    marginTop: 10,
    textAlign: 'center',
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
    color: '#f5f5f5',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


export default LiveDrivingScreen;