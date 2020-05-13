import React from 'react'
import { Avatar } from 'react-native-paper'
import { ProfileChip } from '../../basic/ProfileChip'

interface Props {
    userName: string
    profilePicture: string
}

export const UserProfile = ({ userName, profilePicture }: Props) => {
    return (
        <ProfileChip
            text={userName}
            avatar={<Avatar.Image size={28} source={{ uri: profilePicture }} />}
        />
    )
}