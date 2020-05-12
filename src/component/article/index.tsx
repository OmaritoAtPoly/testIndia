import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Description } from '../../container/description'
import { Title } from 'react-native-paper'
import { ArticleImageProfile } from '../../container/article/image'
import { PostedByList } from './posted'
import { theme } from '../../theme'
import { ScrollView } from 'react-native-gesture-handler'

interface Props {
    title: string;
    desc: string;
    imgUrl: string;
    postedList: any[]
}

export const ArticleView = ({ title, desc, imgUrl, postedList }: Props) => {

    return (
        <ScrollView style={styles.container} >
            <ArticleImageProfile imageUrl={imgUrl} />
            <View style={styles.content} >
                <Title>{title}</Title>
                <Description description={desc} />
                <PostedByList postedList={postedList} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.background
    },
    content: {
        height: '100%',
        margin: 10,
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