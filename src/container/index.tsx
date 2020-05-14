import React from 'react'
import { Login } from './login'
import { View } from 'react-native'
import { LikeComponentView } from '../basic/like/LikeView'
import { Like } from '../basic/like/Like'

export const domainName = 'https://www.atg.party/'
export const fetchArticleUrl = 'https://api.jsonbin.io/b/'
export const articleEndPoint = 'ws-feed-detail'
export const loginUserEndPoint = 'ws-login-user'

export const Main = ({ navigation }: any) => {
    return <Login navigation={navigation} />
}
