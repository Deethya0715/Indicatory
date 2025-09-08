import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Alert, SafeAreaView, StatusBar } from 'react-native';
import { useState, useEffect } from 'react';

// Import the initialized auth and db services from your config file.
// The Firebase app is initialized in FirebaseConfig.js, so we don't
// need to do it here.
import { auth, db } from '../FirebaseConfig';

import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';


const AuthScreen = ({ navigation }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setIsAuthenticated(!!currentUser);
      if (currentUser) {
        // Correct navigation to a screen defined in your App.js
        navigation.navigate('MainDashboardScreen'); 
      }
    });
    return () => unsubscribe();
  }, [navigation]);

  const handleAuth = async () => {
    setLoading(true);
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, "users", userCredential.user.uid), {
          email: userCredential.user.email,
          name: name,
          vehicle: vehicle,
          location: location,
          phone: phone,
          createdAt: new Date(),
        });
      }
    } catch (error) {
      Alert.alert("Authentication Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      Alert.alert("Sign Out Error", error.message);
    }
  };

  if (isAuthenticated) {
    return null;
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00FFFF" />
        <Text style={styles.loadingText}>Please wait...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.content}>
        <Text style={styles.title}>{isLogin ? 'Welcome Back!' : 'Create an Account'}</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#666"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#666"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {!isLogin && (
          <>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="#666"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Vehicle (e.g., Toyota Camry)"
              placeholderTextColor="#666"
              value={vehicle}
              onChangeText={setVehicle}
            />
            <TextInput
              style={styles.input}
              placeholder="Location (e.g., San Francisco, CA)"
              placeholderTextColor="#666"
              value={location}
              onChangeText={setLocation}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor="#666"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />
          </>
        )}
        <TouchableOpacity style={styles.button} onPress={handleAuth}>
          <Text style={styles.buttonText}>{isLogin ? 'Log In' : 'Sign Up'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
          <Text style={styles.toggleText}>
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: '#fff',
    fontSize: 16,
  },
  content: {
    width: '100%',
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
    letterSpacing: 1,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#23262b',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: '#fff',
    borderWidth: 1,
    borderColor: '#333',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#00FFFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#00BFFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  buttonText: {
    color: '#1e1e1e',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'none',
  },
  toggleText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default AuthScreen;
