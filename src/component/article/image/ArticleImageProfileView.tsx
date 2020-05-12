import React from 'react'
import { Image, View } from 'react-native'

interface Props {
    imageUrl: string
}

export const ArticleImagePorfileView = ({ imageUrl }: Props) => {
    return (
        <View>
            <Image source={{ uri: imageUrl }}
                style={{ height: 300 }}
            />
        </View>
    )
}