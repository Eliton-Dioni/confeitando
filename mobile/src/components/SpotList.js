import React, { useState, useEffect } from 'react';
import { withNavigation } from 'react-navigation';
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';

import api from '../services/api';

function SpotList({ tag, navigation }) {
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        async function loadSpots() {
            const response = await api.get('/spots', {
                params: { tag }
            })
            setSpots(response.data);
        }
        loadSpots();
    }, []);

    function handleNavigate(id) {
        navigation.navigate('Book', { id });
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Confeitarias que vendem <Text style={styles.bold}>{tag}</Text></Text>
            <FlatList
                style={styles.list}
                data={spots}
                keyExtractor={spot => spot._id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Image style={styles.thumbnail} source={{ uri: item.thumbnail_url }} />
                        <Text style={styles.product}>{item.product}</Text>
                        <Text style={styles.price}>{item.price ? `R$${item.price}/unidade` : 'GRATUITO'}</Text>
                        <TouchableOpacity onPress={() => handleNavigate(item._id)} style={styles.button}>
                            <Text style={styles.buttonText}>Solicitar Encomenda</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },

    title: {
        fontSize: 20,
        color: '#444',
        paddingHorizontal: 20,
        marginBottom: 15,
    },

    bold: {
        fontWeight: 'bold'
    },

    list: {
        paddingHorizontal: 20,
    },

    listItem: {
        marginRight: 15,
    },

    view: {
        borderWidth: 2,
        borderColor: '#F2994A',
        borderRadius: 10,
        width: 300,
        height: 200,
        marginBottom: 22,
    },

    thumbnail: {
        width: 200,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 2, //ou 8
    },

    product: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 10
    },

    price: {
        fontSize: 18,
        color: '#999',
        marginTop: 5
    },

    button: {
        height: 35,
        backgroundColor: '#EB9641',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 15,
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
    }
});

export default withNavigation(SpotList);