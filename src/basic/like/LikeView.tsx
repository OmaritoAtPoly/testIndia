import React from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import { IconButton } from 'react-native-paper'

interface Props {
    like: number;
    comment: number;
    onLike: (value: number) => void
    onDislike: (value: number) => void

}

export const LikeComponentView = ({ like, comment, onDislike, onLike }: Props) => {
    return (
        <View style={styles.container} >
            <Text style={styles.text} >{`${like} likes, ${comment} comments`}</Text>
            <View style={styles.buttons} >
                <IconButton
                    icon="camera" // Aqui va el icono del like
                    color={'red'}
                    size={20}
                    onPress={() => Alert.alert('Pressed')}
                />
                <IconButton
                    icon="camera"  // Aqui va el icono del unlike
                    color={'red'}
                    size={20}
                    onPress={() => Alert.alert('Pressed')}
                />
                <IconButton
                    icon="camera"  // Aqui va el icono del 3 punticos horizontales
                    color={'red'}
                    size={20}
                    onPress={() => Alert.alert('Pressed')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    text: {
        fontSize: 16
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
});
