import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';

export const Comment = () => {
    return (
        <View style={styles.container} >
            <Title>Comments</Title>
            <View style={styles.commentItem} />
            <View style={styles.commentItem} />
            <View style={styles.commentItem} />
            <View style={styles.commentItem} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    commentItem: {
        height: 50,
        backgroundColor: '#ccc',
        marginTop: 20
    }
});
