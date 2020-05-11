import React from 'react'
import { Formik } from 'formik';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native-paper'

interface Props {
    initialValues: any
    onLogin: (values: any) => void
}

export const LoginForm = ({ initialValues, onLogin }: Props) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={values => onLogin(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <TextInput
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        placeholder={'email'}
                        value={values.email}
                    />
                    <TextInput
                        onChangeText={handleChange('pass')}
                        onBlur={handleBlur('pass')}
                        placeholder={'password'}
                        secureTextEntry={true}
                        value={values.pass}
                    />
                    <Button onPress={handleSubmit} mode="contained" >
                        Submit
                    </Button>
                </View>
            )}
        </Formik>
    )
}