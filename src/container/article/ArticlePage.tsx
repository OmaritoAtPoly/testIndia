import React, { useEffect, useState } from 'react'
import { Loading } from '../../component/loading/Loading'
import { fetchArticle } from '../../dataaccess/article'
import { ArticlePageView } from '../../component/article/ArticlePageView'

interface Props {
    articleId: string
    userName: string
    profilePicture: string
    onLike: (value: number) => void
    onDislike: (value: number) => void
}

const useFetch = (articleId: string) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetch = async () => {
        const article = await fetchArticle(articleId)
        isValidArticle(article)
    }

    const isValidArticle = (article: any) => {
        if (article) {
            setData(article)
        }
    }

    useEffect(() => {
        fetch().then(() => setLoading(false))
    }, [])

    return { data, loading }
}

export const ArticlePage = ({ articleId, userName, profilePicture, onLike, onDislike }: Props) => {
    const { data, loading } = useFetch(articleId)
    return loading ? <Loading /> : <ArticlePageView article={data} profilePicture={profilePicture} userName={userName} onLike={onLike} onDislike={onDislike} />
}