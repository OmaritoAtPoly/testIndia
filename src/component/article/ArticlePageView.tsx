import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Title } from 'react-native-paper'
import { Like } from '../../basic/like/Like'
import { ArticleImageProfile } from '../../container/article/image'
import { Comment } from '../../container/comment'
import { Description } from '../../container/description'
import { UserProfile } from '../../container/user/User'
import { theme } from '../../theme'
import { ElapseTime } from '../articule_elapse_time/ElapseTime'
import { PostedByList } from './posted'
import { Tags } from './tags/Tags'


interface Props {
    article: any
    userName: string
    profilePicture: string
    onLike: (value: number) => void
    onDislike: (value: number) => void

}


export const ArticlePageView = ({ article, userName, profilePicture, onDislike, onLike }: Props) => {
    const {
        title,
        profile_picture,
        posted_by,
        description,
        tagline,
        total_upvote,
        comment_count, min_read } = article.PostDetail
    return (
        <ScrollView style={styles.container} >
            <ArticleImageProfile imageUrl={profile_picture} />
            <View style={styles.content} >
                <Title style={{ fontSize: 25 }}>{title}</Title>
                <View style={styles.user_avatar}>
                    <UserProfile userName={userName} profilePicture={profilePicture} />
                    <ElapseTime min_read={min_read} />
                </View>
                <View><Description description={description} /></View>
                <Tags tags={tagline} />
                <PostedByList postedList={posted_by} />
                <Like comment={comment_count} like={total_upvote} onLike={onLike} onDislike={onDislike} />
                <Comment />
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
    },
    user_avatar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
});


