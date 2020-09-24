import React from 'react';
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function Facebook({ navigation }) {
    function handleProceed() {
        navigation.navigate('List');
    }
    function handleCancel() {
        navigation.navigate('homeScreen');
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text style={styles.textLabel}>O aplicativo terá acesso a seu nome e a sua foto de perfil.</Text>
            <TouchableOpacity onPress={handleProceed} style={[styles.button, styles.buttonFacebook]}>
                <Text style={styles.buttonTextFacebook}>CONTINUE COMO GUILHERME</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCancel} style={[styles.button, styles.buttonCancel]}>
                <Text style={styles.buttonTextCancel}>CANCELAR</Text>
            </TouchableOpacity>
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

    textLabel: {
        fontFamily: 'Roboto',
        color: '#706F6F',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        marginTop: 150,
    },

    button: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonFacebook: {
        height: 50,
        backgroundColor: '#3B5599',
        borderRadius: 5,
        marginTop: 22,
    },

    buttonCancel: {
        height: 55,
        borderWidth: 2,
        borderColor: '#EB9641',
        borderRadius: 30,
        marginTop: 259,
        marginBottom: 27,
    },

    buttonTextFacebook: {
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: 'Roboto',
        lineHeight: 16,
    },

    buttonTextCancel: {
        color: '#EB9641',
        fontSize: 20,
        fontFamily: 'Roboto',
        lineHeight: 23,
    },
});