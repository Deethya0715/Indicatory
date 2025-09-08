import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, ScrollView, ActivityIndicator, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { doc, onSnapshot } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { auth, db } from '../FirebaseConfig';

const ProfileScreen = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      navigation.navigate('WelcomeScreen');
      return;
    }

    const userDocRef = doc(db, 'users', user.uid);

    const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
      if (docSnap.exists()) {
        setUserData(docSnap.data());
      } else {
        console.log("No such document!");
        setUserData(null);
      }
      setLoading(false);
    }, (error) => {
      console.error("Error fetching user data:", error);
      Alert.alert("Error", "Could not fetch user profile.");
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigation]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigation.navigate('WelcomeScreen');
    } catch (error) {
      Alert.alert('Sign Out Error', error.message);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00BFFF" />
        <Text style={styles.loadingText}>Loading profile...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={28} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerTitleWrapper}>
          <Text style={styles.headerTitle}>PROFILE</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileCard}>
          <Icon name="account-circle" size={100} color="#00BFFF" style={styles.profileIcon} />
          <Text style={styles.profileName}>{userData?.name ?? 'User'}</Text>
          <Text style={styles.profileEmail}>{userData?.email ?? 'N/A'}</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Account Information</Text>
          <View style={styles.infoRow}>
            <Icon name="car" size={20} color="#00BFFF" style={styles.infoIcon} />
            <Text style={styles.infoLabel}>Vehicle:</Text>
            <Text style={styles.infoText}>{userData?.vehicle ?? 'N/A'}</Text>
          </View>
          <View style={styles.infoRow}>
            <Icon name="map-marker-outline" size={20} color="#00BFFF" style={styles.infoIcon} />
            <Text style={styles.infoLabel}>Location:</Text>
            <Text style={styles.infoText}>{userData?.location ?? 'N/A'}</Text>
          </View>
          <View style={styles.infoRow}>
            <Icon name="phone" size={20} color="#00BFFF" style={styles.infoIcon} />
            <Text style={styles.infoLabel}>Phone:</Text>
            <Text style={styles.infoText}>{userData?.phone ?? 'N/A'}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={handleSignOut}>
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('MainDashboardScreen')}>
          <Icon name="home" size={24} color="#fff" />
          <Text style={styles.navText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('TripHistoryScreen')}>
          <Icon name="history" size={24} color="#fff" />
          <Text style={styles.navText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('ProfileScreen')}>
          <Icon name="account" size={24} color="#00BFFF" />
          <Text style={styles.navTextActive}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  headerTitleWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },
  profileCard: {
    backgroundColor: '#23262b',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    width: '100%',
    maxWidth: 340,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profileIcon: {
    marginBottom: 10,
  },
  profileName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  profileEmail: {
    color: '#888',
    fontSize: 16,
    marginTop: 4,
  },
  infoCard: {
    backgroundColor: '#23262b',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    letterSpacing: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 8,
  },
  infoIcon: {
    marginRight: 15,
  },
  infoLabel: {
    color: '#888',
    fontSize: 16,
    fontWeight: 'bold',
    minWidth: 80,
  },
  infoText: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
  },
  logoutButton: {
    backgroundColor: '#FF5733',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    width: '100%',
    maxWidth: 320,
    alignItems: 'center',
    shadowColor: '#FF5733',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
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

export default ProfileScreen;
