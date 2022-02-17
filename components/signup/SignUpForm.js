import { View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'

const SignUpForm = ({ navigation }) => {
    const SignUpFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        username: Yup.string().email().required().min(2, 'A username is required'),
        password: Yup.string()
            .required()
            .min(8, 'Your password must have at least 8 characters')
    })
    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{ email: '', username: '', password: '' }}
                onSubmit={values => { console.log(values) }}
                validationSchema={SignUpFormSchema}
                validateOnMount={true}
            >
                {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
                    <>
                        <View style={[styles.inputField, {
                            borderColor: values.email.length < 1 ||
                                Validator.validate(values.email) ? '#ccc' : 'red'
                        }
                        ]}>
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Email'
                                autoCapitalize='none'
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                autoFocus={true}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                        </View>
                        <View style={[styles.inputField, {
                            borderColor:
                                1 > values.username.length || values.username.length >= 6
                                    ? '#ccc' : 'red'
                        }
                        ]}>
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder="Username"
                                autoCapitalize='none'
                                textContentType='username'
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                            />
                        </View>
                        <View style={[styles.inputField, {
                            borderColor:
                                1 > values.password.length || values.password.length >= 6
                                    ? '#ccc' : 'red'
                        }
                        ]}>
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder="Password"
                                autoCapitalize='none'
                                autoCorrect={false}
                                secureTextEntry={true}
                                textContentType='password'
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                        </View>
                        <View style={{ alignItems: 'flex-end', marginBottom: 30, }}>
                            <Text style={{ color: '#6BB0F5' }}>Forgot password?</Text>
                        </View>
                        <Pressable style={styles.button(isValid)}
                            titleSize={20}
                            disabled={!isValid}
                            onPress={handleSubmit}>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>Sign up</Text>
                        </Pressable>
                        <View style={styles.signup}>
                            <Text>Already have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.push('LoginScreen')}>
                                <Text style={{ color: '#6BB0F5' }}> Log in</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        marginTop: 80,
    },
    inputField: {
        borderRadius: 20,
        padding: 10,
        backgroundColor: "#FAFAFA",
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'gray'

    },
    button: (isValid) => ({
        backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4,
    }),
    signup: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 50,
    }
})
export default SignUpForm