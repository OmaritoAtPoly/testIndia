import React from 'react'
import { View, Text } from 'react-native'

const initialValues = {
    email: '',
    pass: ''
}

export const Login = () => {

    const onLogin = (values: any) => {
        console.log(values)
    }

    return (
        <View>
            <Text>
                Login...
            </Text>
        </View>
    )
}