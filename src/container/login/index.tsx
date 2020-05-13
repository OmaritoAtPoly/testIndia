import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { LoginForm } from '../../component/login'
import { login } from '../../dataaccess/user'
import { CustomAppBar } from '../../basic/CustomAppBar'
import { AlertDialog } from '../../basic/AlertDialog'
import { ProfileChip } from '../../basic/ProfileChip'
import { Avatar } from 'react-native-paper'

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
    const [show, setShow] = useState(false)

    const goToArticle = (userId: number, userName: string, profilePicture: string) => {
        navigation.navigate('article', {
            userId: userId,
            userName: userName,
            profilePicture: profilePicture
        })
    }

    const onLogin = async (values: any) => {
        const { email, pass } = values;
        const userData = await login(email, pass)
        loginSucces(userData)
    }

    const onDismiss = () => {
        setShow(false)
    }

    const loginSucces = (userData: any) => {
        console.log(userData)
        return userData ? goToArticle(userData.id, userData.first_name, userData.profile_picture) : setShow(true)
    }

    return (
        <View>
            <CustomAppBar title={'Login'} />
            <LoginForm initialValues={initialValues} onLogin={onLogin} />
            <AlertDialog visible={show} onDismiss={onDismiss} />
        </View>
    )
}