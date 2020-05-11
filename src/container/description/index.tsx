import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import { fetchDescription } from '../../dataaccess/article'

interface Props {
    description: string
}

const queryDescription = async (descriptionUrl: string) => {
    return await fetchDescription(descriptionUrl)
}

const useFetch = (descriptionUrl: string) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetch = async () => {
        const data = await queryDescription(descriptionUrl)
        setData(data)
    }

    useEffect(() => {
        fetch().then(() => setLoading(false))
    }, [])

    return { data, loading }
}

export const Description = ({ description }: Props) => {
    // const { data, loading } = useFetch(descriptionUrl)
    return <Text>{description}</Text>
}