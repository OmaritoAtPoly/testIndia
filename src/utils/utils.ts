export const articles = ['5ea9938307d49135ba47bbc7', '5ea993634c87c3359a63c9ec', '5ea9933a66e603359fe0c3ab', '5ea9931f4c87c3359a63c9d1',
    '5ea992f166e603359fe0c382', '5ea9921666e603359fe0c320', '5ea991ba4c87c3359a63c92e']


export const articlesIds = [
    {
        key: 1,
        articleId: '5ea9938307d49135ba47bbc7'
    },
    {
        key: 2,
        articleId: '5ea993634c87c3359a63c9ec'
    },
    {
        key: 3,
        articleId: '5ea9933a66e603359fe0c3ab'
    },
    {
        key: 4,
        articleId: '5ea992f166e603359fe0c382'
    },
    {
        key: 5,
        articleId: '5ea9921666e603359fe0c320'
    },
    {
        key: 6,
        articleId: '5ea991ba4c87c3359a63c92e'
    }
]
export const getFakeText = () => {
    return `
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ab tenetur, eveniet tempora nostrum architecto nihil quibusdam soluta, eaque quia aliquam consequuntur. Recusandae doloribus beatae fugiat odit perferendis enim reiciendis. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
}

export const getArticleId = (index: number) => {

    return (index >= 0 && index < articles.length) ? articles[index] : ''
}

export const getRandomArticleId = () => {
    return articles[2]
    return getArticleId(Math.floor(Math.random() * articles.length));
}
