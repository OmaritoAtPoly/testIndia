import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconButton } from 'react-native-paper'
import { theme } from '../../theme'
import Icon from 'react-native-vector-icons/AntDesign';

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
                    icon={({ size, color }) => (<Icon name="like1" size={size} color={color} />)}
                    color={theme.colors.primary}
                    onPress={() => console.log('Pressed')}
                />
                <IconButton
                    icon={({ size, color }) => (<Icon name="dislike2" size={size} color={color} />)}
                    color={theme.colors.primary}
                    onPress={() => console.log('Pressed')}
                />
                <IconButton
                    icon="more-horiz"  // Aqui va el icono del 3 punticos horizontales
                    color={theme.colors.primary}
                    onPress={() => console.log('Pressed')}
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
