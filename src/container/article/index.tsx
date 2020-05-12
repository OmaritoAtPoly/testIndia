import React, { useEffect, useState } from 'react'
import { ArticleView } from '../../component/article'
import { articlesIds } from '../../utils/utils'
import { ArticlePage } from './ArticlePage'


const getArticlesToRender = (userName: string, profilePicture: string) => {
    return articlesIds.map((article) => {
        return <ArticlePage
            key={article.key}
            articleId={article.articleId}
            userName={userName}
            profilePicture={profilePicture}
        />
    })
}

// "profilePicture": "https://s3.ap-south-1.amazonaws.com/atg-test-s3/assets/Frontend/user/profile_pics/83/thumb/1523276847.png",
// "userId": 83,
// "userName": "Saurabh"

export const Article = ({ route }: any) => {
    const { profilePicture, userName } = route.params
    console.log(route.params)
    const defaultArticles: JSX.Element[] = []
    const [articles, setArticles] = useState(defaultArticles)

    useEffect(() => {
        const articlesToRender = getArticlesToRender(userName, profilePicture)
        setArticles(articlesToRender)

    }, [])

    return <ArticleView articles={articles} />
}
