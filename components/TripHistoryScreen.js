import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TripHistoryScreen = () => {
  return (
    <View style={styles.page}>
      <Text>Trip History</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TripHistoryScreen;