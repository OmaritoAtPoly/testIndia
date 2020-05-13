import React from 'react'
import { Avatar } from 'react-native-paper'
import { ProfileChip } from '../../basic/ProfileChip'
import { StyleSheet, View } from 'react-native'

interface Props {
    userName: string
    profilePicture: string
}

export const UserProfile = ({ userName, profilePicture }: Props) => {
    return (
        <ProfileChip
            text={userName}
            avatar={
                <View style={styles.avatar} >
                    <Avatar.Image size={28} source={{ uri: profilePicture }} />
                </View>
            }
        />
    )
}

const styles = StyleSheet.create({
    avatar: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderColor: '#1ce87c',
        width: 40,
        height: 40,
        borderWidth: 2,
        padding: 5
    }
});
