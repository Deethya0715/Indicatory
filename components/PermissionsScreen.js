// PermissionsScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PermissionsScreen = ({ navigation }) => {
  // Function to handle the button press and navigate to the next screen
  const handlePress = () => {
    // In your final app, this will navigate to the Dashboard screen
    navigation.navigate('MainDashboardScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.content}>
        {/* The App's Logo/Title */}
        <Text style={styles.title}>PERMISSIONS REQUIRED</Text>
        <Text style={styles.body}>
          To ensure DriveScore can accurately monitor your driving and provide real-time feedback, we require access to Bluetooth and Location services.
        </Text>
        <View style={styles.card}>
          <Icon name="bluetooth" size={32} color="#00FFFF" style={styles.icon} />
          <Text style={styles.cardTitle}>BLUETOOTH ACCESS</Text>
          <Text style={styles.cardBody}>
            Bluetooth is essential for connecting to your vehicle's DriveScore dongle, enabling seamless data collection during your trips.
          </Text>
        </View>
        <View style={styles.card}>
          <Icon name="map-marker" size={32} color="#00FFFF" style={styles.icon} />
          <Text style={styles.cardTitle}>LOCATION SERVICES</Text>
          <Text style={styles.cardBody}>
            Location access allows us to map your routes, identify driving events (like harsh braking), and provide accurate trip summaries.
          </Text>
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
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 18,
    letterSpacing: 1,
  },
  body: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 28,
    lineHeight: 22,
  },
  card: {
    backgroundColor: '#23262b',
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 18,
    width: '100%',
    maxWidth: 320,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  icon: {
    marginBottom: 8,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    letterSpacing: 1,
    textAlign: 'center',
  },
  cardBody: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#00FFFF',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    marginTop: 12,
    width: '100%',
    maxWidth: 320,
    alignItems: 'center',
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
    textTransform: 'none',
  },
});

export default PermissionsScreen;


