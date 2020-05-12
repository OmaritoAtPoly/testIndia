import { fetchArticleUrl } from "../container"
import axios from "axios"

export const fetchArticle = async (articleId: string) => {
    const detailArticleDir = `${fetchArticleUrl}${articleId}`
    return await axios.get(detailArticleDir).then(res => res.data).catch(err => console.log(err))
}

export const fetchDescription = async (descriptionUrl: string) => {
    const data = await axios.get('https://www.atg.party/view-article/32225/wv/description').then(res => res.data).catch(err => console.log(err))
    return data;
}