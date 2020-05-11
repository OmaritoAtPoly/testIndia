import React from 'react'
import { Text } from 'react-native'

interface Props {
    initialValues: any
    onLogin: (values: any) => void
}

export const LodgingForm = ({ initialValues, onLogin }: Props) => {
    return <Text>Lodging Form</Text>
}