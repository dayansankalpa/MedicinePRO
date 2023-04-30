import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';


import Logo from '../assets/medicine-pharmacy.webp';

export default function LoginScreen(props) {
    const { handleSignupPress } = props;

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
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    autoCapitalize="none"
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signup} onPress={handleSignupPress}>
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
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    form: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingVertical: 30,
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
        marginTop: 20,
    },
    logo: {
        width: 200,
        height: 100,
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
    signup: {
        marginTop: 20,
    },
    signupText: {
        color: '#007AFF',
    },
});
