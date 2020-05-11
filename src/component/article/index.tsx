import React from 'react'
import { View } from 'react-native'
import { Description } from '../../container/description'
import { Title } from 'react-native-paper'
import { ArticleImageProfile } from '../../container/article/image'

interface Props {
    title: string;
    desc: string;
    imgUrl: string;
}

export const ArticleView = ({ title, desc, imgUrl }: Props) => {

    return (
        <View>
            <ArticleImageProfile imageUrl={imgUrl} />
            <Title>{title}</Title>
            <Description description={desc} />
        </View>
    )
}