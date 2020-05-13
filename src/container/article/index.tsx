import React, { useEffect, useState } from 'react'
import { ArticleView } from '../../component/article'
import { articlesIds } from '../../utils/utils'
import { ArticlePage } from './ArticlePage'

const onLike = (likeCount: number) => {
    console.log('OnLike')
}

const onDisslike = (disslikeCount: number) => {
    console.log('On dislike')
}


const getArticlesToRender = (userName: string, profilePicture: string) => {
    return articlesIds.map((article) => {
        return <ArticlePage
            key={article.key}
            articleId={article.articleId}
            userName={userName}
            profilePicture={profilePicture}
            onDislike={onDisslike}
            onLike={onLike}
        />
    })
}

export const Article = ({ route }: any) => {
    const { profilePicture, userName } = route.params
    const defaultArticles: JSX.Element[] = []
    const [articles, setArticles] = useState(defaultArticles)

    useEffect(() => {
        const articlesToRender = getArticlesToRender(userName, profilePicture)
        setArticles(articlesToRender)

    }, [])

    return <ArticleView articles={articles} />
}
