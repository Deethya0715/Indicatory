import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TripSummaryScreen = ({ navigation }) => {
  const handlePress = () => {
    // Temporary action: navigate to MainDashboardScreen
    if (navigation) {
      navigation.navigate('TripHistoryScreen');
    }
  };

  return (
    <View style={styles.page}>
      <Text>Trip Summary</Text>
      <TouchableOpacity style={styles.tempButton} onPress={handlePress}>
        <Text style={styles.tempButtonText}>Temporary Button</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tempButton: {
    marginTop: 20,
    backgroundColor: '#00BFFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  tempButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TripSummaryScreen;