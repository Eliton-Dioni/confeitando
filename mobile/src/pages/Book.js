import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, AsyncStorage, StyleSheet } from 'react-native';
import api from '../services/api';

export default function Book({ navigation }) {
    const [date, setDate] = useState('');
    const id = navigation.getParam('id');

    async function handleSubmit() {
        const user_id = await AsyncStorage.getItem('user');
        await api.post(`/spots/${id}/bookings`, {
            date
        }, {
            headers: { user_id }
        })
        navigation.navigate('Order');
    }

    function handleCancel() {
        navigation.navigate('List');
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.label}>DATA DE ENCOMENDA *</Text>
            <TextInput
                style={styles.input}
                placeholder="Qual data gostaria de agendar?"
                placeholderTextColor="#ACACAC"
                autoCapitalize="words"
                autoCorrect={false}
                value={date}
                onChangeText={setDate}
            />

            <TouchableOpacity onPress={handleSubmit} style={[styles.button, styles.buttonSubmit]}>
                <Text style={[styles.buttonText, styles.buttonTextSubmit]}>Solicitar Encomenda</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCancel} style={[styles.button, styles.cancelButton]}>
                <Text style={[styles.buttonText, styles.buttonTextCancel]}>Cancelar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 30,
    },

    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
        marginTop: 30,
    },

    input: {
        paddingHorizontal: 20,
        fontSize: 16,
        marginBottom: 20,
        borderRadius: 2,
        lineHeight: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#706F6F',
    },

    button: {
        height: 55,
        width: 300,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },

    buttonSubmit: {
        backgroundColor: '#EB9641',
        marginTop: 25,
    },

    cancelButton: {
        borderWidth: 2,
        borderColor: '#EB9641',
        marginTop: 15,
    },

    buttonTextCancel: {
        color: '#EB9641'
    },

    buttonTextSubmit: {
        color: '#FFFFFF',
    },

    buttonText: {
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 23,
        textAlign: 'center',
    }
});







