import React, { useEffect, useState } from 'react'
import { ArticleView } from '../../component/article'
import { articlesIds } from '../../utils/utils'
import { ArticlePage } from './ArticlePage'


const getArticlesToRender = () => {
    return articlesIds.map((article) => {
        return <ArticlePage key={article.key} articleId={article.articleId} />
    })
}

export const Article = () => {
    const defaultArticles: JSX.Element[] = []
    const [articles, setArticles] = useState(defaultArticles)

    useEffect(() => {
        const articlesToRender = getArticlesToRender()
        setArticles(articlesToRender)

    }, [])

    return <ArticleView articles={articles} />
}
