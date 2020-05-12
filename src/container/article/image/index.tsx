import React from 'react'
import { View } from 'react-native'
import { ArticleImagePorfileView } from '../../../component/article/image/ArticleImageProfileView'

interface Props {
    imageUrl: string;
}

export const ArticleImageProfile = ({ imageUrl }: Props) => {
    return imageUrl !== "" ? <ArticleImagePorfileView imageUrl={imageUrl} /> : <View />
}