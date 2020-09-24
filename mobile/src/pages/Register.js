import React, { useState } from 'react';
import { View, AsyncStorage, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import api from '../services/api';
import logo from '../assets/logo.png';


export default function Register({ navigation }) {
    const [userName, setuserName] = useState('');
    const [email, setEmail] = useState('');
    const [tags, setTags] = useState('');

    async function handleSave() {
        const response = await api.post('/sessions', {
            email,
            userName,
        })

        const { _id } = response.data;

        await AsyncStorage.setItem('user', _id);
        await AsyncStorage.setItem('tags', tags);
        await AsyncStorage.setItem('name', userName);

        navigation.navigate('List');
    }

    function handleCancel() {
        navigation.navigate('homeScreen');
    }

    return (
        <KeyboardAvoidingView
            enabled={Platform.OS === 'android'}
            behavior="padding"
            style={styles.container}
        >
            <Image style={styles.logo} source={logo} />
            <View style={styles.form}>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Nome"
                    placeholderTextColor="#ACACAC"
                    style={styles.input}
                    value={userName}
                    onChangeText={setuserName}
                />
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="E-mail"
                    placeholderTextColor="#ACACAC"
                    style={styles.input}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    autoCapitalize="words"
                    autoCorrect={false}
                    placeholder="Diga um Doce ou Salgado que ama"
                    placeholderTextColor="#999"
                    style={styles.input}
                    value={tags}
                    onChangeText={setTags}
                />
                <TouchableOpacity onPress={handleSave} style={[styles.button, styles.buttonSave]}>
                    <Text style={[styles.buttonText, styles.buttonTextSave]}>SALVAR</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleCancel} style={[styles.button, styles.buttonCancel]}>
                    <Text style={[styles.buttonText, styles.buttonTextCancel]}>CANCELAR</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },

    logo: {
        height: 70,
        resizeMode: "contain",
        alignSelf: 'center',
        marginTop: 10,
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 10,
        marginTop: 30,
    },

    input: {
        height: 43,
        alignSelf: 'stretch',
        borderBottomWidth: 1,
        borderBottomColor: '#706F6F',
        marginTop: 20,
        fontSize: 16,
        color: '#444',
    },

    button: {
        height: 55,
        alignSelf: 'stretch',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonSave: {
        backgroundColor: '#EB9641',
        marginTop: 27,
    },

    buttonCancel: {
        borderWidth: 2,
        borderColor: '#EB9641',
        marginTop: 10,
        marginBottom: 27,
    },

    buttonText: {
        fontSize: 20,
        fontFamily: 'Roboto',
        lineHeight: 23,
    },

    buttonTextSave: { color: '#FFF' },

    buttonTextCancel: { color: '#EB9641' },
});