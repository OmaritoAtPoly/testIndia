import { fetchArticleUrl } from "../container"
import axios from "axios"

export const fetchArticle = async (articleId: string) => {
    const detailArticleDir = `${fetchArticleUrl}${articleId}`
    return await axios.get(detailArticleDir).then(res => res.data).catch(err => console.log(err))
}

export const fetchDescription = async (descriptionUrl: string) => {
    console.log("Urllll")
    console.log(descriptionUrl)

    const data = await axios.get(descriptionUrl).then(res => res.data).catch(err => console.log(err))
    console.log("Queryyyy")
    console.log(data)
    return data;
}