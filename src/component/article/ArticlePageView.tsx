import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Title } from 'react-native-paper'
import { ArticleImageProfile } from '../../container/article/image'
import { Description } from '../../container/description'
import { theme } from '../../theme'
import { PostedByList } from './posted'

interface Props {
    article: any
}

export const ArticlePageView = ({ article }: Props) => {
    const { title, profile_picture, posted_by } = article.PostDetail
    return (
        <View style={{ width: '100%' }} >
            <ScrollView style={styles.container} >
                <ArticleImageProfile imageUrl={profile_picture} />
                <View style={styles.content} >
                    <Title>{title}</Title>
                    <Description description={'Description'} />
                    <PostedByList postedList={posted_by} />
                </View>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.background
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