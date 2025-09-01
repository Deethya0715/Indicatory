import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TripSummaryScreen = ({ navigation }) => {
  return (
    // The SafeAreaView ensures all content is placed below the status bar and within safe screen boundaries.
    <SafeAreaView style={styles.container}>
      {/* The StatusBar component is used to manage the device's status bar appearance */}
      <StatusBar barStyle="light-content" />
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={28} color="#fff" />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.headerTitle}>TRIP SUMMARY</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Driving Score Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Driving Score</Text>
          <Text style={styles.score}>85</Text>
          <Text style={styles.scoreLabel}>Excellent Drive</Text>
          <Text style={styles.cardDesc}>Overall performance based on speed, braking, and turns.</Text>
        </View>
        {/* Route Overview Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Route Overview</Text>
          <View style={styles.routeImageContainer}>
            {/* Empty container for future map/image */}
          </View>
        </View>
        {/* Driving Events Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Driving Events</Text>
          <View style={styles.eventRow}>
            <Icon name="rotate-right" size={20} color="#fff" style={styles.eventIcon} />
            <Text style={styles.eventText}>3 Sharp Turns Detected</Text>
            <View style={styles.warningBadge}><Text style={styles.warningText}>Warning</Text></View>
          </View>
          <View style={styles.eventRow}>
            <Icon name="signal" size={20} color="#fff" style={styles.eventIcon} />
            <Text style={styles.eventText}>Used Indicator on all turns</Text>
          </View>
          <View style={styles.eventRow}>
            <Icon name="car-brake-alert" size={20} color="#fff" style={styles.eventIcon} />
            <Text style={styles.eventText}>1 Hard Brake Detected</Text>
            <View style={styles.warningBadge}><Text style={styles.warningText}>Warning</Text></View>
          </View>
          <View style={styles.eventRow}>
            <Icon name="speedometer" size={20} color="#fff" style={styles.eventIcon} />
            <Text style={styles.eventText}>Exceeded Speed Limit Briefly</Text>
            <View style={styles.warningBadge}><Text style={styles.warningText}>Warning</Text></View>
          </View>
        </View>
        {/* Action Buttons */}
        <TouchableOpacity style={styles.dashboardButton} onPress={() => navigation.navigate('MainDashboardScreen')}>
          <Text style={styles.dashboardButtonText}>Back to Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.historyButton} onPress={() => navigation.navigate('TripHistoryScreen')}>
          <Text style={styles.historyButtonText}>View History</Text>
        </TouchableOpacity>
      </ScrollView>
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
  },
  headerTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  score: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#00ffff',
  },
  scoreLabel: {
    fontSize: 18,
    color: '#aaa',
    marginBottom: 5,
  },
  cardDesc: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
  },
  routeImageContainer: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 10,
  },
  routeImage: {
    width: '100%',
    height: '100%',
  },
  routeOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 10,
  },
  routeOverlayText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  eventRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  eventIcon: {
    marginRight: 15,
  },
  eventText: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  warningBadge: {
    backgroundColor: '#FF5733',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 15,
  },
  warningText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  dashboardButton: {
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
  dashboardButtonText: {
    color: '#111',
    fontWeight: 'bold',
    fontSize: 16,
  },
  historyButton: {
    marginTop: 15,
  },
  historyButtonText: {
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
    fontSize: 16,
  },
});

export default TripSummaryScreen;
