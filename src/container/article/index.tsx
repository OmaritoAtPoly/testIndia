import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { fetchArticle } from '../../dataaccess/article'
import { ArticleSwitcher } from './ArticleSwitcher'

const articles = ['5ea9938307d49135ba47bbc7', '5ea993634c87c3359a63c9ec', '5ea9933a66e603359fe0c3ab', '5ea9931f4c87c3359a63c9d1',
    '5ea992f166e603359fe0c382', '5ea9921666e603359fe0c320', '5ea991ba4c87c3359a63c92e']

const useFetch = (articleId: string) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    const getArticle = async () => {
        const article = await fetchArticle(articleId)
        isValidArticle(article)
    }

    const isValidArticle = (article: any) => {
        if (article) {
            setData(article)
            setLoading(false)
        }
    }

    useEffect(() => {
        getArticle()
    }, [])

    return { data, loading }
}


export const Article = ({ navigation, route }: any) => {
    const [articleId, setArticle] = useState(articles[3])
    const { data, loading } = useFetch(articleId)
    return loading ? <Text>Loading...</Text> : <ArticleSwitcher article={data} />
}
