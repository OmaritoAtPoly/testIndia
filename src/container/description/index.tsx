import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getFakeText } from '../../utils/utils';

interface Props {
    description: any,
}

export const Description = ({ description }: Props) => {

    const descrip = description[0].data;
    const descrip2 = descrip == '' && getFakeText();

    return (
        <View style={styles.container} >
            <Text>{descrip + descrip2}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    }
});