import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getFakeText } from '../../utils/utils';
import { WebView } from 'react-native-webview';
import HTMLView from 'react-native-htmlview';

interface Props {
    description: any,
}

export const Description = ({ description }: Props) => {


    let htmlContent = '';
    for (let i = 0; i < description.length; i++) {
        htmlContent += description[i].data;
    }

    return (
        <View style={styles.container} >
            <HTMLView value={htmlContent} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
});
