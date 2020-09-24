import React, { useState, useEffect } from 'react';
import { View, AsyncStorage, KeyboardAvoidingView, Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import api from '../services/api';
import logo from '../assets/logo.png';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [tags, setTags] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if (user) {
                navigation.navigate('List');
            }
        })
    }, []);

    async function handleLogIn() {
        const response = await api.post('/sessions', {
            email
        })

        const { _id } = response.data;

        await AsyncStorage.setItem('user', _id);
        await AsyncStorage.setItem('tags', tags);

        navigation.navigate('List');
    }

    function handleCancel() {
        navigation.navigate('homeScreen');
    }

    return (
        <KeyboardAvoidingView
            behavior="padding"
            enabled={Platform.OS === 'android'}
            style={styles.container}
        >
            <Image style={styles.logo} source={logo} />

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor="#ACACAC"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    placeholderTextColor="#ACACAC"
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.input}
                    placeholder="O que você procura?"
                    placeholderTextColor="#ACACAC"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={tags}
                    onChangeText={setTags}
                />
                <TouchableOpacity onPress={handleLogIn} style={[styles.button, styles.buttonLogIn]}>
                    <Text style={[styles.buttonText, styles.buttonTextLogIn]}>ENTRAR</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleCancel} style={[styles.button, styles.buttonCancel]}>
                    <Text style={[styles.buttonText, styles.buttonTextCancel]}>CANCELAR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonForgotIt}>
                    <Text style={styles.textLabel}>Esqueci minha senha</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E5E5E5',
        padding: 30
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 10,
        marginTop: 20,
    },

    input: {
        height: 43,
        alignSelf: 'stretch',
        borderBottomColor: '#706F6F',
        borderBottomWidth: 1,
        marginTop: 18,
        fontSize: 16,
        color: '#444',
    },

    logo: {
        height: 150,
        resizeMode: "contain",
        alignSelf: 'center',
        marginTop: 8,
    },

    button: {
        height: 55,
        alignSelf: 'stretch',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonLogIn: {
        backgroundColor: '#EB9641',
        marginTop: 25,
    },

    buttonCancel: {
        borderWidth: 2,
        borderColor: '#EB9641',
        marginTop: 15,
    },

    buttonForgotIt: {
        height: 16,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        fontFamily: 'Roboto',
        fontSize: 20,
        lineHeight: 23,
    },

    buttonTextLogIn: { color: '#FFF' },

    buttonTextCancel: { color: '#EB9641' },

    textLabel: {
        color: '#ACACAC',
        fontSize: 14,
        fontFamily: 'Roboto',
        lineHeight: 23,
    }
});