import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            resizeMode='contain'
            style={styles.background}
            source={{
                uri: "https://i.redd.it/fnuq459ymyo61.jpg"
            }}>
            <Image
                style={styles.logo}
                source={{
                    uri: "https://cdn.freebiesupply.com/images/large/2x/airbnb-logo.png"
                }}
            />
            <Text
                style={styles.tagline}>
                Going beyond everyday.
            </Text>
            <View style={styles.loginButton}>
                <TouchableOpacity
                    onPress={() =>
                        Alert.prompt("Enter Destination", "Example: Hanalei Bay 🏄🏽‍♀️", text => console.log(text))}>
                    <Text style={styles.buttonText}>Choose your next adventure</Text>

                </TouchableOpacity>
            </View>
            {/* <View style={styles.regButton}>
            </View> */}
        </ImageBackground >
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    loginButton: {
        borderRadius: 20,
        width: '80%',
        height: 70,
        backgroundColor: '#fd5b5e',
        marginBottom: 90
        // position: 'absolute',
        // bottom: 70
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",
        paddingTop: 20,
        fontWeight: "bold",
    },
    // regButton: {
    //     width: '100%',
    //     height: 70,
    //     backgroundColor: '#eee'
    // },
    logo: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 85
    },
    tagline: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 20,

        // position: 'absolute',
        // top: 40

    }
})

export default WelcomeScreen;