import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const trips = [
  { date: '2023-11-28', description: 'Excellent Drive, smooth and', score: 92, status: 'good' },
  { date: '2023-11-27', description: 'Careful Trip, some mild braking', score: 75, status: 'average' },
  { date: '2023-11-26', description: 'Good Journey, few sharp turns', score: 88, status: 'good' },
  { date: '2023-11-25', description: 'Challenging Drive, frequent', score: 58, status: 'poor' },
  { date: '2023-11-24', description: 'Long Commute, consistent', score: 85, status: 'good' },
  { date: '2023-11-23', description: 'Short Trip, aggressive', score: 65, status: 'poor' },
  { date: '2023-11-22', description: 'Night Drive, exemplary', score: 95, status: 'excellent' },
  { date: '2023-11-21', description: 'Weekend Outing, some hard', score: 70, status: 'average' },
  { date: '2023-11-20', description: 'City Driving, low score due to', score: 50, status: 'poor' },
  { date: '2023-11-19', description: 'Highway Trip, very smooth.', score: 90, status: 'excellent' },
];

const getStatusStyle = (score) => {
  if (score >= 90) {
    return { backgroundColor: '#00BFFF', color: '#111' };
  } else if (score >= 70 && score < 90) {
    return { backgroundColor: '#00BFFF', color: '#111' };
  } else if (score >= 50 && score < 70) {
    return { backgroundColor: '#FFC107', color: '#111' };
  } else {
    return { backgroundColor: '#FF5733', color: '#fff' };
  }
};

const TripHistoryScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={28} color="#fff" />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.headerTitle}>TRIP HISTORY</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {trips.map((trip, index) => (
          <TouchableOpacity key={index} style={styles.tripCard} onPress={() => navigation.navigate('TripSummaryScreen')}>
            <View style={styles.tripDetails}>
              <Text style={styles.tripDate}>{trip.date}</Text>
              <Text style={styles.tripDescription}>{trip.description}</Text>
            </View>
            <View style={styles.tripScoreContainer}>
              <Text style={[styles.tripScore, getStatusStyle(trip.score)]}>{trip.score}</Text>
              <Icon name="chevron-right" size={24} color="#fff" />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('MainDashboardScreen')}>
          <Icon name="home" size={24} color="#fff" />
          <Text style={styles.navText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('TripHistoryScreen')}>
          <Icon name="history" size={24} color="#00BFFF" />
          <Text style={styles.navTextActive}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('ProfileScreen')}>
          <Icon name="account" size={24} color="#fff" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#000',
    height: 56,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },
  headerTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
    textAlign: 'center',
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },
  tripCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#23262b',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tripDetails: {
    flex: 1,
  },
  tripDate: {
    color: '#888',
    fontSize: 14,
    marginBottom: 4,
  },
  tripDescription: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tripScoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tripScore: {
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 8,
    minWidth: 40,
    textAlign: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#181818',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#23262b',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
  },
  navText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 2,
  },
  navTextActive: {
    color: '#00BFFF',
    fontSize: 12,
    marginTop: 2,
  },
});

export default TripHistoryScreen;
