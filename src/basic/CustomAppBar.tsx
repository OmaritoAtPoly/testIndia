import React from 'react'
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

interface Props {
    title: string;
    onActionClick?: () => void
    onBack?: () => void
}

export const CustomAppBar = ({ title, onActionClick, onBack }: Props) => {
    return (
        <Appbar.Header>
            {onBack && <Appbar.BackAction onPress={onBack} />}
            <Appbar.Content
                title={title}
            />
            {onActionClick && <Appbar.Action icon="add" onPress={onActionClick} />}
        </Appbar.Header>
    )
}