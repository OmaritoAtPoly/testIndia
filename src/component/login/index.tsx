import React from 'react'
import { Formik } from 'formik';
import { View, TextInput, Text, StyleSheet } from 'react-native';
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
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <View style={styles.container}>
                    <Text style={styles.horizontal}>Email:</Text>
                    <TextInput
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        placeholder={'email'}
                        value={values.email}
                    />
                     <Text style={styles.horizontal}>Keyword:</Text>
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

const styles = StyleSheet.create({
    container: {
            flex: 1,
            marginTop:"20%",
            paddingHorizontal:"5%"
    },
    horizontal: {
            flexDirection: "row",
            justifyContent: "space-around",
            color:'#000',
            fontSize:20
    },
})