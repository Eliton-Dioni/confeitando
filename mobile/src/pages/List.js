import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';
import { Alert, SafeAreaView, ScrollView, StyleSheet, Image, AsyncStorage, TouchableOpacity } from 'react-native';
import SpotList from '../components/SpotList';
import logo from '../assets/logo.png';


export default function List({ navigation }) {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('user').then(user_id => {
            const socket = socketio('http://192.168.43.218:80', {
                query: { user_id }
            })

            socket.on('booking_response', booking => {
                Alert.alert(`Sua encomenda de ${booking.spot.product} em ${booking.date} foi ${booking.approved ? 'APROVADA' : 'REJEITADA'}`);
            })
        })
    }, []);

    useEffect(() => {
        AsyncStorage.getItem('tags').then(storagedTags => {
            const tagsArray = storagedTags.split(',').map(tag => tag.trim());
            setTags(tagsArray);
        })
    }, []);

    function handleLogout() {
        AsyncStorage.removeItem('user').then(() => {
            navigation.navigate('homeScreen');
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity activeOpacity={0.5} onPress={handleLogout}>
                <Image style={styles.logo} source={logo} />
            </TouchableOpacity>
            <ScrollView>
                {tags.map(tag => <SpotList key={tag} tag={tag} />)}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
    },

    logo: {
        height: 32,
        resizeMode: "contain",
        alignSelf: 'center',
        marginTop: 10,
    },
})