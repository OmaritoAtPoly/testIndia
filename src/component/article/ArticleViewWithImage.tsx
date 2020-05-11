import React from 'react'
import { Text, View } from 'react-native'

interface Props {
    profileImage: string;
    title: string;
    description: string;
}

export const ArticleViewWithImage = ({ profileImage, title, description }: Props) => {

    return (
        <View>
            < Text >{profileImage}</Text >
            < Text >{title}</Text >
        </View>
    )
}