import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: { fontWeight: 'bold', fontSize: 20, color: '#62a2ef', },
        }}
      >
        {!isLoggedIn ? (
          <>
            <Stack.Screen
              name="Login"
              options={{ title: 'Log In' }}
            >
              {(props) => <LoginScreen {...props} handleLoginSuccess={handleLoginSuccess} />}
            </Stack.Screen>
            <Stack.Screen
              name="Register"
              options={{ title: 'Register' }}
              component={RegisterScreen}
            />
          </>
        ) : (
          <Stack.Screen name="Home" component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#62a2ef',
  },
});
