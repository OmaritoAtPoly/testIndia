import React from 'react'
import { Text } from 'react-native'
import { ArticleViewWithImage } from '../../component/article/ArticleViewWithImage'

interface Props {
    article: any
}

export const ArticleSwitcher = ({ article }: Props) => {
    const articleDetail = article.PostDetail
    return componentToRender(articleDetail)
}

const componentToRender = (articleDetail: any) => {
    if (articleDetail.profileImage !== undefined) {
        return (
            <ArticleViewWithImage
                title={articleDetail.title}
                description={articleDetail.description[0].data}
                profileImage={articleDetail.profileImage}
            />
        )
    } else {
        return <Text>Aqui va el Component del Tigre</Text>
    }

}