import React from 'react'
import { ArticleViewWithImage } from '../../component/article/ArticleViewWithImage'
import { ArticleViewWithNoImage } from './ArticleViewWithNoImage '
import { Text } from 'react-native'
import { ArticleView } from '../../component/article'

interface Props {
    article: any
}

const lorem = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ab tenetur, eveniet tempora nostrum architecto nihil quibusdam soluta, eaque quia aliquam consequuntur. Recusandae doloribus beatae fugiat odit perferendis enim reiciendis. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

export const ArticleSwitcher = ({ article }: Props) => {
    const { title, profile_picture, posted_by } = article.PostDetail
    return <ArticleView title={title} desc={lorem} imgUrl={profile_picture} postedList={posted_by} />
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