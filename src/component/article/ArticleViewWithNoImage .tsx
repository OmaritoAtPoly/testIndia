import React from 'react';
import { Text, View } from 'react-native';

export const ArticleViewWithNoImage = ({ title, description, article_id,
        tags, created_at, profession, posted_by, total_upvote, arr_comment,
        comment_count, user_name }: any) => {
        return <View>

                <Text>{title}</Text>
                <Text>{article_id}</Text>
                {/* <Text>{description}</Text> */}
                {/* <Text>{tags}</Text> */}
                <Text>{created_at}</Text>
                <Text>{total_upvote}</Text>
                <Text>{comment_count}</Text>
        </View>
}