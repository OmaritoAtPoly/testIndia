import React from 'react'
import { LoginForm } from '../../component/login'
import axios from 'axios'

const initialValues = {
    email: 'wiz_saurabh@rediffmail.com',
    pass: 'Pass@123'
}
interface Props {
    navigation: any
}

export const Login = ({ navigation }: Props) => {

    const login = async (email: string, pass: string) => {
        const dir = `https://www.atg.party/ws-login-user?email=${email}&password=${pass}&device_name=poly`
        await axios.post(dir).then(res => {
            console.log(res.data.user_details.id)
            goToArticle(res.data.user_details.id)
        })

        // goToArticle(83)
    }

    const goToArticle = (userId: number) => {
        navigation.navigate('article', { userId: userId })
    }

    const onLogin = (values: any) => {
        const { email, pass } = values
        login(email, pass)
    }

    return (<LoginForm initialValues={initialValues} onLogin={onLogin} />)
}