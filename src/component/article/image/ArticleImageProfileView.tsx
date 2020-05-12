import React from 'react'
import { View, Image } from 'react-native'
import { Card } from 'react-native-paper'

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