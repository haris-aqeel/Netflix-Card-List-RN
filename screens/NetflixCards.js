import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { NETFLIX_MOVIE_URL } from "@env"
import fetchDataCards from '../utilities/fetchDataCards';
import Card from '../components/Card';
import { useFonts } from 'expo-font';
import {
    JosefinSans_100Thin,
    JosefinSans_200ExtraLight,
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
    JosefinSans_100Thin_Italic,
    JosefinSans_200ExtraLight_Italic,
    JosefinSans_300Light_Italic,
    JosefinSans_400Regular_Italic,
    JosefinSans_500Medium_Italic,
    JosefinSans_600SemiBold_Italic,
    JosefinSans_700Bold_Italic
} from '@expo-google-fonts/josefin-sans'
import AppLoader from 'expo-app-loading'

export default function NetflixCards() {
    const [movieList, setMovieList] = useState([]);
    let [fontsLoad] = useFonts({
        JosefinSans_100Thin,
        JosefinSans_200ExtraLight,
        JosefinSans_300Light,
        JosefinSans_400Regular,
        JosefinSans_500Medium,
        JosefinSans_600SemiBold,
        JosefinSans_700Bold,
        JosefinSans_100Thin_Italic,
        JosefinSans_200ExtraLight_Italic,
        JosefinSans_300Light_Italic,
        JosefinSans_400Regular_Italic,
        JosefinSans_500Medium_Italic,
        JosefinSans_600SemiBold_Italic,
        JosefinSans_700Bold_Italic
    })

    useEffect(() => {
        const handleData = async () => {
            const result = await fetchDataCards(`${NETFLIX_MOVIE_URL}&page=6`, "GET");
            setMovieList(result.results);
        }
        handleData();
    }, [fetchDataCards])

    if (!fontsLoad){
        return <AppLoader/>
    }


  

    return (
        <View style={styles.cardPage}>
            <Text style={styles.pageHeader}>Netflix Movies</Text>
            <View style={styles.cardList}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={movieList}
                    keyExtractor={item => item.imdbID}
                    renderItem={({ item }) => <Card item={item}/>}
                />

            </View>


        </View>
    )
};

const styles = StyleSheet.create({
    cardPage: {
        marginVertical: 50
    },
    pageHeader: {
        fontSize: 30,
        fontStyle: 'normal',
        paddingVertical: 30,
        textAlign: 'center',
        fontFamily: "JosefinSans_600SemiBold",
        letterSpacing: -2,
        color: "#E50914"
    },
    cardList: {
        marginBottom: 100
    }
  
})