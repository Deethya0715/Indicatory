import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, ScrollView, Image, Alert, TextInput } from 'react-native';
import Auth0 from 'react-native-auth0';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// NOTE: Replace with your actual Auth0 Domain and Client ID
// The Auth0 domain and client ID are found in your Auth0 dashboard for your application.
const auth0 = new Auth0({
  domain: 'dev-jrv5t0q40kpynlhj.us.auth0.com',
  clientId: '3VLTjXEYQEFxtkSeJUAaAQls7n4ohkh0'
});

const LoginScreen = ({ navigation }) => {
  // Use state to manage the input values, although they are not used for Auth0 login.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuth0Login = async () => {
    try {
      const credentials = await auth0.webAuth
        .authorize({
          scope: 'openid profile email',
        });

      // On successful login, you can now use the credentials.accessToken
      // to make authenticated API calls. For now, we will navigate away.
      console.log('Successfully authenticated with Auth0!');
      console.log('Access Token:', credentials.accessToken);
      navigation.navigate('MainDashboardScreen');

    } catch (error) {
      console.error('Authentication error:', error);
      Alert.alert('Authentication Error', 'Could not log in with Auth0. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.logoContainer}>
          <Image source={{ uri: 'https://placehold.co/100x100/1e1e1e/00BFFF?text=D' }} style={styles.logo} />
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>Sign in to continue your journey.</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email Address</Text>
            {/* The TextInput component is now used here */}
            <TextInput
              style={styles.input}
              placeholder="Your email will be handled by Auth0"
              placeholderTextColor="#888"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Password</Text>
            {/* The TextInput component is now used here */}
            <TextInput
              style={styles.input}
              placeholder="Your password will be handled by Auth0"
              placeholderTextColor="#888"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleAuth0Login}>
          <Text style={styles.buttonText}>Sign In with Auth0</Text>
        </TouchableOpacity>

        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={styles.signUpLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  subtitle: {
    color: '#888',
    fontSize: 16,
    marginTop: 5,
  },
  formContainer: {
    width: '100%',
    maxWidth: 340,
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#23262b',
    color: '#fff',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  placeholderText: {
    color: '#888',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#00FFFF',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    width: '100%',
    maxWidth: 340,
    alignItems: 'center',
    shadowColor: '#00BFFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  buttonText: {
    color: '#111',
    fontWeight: 'bold',
    fontSize: 18,
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  signUpText: {
    color: '#888',
    fontSize: 14,
  },
  signUpLink: {
    color: '#00BFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
