import React from 'react'
import { ArticleView } from '../../component/article'
import { getFakeText } from '../../utils/utils'
import { CustomAppBar } from '../../basic/CustomAppBar'
import { View } from 'react-native'

interface Props {
    article: any
}

export const ArticleSwitcher = ({ article }: Props) => {
    const { title, profile_picture, posted_by } = article.PostDetail
    return (
        <View>
            <CustomAppBar title={'Article'} />
            <ArticleView
                title={title}
                desc={getFakeText()}
                imgUrl={profile_picture}
                postedList={posted_by}
            />
        </View>
    )
}