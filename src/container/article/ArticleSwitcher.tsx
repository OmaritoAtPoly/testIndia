import React from 'react'
import { Text } from 'react-native'

interface Props {
    article: any
}

export const ArticleSwitcher = ({ article }: Props) => {
    console.log("Inter rticle")
    console.log(article)
    return <Text>Article Switcher</Text>
}