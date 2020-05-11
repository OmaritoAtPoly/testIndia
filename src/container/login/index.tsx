import React from 'react'
import { LoginForm } from '../../component/lodging'
import axios from 'axios'

const initialValues = {
    email: 'wiz_saurabh@rediffmail.com',
    pass: 'Pass@123'
}

export const Login = () => {

    const login = async (email: string, pass: string) => {
        const dir = `https://www.atg.party/ws-login-user?email=${email}&password=${pass}&device_name=poly`
        await axios.post(dir).then(res => { console.log(res.data.user_details.id) })
    }

    const onLogin = (values: any) => {
        const { email, pass } = values
        login(email, pass)
    }

    return (<LoginForm initialValues={initialValues} onLogin={onLogin} />)
}