import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

import Logo from '../assets/medicine-pharmacy.webp';

export default function RegisterScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        if (email && password && confirmPassword && password === confirmPassword) {
            console.log('Email:', email);
            console.log('Password:', password);
            console.log('Confirm Password:', confirmPassword);

            // perform any actions that should happen upon successful registration
        } else {
            console.log('Invalid registration information');
            // show an error message or perform any actions that should happen upon failed registration
        }
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
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    value={confirmPassword}
                    onChangeText={(text) => setConfirmPassword(text)}
                />
                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Register</Text>
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
        color: '#62a2ef',
    },
    logo: {
        width: 180,
        height: 100,
        marginTop: 20,
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
        backgroundColor: '#007AFF',
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
    login: {
        marginTop: 20,
    },
    loginText: {
        color: '#007AFF',
        fontSize: 16,
    },
});