import React from 'react'
import { LodgingForm } from '../../component/lodging'

const initialValues = {
    email: '',
    pass: ''
}

export const Login = () => {

    const onLogin = (values: any) => {
        console.log(values)
    }

    return (<LodgingForm initialValues={initialValues} onLogin={onLogin} />)
}