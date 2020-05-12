import React, { useEffect, useState } from 'react'
import { Loading } from '../../component/loading/Loading'
import { fetchArticle } from '../../dataaccess/article'
import { ArticleSwitcher } from './ArticleSwitcher'
import { getArticleId } from '../../utils/utils'


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


export const Article = ({ navigation, route }: any) => {
    const [articleId, setArticle] = useState(getArticleId(0))
    const { data, loading } = useFetch(articleId)
    return loading ? <Loading /> : <ArticleSwitcher article={data} />
}
