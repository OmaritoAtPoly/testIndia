import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
    description: string
}

export const Description = ({ description }: Props) => {
    return (
        <View style={styles.container} >
            <Text>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    }
});