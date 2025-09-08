import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, StatusBar, ActivityIndicator, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { collection, query, orderBy, onSnapshot, doc } from 'firebase/firestore';
import { auth, db } from '../FirebaseConfig';

const getStatusStyle = (score) => {
  if (score >= 90) {
    return { backgroundColor: '#00BFFF', color: '#111' };
  } else if (score >= 70 && score < 90) {
    return { backgroundColor: '#FFC107', color: '#111' };
  } else {
    return { backgroundColor: '#FF5733', color: '#fff' };
  }
};

const TripHistoryScreen = ({ navigation }) => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      navigation.navigate('AuthScreen');
      return;
    }

    // Reference to the 'trips' sub-collection of the current user
    const tripsRef = collection(db, 'users', user.uid, 'trips');
    const q = query(tripsRef, orderBy('date', 'desc'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedTrips = [];
      querySnapshot.forEach((doc) => {
        fetchedTrips.push({ id: doc.id, ...doc.data() });
      });
      setTrips(fetchedTrips);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching trips:", error);
      Alert.alert("Error", "Could not fetch trip history.");
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigation]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00BFFF" />
        <Text style={styles.loadingText}>Loading history...</Text>
      </View>
    );
  }

  // New conditional rendering for when there are no trips
  if (trips.length === 0) {
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
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No trips recorded yet.</Text>
          <Text style={styles.emptySubText}>Start a drive from the Dashboard to see your history!</Text>
        </View>
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
  }


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
        {trips.map((trip) => (
          <TouchableOpacity 
            key={trip.id} 
            style={styles.tripCard} 
            onPress={() => navigation.navigate('TripSummaryScreen', { tripId: trip.id })}
          >
            <View style={styles.tripDetails}>
              <Text style={styles.tripDate}>{new Date(trip.date).toLocaleDateString()}</Text>
              <Text style={styles.tripDescription}>{trip.summary_description}</Text>
            </View>
            <View style={styles.tripScoreContainer}>
              <Text style={[styles.tripScore, getStatusStyle(trip.driving_score)]}>{trip.driving_score}</Text>
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
  loadingContainer: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#fff',
    marginTop: 10,
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
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  emptySubText: {
    fontSize: 16,
    color: '#aaa',
    textAlign: 'center',
  },
});

export default TripHistoryScreen;
