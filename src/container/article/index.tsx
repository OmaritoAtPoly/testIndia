import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { fetchArticle } from '../../dataaccess/article'

const articles =
    [
        '5ea9938307d49135ba47bbc7', '5ea993634c87c3359a63c9ec',
        '5ea9933a66e603359fe0c3ab', '5ea9931f4c87c3359a63c9d1',
        '5ea992f166e603359fe0c382', '5ea9921666e603359fe0c320',
        '5ea991ba4c87c3359a63c92e'
    ]

export const Article = ({ navigation, route }: any) => {
    const defaultArticle: any = {}
    const [article, setArticle] = useState(defaultArticle)
    const [articleId, setArticleId] = useState(articles[5])

    const isValidArticle = (article: any) => {
        if (article) {
            console.log(article)
            setArticle(article)
        }
    }

    const getArticle = async () => {
        const article = await fetchArticle(articleId)
        isValidArticle(article)
    }

    useEffect(() => {
        getArticle()
    }, [articleId])

    return <Text>Article</Text>
}