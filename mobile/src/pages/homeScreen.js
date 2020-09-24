import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import logo from '../assets/logo.png';
import bg from '../assets/bg.png';

export default function homeScreen({ navigation }) {
    function handleRegister() {
        navigation.navigate('Register');
    }

    function handleLogIn() {
        navigation.navigate('Login');
    }

    function handleFacebook() {
        navigation.navigate('Facebook');
    }

    return (
        <ImageBackground source={bg} style={styles.container}>
            <Image source={logo} />
            <TouchableOpacity onPress={handleRegister} style={[styles.button, styles.buttonRegister]}>
                <Text style={[styles.buttonTextRegister, styles.buttonText]}>CADASTRE-SE</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogIn} style={[styles.button, styles.buttonLogIn]}>
                <Text style={[styles.buttonTextLogIn, styles.buttonText]}>ENTRE</Text>
            </TouchableOpacity>
            <View style={[styles.line, styles.hairlineleft]} />
            <Text style={styles.textLabel}>OU ENTRE COM</Text>
            <View style={[styles.line, styles.hairlineright]} />
            <TouchableOpacity onPress={handleFacebook} style={[styles.button, styles.buttonFacebook]}>
                <Text style={styles.buttonTextFacebook}>FACEBOOK</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        width: null,
        height: null,
    },
    line: {
        position: 'absolute',
        width: 57,
        height: 0,
        top: 455,
        borderBottomWidth: 1,
        borderBottomColor: '#B2B2B2',
        bottom: 111,
    },

    hairlineleft: { left: 80 },

    hairlineright: { left: 223 },

    textLabel: {
        fontFamily: 'Roboto',
        fontStyle: 'italic',
        fontSize: 12,
        height: 20,
        lineHeight: 14,
        marginTop: 16,
        alignItems: 'center',
        textAlign: 'center',
        color: '#706F6F',
    },

    button: {
        height: 55,
        alignSelf: 'stretch',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonRegister: {
        borderWidth: 2,
        borderColor: '#EB9641',
        marginTop: 55.6,
    },

    buttonLogIn: {
        backgroundColor: '#EB9641',
        marginTop: 15,
    },

    buttonFacebook: {
        height: 50,
        backgroundColor: '#3B5599',
        marginTop: 15,
    },

    buttonText: {
        fontSize: 20,
        fontFamily: 'Roboto',
        lineHeight: 23,
    },

    buttonTextRegister: { color: '#EB9641' },

    buttonTextLogIn: { color: '#FFF', },

    buttonTextFacebook: {
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: 'Roboto',
        lineHeight: 16,
    }
});