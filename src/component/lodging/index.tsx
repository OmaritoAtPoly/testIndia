import React from 'react'
import { Formik } from 'formik';
import { View, Button, TextInput } from 'react-native';

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
                        value={values.email}
                    />
                    <TextInput
                        onChangeText={handleChange('pass')}
                        onBlur={handleBlur('pass')}
                        secureTextEntry={true}
                        value={values.pass}
                    />
                    <Button onPress={handleSubmit} title="Submit" />
                </View>
            )}
        </Formik>
    )
}