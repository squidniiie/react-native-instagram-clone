import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import LoginForm from '../components/login/LoginForm'

const logo = 'https://img.icons8.com/fluency/344/ffffff/instagram-new.png'
const LoginScreen = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <TouchableOpacity onPress={() => navigation.push('HomeScreen')}>
                <Image source={{ uri: logo, height: 100, width: 100 }} />
            </TouchableOpacity>
        </View>
        <LoginForm navigation={navigation} />
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
export default LoginScreen