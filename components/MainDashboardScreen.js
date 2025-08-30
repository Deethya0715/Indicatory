import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MainDashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>DASHBOARD</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Driving Score Card */}
        <View style={styles.scoreCard}>
          <View style={styles.scoreHeader}>
            <Text style={styles.scoreTitle}>YOUR DRIVING SCORE</Text>
            <Text style={styles.scoreStatus}>Good</Text>
          </View>
          <Text style={styles.scoreValue}>85</Text>
          <Text style={styles.scoreFeedback}>Excellent! Keep up the great driving habits.</Text>
        </View>
        {/* Start Drive Button */}
        <TouchableOpacity style={styles.startDriveButton}>
          <Text style={styles.startDriveButtonText}>Start Drive</Text>
        </TouchableOpacity>
        {/* Driving Insights */}
        <Text style={styles.sectionTitle}>DRIVING INSIGHTS</Text>
        <View style={styles.insightCard}>
          <Icon name="lightbulb-on-outline" size={28} color="#00BFFF" style={styles.insightIcon} />
          <View style={styles.insightContent}>
            <Text style={styles.insightTitle}>SMOOTH ACCELERATION</Text>
            <Text style={styles.insightText}>Avoid rapid acceleration to save fuel and reduce wear on your tires. Aim for a gentle, steady increase in speed.</Text>
          </View>
        </View>
        <View style={styles.insightCard}>
          <Icon name="car-brake-alert" size={28} color="#00BFFF" style={styles.insightIcon} />
          <View style={styles.insightContent}>
            <Text style={styles.insightTitle}>ANTICIPATE TRAFFIC</Text>
            <Text style={styles.insightText}>Look ahead and anticipate changes in traffic flow. This helps you react smoothly and avoid sudden braking.</Text>
          </View>
        </View>
        <View style={styles.insightCard}>
          <Icon name="car" size={28} color="#00BFFF" style={styles.insightIcon} />
          <View style={styles.insightContent}>
            <Text style={styles.insightTitle}>MAINTAIN SAFE DISTANCE</Text>
            <Text style={styles.insightText}>Ensure you leave enough space between your vehicle and the one in front. This provides ample time to react.</Text>
          </View>
        </View>
        {/* Recent Activity */}
        <Text style={styles.sectionTitle}>RECENT ACTIVITY</Text>
        <View style={styles.activityCard}>
          <Icon name="check-circle-outline" size={24} color="#00BFFF" style={styles.activityIcon} />
          <View style={styles.activityContent}>
            <Text style={styles.activityTitle}>Trip Completed</Text>
            <Text style={styles.activityText}>Achieved a perfect score on your morning commute.</Text>
            <Text style={styles.activityTime}>10 mins ago</Text>
          </View>
        </View>
        <View style={styles.activityCard}>
          <Icon name="star-outline" size={24} color="#00BFFF" style={styles.activityIcon} />
          <View style={styles.activityContent}>
            <Text style={styles.activityTitle}>Score Improved</Text>
            <Text style={styles.activityText}>Your driving score increased by 3 points.</Text>
            <Text style={styles.activityTime}>2 hours ago</Text>
          </View>
        </View>
      </ScrollView>
      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Icon name="home" size={24} color="#00BFFF" />
          <Text style={styles.navText}>Dashboard</Text>
        </View>
        <View style={styles.navItem}>
          <Icon name="history" size={24} color="#fff" />
          <Text style={styles.navText}>History</Text>
        </View>
        <View style={styles.navItem}>
          <Icon name="account" size={24} color="#fff" />
          <Text style={styles.navText}>Profile</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  header: {
    paddingTop: 40,
    paddingBottom: 12,
    backgroundColor: '#111',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 80,
  },
  scoreCard: {
    backgroundColor: '#23262b',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    width: '90%',
    maxWidth: 340,
    alignItems: 'center',
  },
  scoreHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 8,
  },
  scoreTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 1,
  },
  scoreStatus: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  scoreValue: {
    color: '#00BFFF',
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 8,
  },
  scoreFeedback: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  startDriveButton: {
    backgroundColor: '#00FFFF',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 32,
    marginBottom: 24,
    width: '90%',
    maxWidth: 340,
    alignItems: 'center',
  },
  startDriveButtonText: {
    color: '#111',
    fontWeight: 'bold',
    fontSize: 18,
  },
  sectionTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 10,
    letterSpacing: 1,
  },
  insightCard: {
    backgroundColor: '#23262b',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 14,
    width: '90%',
    maxWidth: 340,
  },
  insightIcon: {
    marginRight: 14,
  },
  insightContent: {
    flex: 1,
  },
  insightTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 4,
    letterSpacing: 1,
  },
  insightText: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 18,
  },
  activityCard: {
    backgroundColor: '#23262b',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 14,
    width: '90%',
    maxWidth: 340,
  },
  activityIcon: {
    marginRight: 14,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 4,
    letterSpacing: 1,
  },
  activityText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 2,
  },
  activityTime: {
    color: '#aaa',
    fontSize: 12,
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
    height: 60,
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
});

export default MainDashboardScreen;