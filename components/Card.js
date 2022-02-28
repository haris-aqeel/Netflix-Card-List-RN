import React from 'react';
import { View, Button, Linking, StyleSheet, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';



export default function Card({ item }) {
    return (

        <View style={styles.card}>
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w780/${item.backdropPath}` }}
                style={styles.cardImage}
                resizeMode="contain"
            />

            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text numberOfLines={5} style={styles.cardOverview}>{item.overview}</Text>
            <View style={styles.rating}>
                <View style={styles.imdb}>
                    <FontAwesome name="imdb" size={40} color="black" />
                    <Text style={styles.subTextRate}>{item.imdbRating / 10} / 10</Text>
                    <Text style={styles.subTextCount}>Votes Count: {item.imdbVoteCount}</Text>
                </View>
            </View>
            <View style={styles.buttonView}>
                <Button style={styles.button} color="#E50914" onPress={() => { Linking.openURL(item.streamingInfo.netflix.us.link) }} title="WATCH ON NETFLIX" />

            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        padding: 0,
        marginHorizontal: 20,
        marginVertical: 20,
        borderRadius: 8,
        width: 350,
        backgroundColor: '#efefef',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    cardImage: {
        height: 195,


    },
    cardTitle: {
        fontSize: 20,
        textAlign: 'center',
        paddingVertical: 15,
        fontFamily: "JosefinSans_600SemiBold",

    },
    cardOverview: {
        textAlign: 'justify',
        padding: 10,
        fontFamily: "JosefinSans_400Regular",
        fontSize: 18,
        letterSpacing: -1
    },
    rating: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    imdb: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    subTextRate: {
        marginLeft: 10,
        fontFamily: "JosefinSans_700Bold",
        fontSize: 18

    },
    subTextCount: {
        marginLeft: 10,
        fontFamily: "JosefinSans_500Medium",
        fontSize: 18
    },
    buttonView: {
        paddingHorizontal: 8,
        paddingVertical: 10
    },
    button: {
        color: '#E50914'
    }
})