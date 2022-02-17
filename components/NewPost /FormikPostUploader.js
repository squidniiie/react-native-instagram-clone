import { View, Text, TextInput, Image, Button } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import validUrl from 'valid-url'

const placeholder_img = 'https://www.gaithersburgdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png'

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('An image is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character limit')
})
const FormikPostUploader = ({ navigation }) => {
    const [thumbnailUrl, setThumbnailUrl] = useState('')
    return (
        <Formik
            initialValues={{ caption: '', imageUrl: '' }}
            onSubmit={values => {
                console.log(values)
                console.log('Submitted post')
                navigation.goBack()
            }}
            validationSchema={uploadPostSchema}
            validateOnMount={true}
        >
            {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
                <>
                    <View style={{
                        margin: 20,
                        justifyContent: 'space-between',
                        flexDirection: 'row'
                    }}>
                        <Image source={{
                            uri: validUrl.isUri(thumbnailUrl)
                                ? thumbnailUrl
                                : placeholder_img
                        }}
                            style={{ width: 100, height: 100 }} />
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <TextInput
                                style={{ color: 'white', fontSize: 20, fontWeight: '600' }}
                                placeholder='Write a caption...'
                                placeholderTextColor='gray'
                                multiline={true}
                                onChangeText={handleChange('caption')}
                                onBlur={handleBlur('caption')}
                                value={values.caption}

                            />
                        </View>
                    </View>
                    <Divider width={.2} orientation='vertical' />
                    <TextInput
                        onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
                        style={{ color: 'white', fontSize: 18, marginTop: 10 }}
                        placeholder='Enter Image Url'
                        placeholderTextColor='gray'
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                        value={values.imageUrl}
                    />
                    {errors.imageUrl && (
                        <Text style={{ fontSize: 12, color: 'red' }}>
                            {errors.imageUrl}
                        </Text>
                    )}
                    <Button onPress={handleSubmit} title='Share' disabled={!isValid} />
                </>
            )}
        </Formik>
        // <View>
        //     <Text style={{ color: 'white' }}>FormikPostUploader</Text>
        // </View>
    )
}

export default FormikPostUploader