import React from 'react'
import { Text, Alert } from 'react-native'
import { LoginForm } from '../../component/login'
import { login } from '../../dataaccess/user'

const initialValues = {
    email: 'wiz_saurabh@rediffmail.com',
    pass: 'Pass@123'
}
interface Props {
    navigation: any
}

const validateCredentials = (obj: any) => {
    if (obj.email === initialValues.email && obj.pass === initialValues.pass)
        return true;
}

export const Login = ({ navigation }: Props) => {

    const goToArticle = (userId: number) => {
        navigation.navigate('article', { userId: userId })
    }


    const onLogin = async (values: any) => {
        const { email, pass } = values;
        if (validateCredentials(values)) {
            const userId = await login(email, pass)
            loginSucces(userId)
        } else Alert.alert("You need to set the correct credentials")
    }

    const loginSucces = (userId: any) => {
        return userId ? goToArticle(userId) : <Text>Login Error</Text>
    }

    return (<LoginForm initialValues={initialValues} onLogin={onLogin} />)
}