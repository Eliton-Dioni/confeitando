import React from 'react';
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function Order({ navigation }) {
    function handleFinish() {
        navigation.navigate('List');
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text style={[styles.text, styles.textTitle]}>Encomenda solicitada!</Text>
            <Text style={[styles.text, styles.textLabel]}>Sua encomenda foi enviada para a confeitaria e aguarda aprovação. Não se preocupe, nós te enviaremos uma mensagem de retorno em breve.</Text>
            <TouchableOpacity onPress={handleFinish} style={styles.button}>
                <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },

    text: {
        position: 'absolute',
        width: 320,
        fontFamily: 'Roboto',
        lineHeight: 22,
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 43,
        left: 20,
    },

    textTitle: {
        height: 21,
        top: 86,
        fontSize: 22,
        marginBottom: 43,
        fontWeight: 'bold'
    },

    textLabel: {
        height: 92,
        top: 150,
        fontSize: 17,
        marginBottom: 314,
    },

    button: {
        height: 55,
        width: 300,
        alignSelf: 'stretch',
        backgroundColor: '#EB9641',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 29,
        marginTop: 314,
    },

    buttonText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 21,
        textAlign: 'center',
        color: '#FFFFFF',
    },
});