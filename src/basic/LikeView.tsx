import React from 'react'
import { View, Text } from 'react-native'
import { IconButton } from 'react-native-paper'

interface Props {
    like: number;
    comment: number;
    onLike: (value: number) => void
    onDislike: (value: number) => void

}

export const LikeComponentView = ({ like, comment, onDislike, onLike }: Props) => {
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }} >
            <Text>{`${like} likes, ${comment} comments`}</Text>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                <IconButton
                    icon="camera"
                    color={'red'}
                    size={20}
                    onPress={() => console.log('Pressed')}
                />
                <IconButton
                    icon="camera"
                    color={'red'}
                    size={20}
                    onPress={() => console.log('Pressed')}
                />
            </View>
        </View>
    )
}