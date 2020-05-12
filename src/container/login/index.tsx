import React from 'react'
import { Text } from 'react-native'
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
        const userId = await login(email, pass)
        loginSucces(userId)
    }

    const loginSucces = (userId: any) => {
        return userId ? goToArticle(userId) : <Text>Login Error</Text>
    }

    return (<LoginForm initialValues={initialValues} onLogin={onLogin} />)
}