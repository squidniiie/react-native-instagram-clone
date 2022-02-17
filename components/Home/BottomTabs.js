import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Divider } from 'react-native-elements/dist/divider/Divider'


export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/fluency-systems-filled/344/ffffff/home.png',
        inactive: 'https://img.icons8.com/fluency-systems-regular/344/ffffff/home.png'
    },
    {
        name: 'Search',
        active: "https://img.icons8.com/ios-glyphs/344/ffffff/search-more.png",
        inactive: "https://img.icons8.com/ios-glyphs/344/ffffff/search--v1.png",
    },
    {
        name: 'Reels',
        active: 'https://img.icons8.com/ios-filled/344/ffffff/instagram-reel.png',
        inactive: 'https://img.icons8.com/ios/344/ffffff/instagram-reel.png',
    },
    {
        name: 'Shop',
        active: 'https://img.icons8.com/ios-glyphs/344/ffffff/shopping-bag-full.png',
        inactive: 'https://img.icons8.com/fluency-systems-regular/344/ffffff/shopping-bag-full.png',
    },
    {
        name: 'Profile',
        active: "http://www.lovethispic.com/uploaded_images/79360-Cheetah-Cub.jpg",
        inactive: "http://www.lovethispic.com/uploaded_images/79360-Cheetah-Cub.jpg",
    },
]

const BottomTabs = ({ icons }) => {
    const [activeTab, setActiveTab] = useState('Home')

    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
                style={[styles.icon,
                icon.name === "Profile" ? styles.profile() : null,
                activeTab === 'Profile' && icon.name === activeTab ? styles.profile(activeTab) : null]} />
        </TouchableOpacity>
    )
    return (
        <View style={styles.wrapper}>
            <Divider width={1} orientation='vertical' />
            <View style={styles.container}>
                {icons.map((icon, index) => (
                    <Icon key={index} icon={icon} />
                ))}
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: '3%',
        zIndex: 999,
        backgroundColor: '#000'

    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 15
    },
    icon: {
        width: 30,
        height: 30,
    },
    // dynamic styling 
    profile: (activeTab = '') => ({
        borderRadius: 50,
        borderWidth: activeTab === 'Profile' ? 2 : 0,
        borderColor: "white"
    })
})
export default BottomTabs