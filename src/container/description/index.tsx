import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getFakeText } from '../../utils/utils';
import { WebView } from 'react-native-webview';


interface Props {
    description: any,
}

export const Description = ({ description }: Props) => {

    const descrip = description[0].data;
    const descrip2 = descrip == '' && getFakeText();
    const valor_html = 'https://google.com'

    return (
        <View style={styles.container} >
            {/* <Text>{descrip + descrip2}</Text> */}
            <WebView  source={{ uri: `${valor_html}`}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        height:'100%',
        width:'100%',
    },
    web:{
        maxHeight:'50%',
        maxWidth:'50%'
    }
});
