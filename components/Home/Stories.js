import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'
import { Divider } from 'react-native-elements/dist/divider/Divider'


const Stories = () => {
    return (
        <View style={{ marginBottom: 13 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {USERS.map((story, index) => (
                    <View key={index} style={{ alignItems: 'center' }}>
                        <Image source={{ uri: story.image }} style={styles.story} />
                        <Text style={{ color: 'white', marginLeft: 1, fontSize: 12 }} >
                            {story.user.length > 11 ? story.user.slice(0, 10).toLowerCase() + "... "
                                : story.user.toLowerCase()}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View >
    )
}
const styles = StyleSheet.create({
    story: {
        width: 70,
        height: 70,
        marginLeft: 8,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: 'gold'
    },
})

export default Stories