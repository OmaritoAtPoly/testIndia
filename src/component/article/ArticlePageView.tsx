import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Subheading, Title } from 'react-native-paper'
import { ArticleImageProfile } from '../../container/article/image'
import { Description } from '../../container/description'
import { UserProfile } from '../../container/user/User'
import { theme } from '../../theme'
import { PostedByList } from './posted'
import { Tags } from './tags/Tags'
import { Like } from '../../basic/like/Like'
import { Comment } from '../../container/comment'

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
        first_name,
        last_name,
        description,
        tagline,
        total_upvote,
        total_downvote,
        comment_count } = article.PostDetail

    return (
        <ScrollView style={styles.container} >
            <ArticleImageProfile imageUrl={profile_picture} />
            <View style={styles.content} >
                <Title style={{ fontSize: 25 }}>{title}</Title>
                <View style={styles.user_avatar}>
                    <UserProfile userName={userName} profilePicture={profilePicture} />
                    <Subheading style={{ marginLeft: 25 }}>Articule</Subheading>
                </View>
                <Description description={description} />
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


