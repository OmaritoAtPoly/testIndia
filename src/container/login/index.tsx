import React from 'react'
import { LoginForm } from '../../component/lodging'

const initialValues = {
    email: '',
    pass: ''
}

export const Login = () => {

    const onLogin = (values: any) => {
        console.log(values)
    }

    return (<LoginForm initialValues={initialValues} onLogin={onLogin} />)
}