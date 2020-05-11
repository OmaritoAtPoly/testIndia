import React from 'react'
import { View } from 'react-native'
import { Card } from 'react-native-paper'

interface Props {
    imageUrl: string
}

export const ArticleImagePorfileView = ({ imageUrl }: Props) => {
    return (
        <View>
            <Card.Cover source={{ uri: imageUrl }} />
        </View>
    )
}