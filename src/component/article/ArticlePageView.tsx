import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Title } from 'react-native-paper'
import { ArticleImageProfile } from '../../container/article/image'
import { Description } from '../../container/description'
import { theme } from '../../theme'
import { PostedByList } from './posted'
import { getFakeText } from '../../utils/utils'

interface Props {
    article: any
}

export const ArticlePageView = ({ article }: Props) => {
    const { title, profile_picture, posted_by } = article.PostDetail
    return (
        <ScrollView style={styles.container} >
            <ArticleImageProfile imageUrl={profile_picture} />
            <View style={styles.content} >
                <Title>{title}</Title>
                <Description description={getFakeText()} />
                <PostedByList postedList={posted_by} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.background,
        width: '100%'
    },
    content: {
        height: '100%',
        margin: 10,
        paddingBottom: 150
    },
    postedList: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',

    },
    postedItem: {
        marginTop: 5,
        marginRight: 5
    }
});