import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LiveDrivingScreen = ({ navigation }) => {
  // Timer logic
  const [seconds, setSeconds] = useState(330); // 5:30 in seconds
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [paused]);

  const formatTime = (secs) => {
    const m = String(Math.floor(secs / 60)).padStart(2, '0');
    const s = String(secs % 60).padStart(2, '0');
    return `00:${m}:${s}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={28} color="#fff" />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.headerTitle}>ON A DRIVE</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.timer}>{formatTime(seconds)}</Text>
        <Text style={styles.drivingTime}>Driving Time</Text>
        <View style={styles.mapContainer}>
          {/* Replace with your map image if available */}
          <Text style={styles.mapTitle}>ROUTE IN PROGRESS</Text>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.pauseButton, paused && styles.resumeButton]}
            onPress={() => setPaused((prev) => !prev)}>
            <Icon name="pause" size={22} color={paused ? '#fff' : '#00FFFF'} style={styles.buttonIcon} />
            <Text style={[styles.pauseButtonText, paused && styles.resumeButtonText]}>{paused ? 'Resume' : 'Pause'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.stopDriveButton} onPress={() => navigation.navigate('TripSummaryScreen')}>
            <Icon name="stop" size={22} color="#fff" style={styles.buttonIcon} />
            <Text style={styles.stopDriveButtonText}>Stop Drive</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: '#1e1e1e',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 24,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },
  backIcon: {
    position: 'absolute',
    left: 20,
    top: 24,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 24,
  },
  timer: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#00FFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  drivingTime: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 18,
  },
  mapContainer: {
    width: 380,
    height: 220,
    backgroundColor: '#e5e5e5',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    overflow: 'hidden',
  },
  mapTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  pauseButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#00FFFF',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginRight: 16,
    backgroundColor: 'transparent',
  },
  pauseButtonText: {
    color: '#00FFFF',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 8,
  },
  resumeButton: {
    backgroundColor: '#00BFFF',
    borderColor: '#00BFFF',
  },
  resumeButtonText: {
    color: '#fff',
  },
  stopDriveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#444',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  stopDriveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 8,
  },
  buttonIcon: {
    marginRight: 0,
  },
});

export default LiveDrivingScreen;