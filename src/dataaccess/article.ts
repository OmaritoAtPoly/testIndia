import { fetchArticleUrl } from "../container"
import axios from "axios"

export const fetchArticle = async (articleId: string) => {
    const detailArticleDir = `${fetchArticleUrl}${articleId}`
    return await axios.get(detailArticleDir).then(res => res.data).catch(err => console.log(err))
}