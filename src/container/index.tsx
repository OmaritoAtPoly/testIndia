import React from 'react'
import { Login } from './login'

export const domainName = 'https://www.atg.party/'
export const fetchArticleUrl = 'https://api.jsonbin.io/b/'
export const articleEndPoint = 'ws-feed-detail'


export const Main = ({ navigation }: any) => {
    return <Login navigation={navigation} />
}