import { DrawerNavigationProp } from '@react-navigation/drawer';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function LoginScreen({ navigation }: { navigation: DrawerNavigationProp<any> }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        console.log(email);
        console.log(password);

        if (email == "thiago@gmail.com" && password == "123") {
            navigation.jumpTo('Home');
        }

        setError("Email ou senha incorretos!");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo</Text>
            <Text style={styles.subtitle}>Faça login para continuar</Text>

            <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#6b7280"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#6b7280"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => alert('Esqueceu a senha?')}>
                <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signUpText}>Não tem uma conta? Cadastre-se</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f8',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#6b7280',
        marginBottom: 30,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    button: {
        backgroundColor: '#2563eb',
        paddingVertical: 15,
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    forgotPassword: {
        color: '#2563eb',
        marginTop: 15,
        fontSize: 14,
    },
    signUpText: {
        color: '#2563eb',
        marginTop: 20,
        fontSize: 14,
    },
    error: {
        color: 'red',
        fontSize: 14,
        marginBottom: 10,
    }
});
