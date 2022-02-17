import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import SignUpForm from '../components/signup/SignUpForm'

const logo = "https://img.icons8.com/fluency/344/ffffff/instagram-new.png"
const SignUpScreen = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <TouchableOpacity onPress={() => navigation.push('HomeScreen')}>
                <Image
                    source={{ uri: logo, height: 100, width: 100 }} />
            </TouchableOpacity>

        </View>
        <SignUpForm navigation={navigation} />
    </View>
)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 60,
    }

})

export default SignUpScreen
