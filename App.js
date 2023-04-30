import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

export default function App() {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSignupPress = () => {
    setIsRegistering(true);
  };

  const handleBackToLoginPress = () => {
    setIsRegistering(false);
  };

  return (
    <View style={styles.container}>
      {isRegistering ? (
        <RegisterScreen handleBackToLoginPress={handleBackToLoginPress} />
      ) : (
        <LoginScreen handleSignupPress={handleSignupPress} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  signup: {
    marginTop: 20,
  },
  signupText: {
    color: '#007AFF',
  },
});
