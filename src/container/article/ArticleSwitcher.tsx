import React from 'react'
import { ArticleViewWithImage } from '../../component/article/ArticleViewWithImage'
import { ArticleViewWithNoImage } from './ArticleViewWithNoImage '
import { Text } from 'react-native'

interface Props {
    article: any
}

export const ArticleSwitcher = ({ article }: Props) => {
    const articleDetail = article.PostDetail
    console.log('Detailss')
    console.log(articleDetail.descriptionURL)
    return <Text>Article View</Text>
    // return componentToRender(articleDetail)
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
        return <ArticleViewWithNoImage
            title={articleDetail.title}
            description={articleDetail.description[0].data}
            article_id={articleDetail.article_id}
            tags={articleDetail.tags}
            created_at={articleDetail.created_at}
            total_upvote={articleDetail.total_upvote}
            comment_count={articleDetail.comment_count}
        />
    }

}