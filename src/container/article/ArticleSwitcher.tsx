import React from 'react'
import { ArticleViewWithImage } from '../../component/article/ArticleViewWithImage'
import { ArticleViewWithNoImage } from './ArticleViewWithNoImage '
import { Text } from 'react-native'
import { ArticleView } from '../../component/article'

interface Props {
    article: any
}

const lorem = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ab tenetur, eveniet tempora nostrum architecto nihil quibusdam soluta, eaque quia aliquam consequuntur. Recusandae doloribus beatae fugiat odit perferendis enim reiciendis.'

export const ArticleSwitcher = ({ article }: Props) => {
    const { title } = article.PostDetail
    return <ArticleView title={title} desc={lorem} />
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