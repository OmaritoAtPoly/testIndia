import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { fetchArticleUrl } from '..'

const articles =
    [
        '5ea9938307d49135ba47bbc7', '5ea993634c87c3359a63c9ec',
        '5ea9933a66e603359fe0c3ab', '5ea9931f4c87c3359a63c9d1',
        '5ea992f166e603359fe0c382', '5ea9921666e603359fe0c320',
        '5ea991ba4c87c3359a63c92e'
    ]

export const Article = ({ navigation, route }: any) => {
    const userId = route.params.userId
    const [article, setArticle] = useState(articles[0])

    const fetchArticle = async () => {
        const detailArticleDir = `${fetchArticleUrl}${article}`
        console.log(detailArticleDir)
        await axios.get(detailArticleDir).then(res => { console.log(res.data) })
    }

    useEffect(() => {
        fetchArticle()
    }, [article])

    return <Text>Article</Text>
}