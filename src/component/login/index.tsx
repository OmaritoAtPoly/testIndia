import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { theme } from '../../theme';

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
                    <TextInput
                        style={styles.verticalMargin}
                        mode='outlined'
                        label="Email"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                    />
                    <TextInput
                        style={styles.verticalMargin}
                        onChangeText={handleChange('pass')}
                        mode='outlined'
                        label="Password"
                        onBlur={handleBlur('pass')}
                        secureTextEntry={true}
                        value={values.pass}
                    />
                    <Button style={styles.verticalMargin} onPress={handleSubmit} mode="contained" >
                        Submit
                    </Button>
                </View>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        paddingTop: '40%',
        paddingHorizontal: 20,
        backgroundColor: theme.colors.background
    },
    verticalMargin: {
        marginVertical: 10
    }
})