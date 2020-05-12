import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { LoginForm } from '../../component/login'
import { login } from '../../dataaccess/user'
import { CustomAppBar } from '../../basic/CustomAppBar'
import { AlertDialog } from '../../basic/AlertDialog'

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
    const [show, setShow] = useState(true)

    const goToArticle = (userId: number) => {
        navigation.navigate('article', { userId: userId })
    }

    const onLogin = async (values: any) => {
        const { email, pass } = values;
        const userId = await login(email, pass)
        loginSucces(userId)
    }

    const onDismiss = () => {
        setShow(false)
    }

    const loginSucces = (userId: any) => {
        return userId ? goToArticle(userId) : setShow(true)
    }

    return (
        <View>
            {/* <CustomAppBar title={'Login'} />
            <LoginForm initialValues={initialValues} onLogin={onLogin} /> */}
            <AlertDialog visible={show} onDismiss={onDismiss} />
        </View>
    )
}