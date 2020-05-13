import React from 'react'
import { StyleSheet, View, } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Subheading, Title, Text, Drawer } from 'react-native-paper'
import { ArticleImageProfile } from '../../container/article/image'
import { Description } from '../../container/description'
import { theme } from '../../theme'
import { getFakeText } from '../../utils/utils'
import { PostedByList } from './posted'
import { Tags } from './tags/Tags'

interface Props {
    article: any
}


export const ArticlePageView = ({ article }: Props) => {
    const { title, profile_picture, posted_by, first_name, last_name, description, tagline } = article.PostDetail

    return (
        <ScrollView style={styles.container} >
            <ArticleImageProfile imageUrl={profile_picture} />
            <View style={styles.content} >
                <Title style={{ fontSize: 25 }}>{title}</Title>
                <View>
                    <Subheading style={{ marginLeft: 25 }}>Articule</Subheading>
                </View>
                <Description description={description} />
                <Tags tags={tagline} />
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
    },
    // name_last: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     color: 'red',
        // fontWeight: '900',
        // fontSize: 111,
        // marginTop: 20,
        // marginLeft: 20,
        // alignItems: 'center'
    // },
});


