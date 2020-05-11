import React from 'react'
import { View } from 'react-native'
import { Description } from '../../container/description'
import { Title } from 'react-native-paper'

interface Props {
    title: string;
    descUrl: string;
}

export const ArticleView = ({ title, descUrl }: Props) => {

    return (
        <View>
            <Title>{title}</Title>
            <Description descriptionUrl={descUrl} />
        </View>
    )
}