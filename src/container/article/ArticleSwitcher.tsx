import React from 'react'
import { ArticleView } from '../../component/article'
import { getFakeText } from '../../utils/utils'

interface Props {
    article: any
}

export const ArticleSwitcher = ({ article }: Props) => {
    const { title, profile_image, posted_by } = article.PostDetail
    return (
        <ArticleView
            title={title}
            desc={getFakeText()}
            imgUrl={profile_image}
            postedList={posted_by}
        />
    )
}

// const componentToRender = (articleDetail: any) => {
//     if (articleDetail.profileImage !== undefined) {
//         return (
//             <ArticleViewWithImage
//                 title={articleDetail.title}
//                 description={articleDetail.description[0].data}
//                 profileImage={articleDetail.profileImage}
//             />
//         )
//     } else {
//         return <ArticleViewWithNoImage
//             title={articleDetail.title}
//             description={articleDetail.description[0].data}
//             article_id={articleDetail.article_id}
//             tags={articleDetail.tags}
//             created_at={articleDetail.created_at}
//             total_upvote={articleDetail.total_upvote}
//             comment_count={articleDetail.comment_count}
//         />
//     }

// }