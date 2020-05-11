import React from 'react'
import { View } from 'react-native'
import { Description } from '../../container/description'
import { Title } from 'react-native-paper'

interface Props {
    title: string;
    desc: string;
}

export const ArticleView = ({ title, desc }: Props) => {

    return (
        <View>
            <Title>{title}</Title>
            <Description description={desc} />
        </View>
    )
}