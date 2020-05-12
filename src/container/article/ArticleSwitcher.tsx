import React from 'react'
import { ArticleView } from '../../component/article'
import { getFakeText } from '../../utils/utils'

interface Props {
    article: any
}

export const ArticleSwitcher = ({ article }: Props) => {
    const { title, profile_image, posted_by } = article.PostDetail
    return (
        <ArticleView
            title={title}
            desc={getFakeText()}
            imgUrl={profile_image}
            postedList={posted_by}
        />
    )
}