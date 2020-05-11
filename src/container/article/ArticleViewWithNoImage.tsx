import React from 'react'
import { Text, View, Image } from 'react-native'
import { navigator } from '../../route'


// interface Props {
//         article: any;
//         navigation: () => void
// }
export const ArticleViewWithNoImage = ({ article, navigation }: any) => {

        // // if (article != undefined || article != null ) {
        //         if (article != '' && article != undefined && article != null) {

        // // const valores = Object.keys(article);
        //         // // const id =  ? article.article_id : '';
                
        // } 
        // console.log(article)
        return <>
                <Text style={{ color: "red" }} onPress={() => navigation.navigate('main')}>Go back</Text>
                {/* {article} */}
                {/* <Text>{article.article_id}</Text> */}
                {/* <Text >{datas.title}</Text>
                <Text>{datas.profile_image}</Text>
                <Text>{datas.description}</Text>
                <Text>{datas.arr_tag}</Text>
                <Text>{datas.arr_comment}</Text> */}
        </>
}


const datas = {
        title: 'HERE IS THE ARTICLE NAME',
        user_name: "the name of the user",
        profile_image: "here it goes the tiny pic, i think so",
        created_at: "the moment when ws created",
        description: "THE HOLE article",
        arr_tag: 'an array with tags',
        arr_comment: "an array with comments",
        total_upvote: "all post likes to print the number",
}