import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Logo from '../assets/medicine-pharmacy.webp';

export default function LoginScreen(props) {
    const { handleSignupPress, handleLoginSuccess } = props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLoginPress = () => {
      if (email === 'dayan' && password === '123') {
        handleLoginSuccess();
        setTimeout(() => {
          navigation.navigate('Home');
        }, 2000);
      } else {
        alert('Invalid username or password');
      }
    };

    const handleRegisterPress = () => {
      navigation.navigate('Register');
    };

    return (
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.title}>MedicinePRO</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signup} onPress={handleRegisterPress}>
            <Text style={styles.signupText}>Don't have an account? Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#ffffff',
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#12A5DA',
    },
    form: {
        width: '85%',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
        borderWidth: 0,
        borderColor: '#ddd',
        marginTop: 5,
    },
    logo: {
        width: 180,
        height: 100,
        marginTop: 20,
    },
    input: {
        borderWidth: 0,
        borderColor: '#ccc',
        backgroundColor: '#f3f5ff',
        borderRadius: 4,
        padding: 10,
        marginVertical: 10,
        fontSize: 16,
        width: 250,
        flexGrow: 1,
    },
    button: {
        backgroundColor: '#90BA55',
        padding: 10,
        borderRadius: 4,
        marginTop: 10,
        width: 250,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
    signup: {
        marginTop: 15,
    },
    signupText: {
        color: '#12A5DA',
    },
});
