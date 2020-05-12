import React from 'react'
import { CustomAppBar } from '../../basic/CustomAppBar'
import { View, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'
import { theme } from '../../theme'

interface Props {
    articles: JSX.Element[]
}

export const ArticleView = ({ articles }: Props) => {
    return (
        <View style={styles.container} >
            <CustomAppBar title={'Article'} />
            <Swiper
                showsButtons={false}
                loop={false}
                dot={<View />}
                activeDot={<View />}
            >
                {articles}
            </Swiper >
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.background,
        height: '100%',
    }
});