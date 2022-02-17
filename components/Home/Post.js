import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements/dist/divider/Divider'



const postFooterIcons = [
    {
        name: 'Like',
        imageUrl: "https://img.icons8.com/material-outlined/344/ffffff/like--v1.png",
        likedImageURL: "https://img.icons8.com/ios-glyphs/90/fa314a/like--v1.png",
    },
    {
        name: 'Comment',
        imageUrl: "https://img.icons8.com/material-outlined/344/ffffff/speech-bubble--v1.png",
    },
    {
        name: 'Share',
        imageUrl: "https://img.icons8.com/material-outlined/344/ffffff/filled-sent.png",
    },
    {
        name: 'Save',
        imageUrl: "https://img.icons8.com/material/344/ffffff/bookmark-outline.png",
    }
]

const Post = ({ post }) => {
    return (
        <View style={{ marginBottom: 30 }}>
            <Divider width={1} orientation='vertical' />
            <PostHeader post={post} />
            <PostImage post={post} />
            <PostFooter post={post} />
            <View style={{ marginLeft: 10 }}>
                <Likes post={post} />
                <Caption post={post} />
                <AllComments post={post} />
                <Comments post={post} />
            </View>
        </View>
    )
}
const PostHeader = ({ post }) => (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center'
    }}
    >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
                source={{ uri: post.profile_picture }}
                style={styles.postHeader}
            />
            <Text style={{ color: 'white', fontWeight: '700', marginLeft: 5 }}>{post.user}</Text>
        </View>
        <Text style={{ color: 'white', fontWeight: '900' }}>...</Text>
    </View>
)
const PostImage = ({ post }) => (
    <View style={{ width: '100%', height: 400, marginTop: 2 }}>
        <Image
            source={{ uri: post.imageUrl }} style={{ height: '100%', resizeMode: 'cover' }}
        />
    </View>

)
const PostFooter = () => (
    <View style={{ flexDirection: 'row', marginVertical: 3, justifyContent: 'space-between' }}>
        <View style={styles.leftPostFooter}>
            <Icon
                imgStyle={styles.postFooter}
                imgUrl={postFooterIcons[0].imageUrl}
            />
            <Icon
                imgStyle={styles.postFooter}
                imgUrl={postFooterIcons[1].imageUrl}
            />
            <Icon
                imgStyle={styles.postFooter}
                imgUrl={postFooterIcons[2].imageUrl}
            />
        </View>
        <View style={{ marginRight: 3 }}>
            <Icon
                imgStyle={styles.postFooter}
                imgUrl={postFooterIcons[3].imageUrl}
            />
        </View>
    </View>

)
const Icon = ({ imgStyle, imgUrl }) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={{ uri: imgUrl }} />
    </TouchableOpacity>
)

const Likes = ({ post }) => (
    <View style={{ flexDirection: 'row', marginTop: 2 }}>
        <Text
            style={{ color: 'white', fontWeight: '700' }}>
            {post.likes.toLocaleString('en')} likes
        </Text>
    </View>

)
const Caption = ({ post }) => (
    <View style={{ marginTop: 4 }}>
        <Text>
            <Text style={{ color: 'white', fontWeight: '700' }}>{post.user}
            </Text>
            <Text style={{ color: 'white', fontWeight: '500' }}> {post.caption}
            </Text>

        </Text>
    </View>

)

const AllComments = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        {!!post.comments.length && (
            <Text style={{ color: 'lightgray' }}>
                View{post.comments.length > 1 ? ' all' : ''} {post.comments.length}{' '}
                {post.comments.length > 1 ? 'comments' : 'comment'}
            </Text>
        )}
    </View>

)
const Comments = ({ post }) => (
    <View>
        {post.comments.map((comment, index) => (
            <View style={{ marginTop: 5, flexDirection: 'row' }} comment={comment} key={index}>
                <Text style={{ color: 'white', fontWeight: '700' }}>{comment.user}
                    <Text style={{ fontWeight: '500' }}> {comment.comment}</Text>
                </Text>
            </View>
        ))}
    </View>
)

const styles = StyleSheet.create({
    postHeader: {
        width: 35,
        height: 35,
        marginTop: 4,
        marginLeft: 8,
        borderRadius: 50,
        borderWidth: 1.6,
        borderColor: 'gold'
    },
    postFooter: {
        width: 32,
        height: 32,
        marginTop: 5,
        marginRight: 1
    },
    leftPostFooter: {
        flexDirection: 'row',
        width: '30%',
        marginHorizontal: 6,
        justifyContent: 'space-between'
    }
})
export default Post