import React from 'react'
import { ArticleView } from '../../component/article'
import { getFakeText } from '../../utils/utils'
import { CustomAppBar } from '../../basic/CustomAppBar'
import { View } from 'react-native'

interface Props {
    article: any
    toLeft: () => JSX.Element;
    toRight: () => JSX.Element;
}

export const ArticleSwitcher = ({ article, toLeft, toRight }: Props) => {
    const { title, profile_picture, posted_by } = article.PostDetail
    return (
        <View>
            <CustomAppBar title={'Article'} />
            {/* <ArticleView
                title={title}
                desc={getFakeText()}
                imgUrl={profile_picture}
                postedList={posted_by}
                toLeft={toLeft}
                toRight={toRight}
            /> */}
        </View>
    )
}