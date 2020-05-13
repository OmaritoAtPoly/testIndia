import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Chip } from 'react-native-paper';
import { theme } from '../theme';

interface Props {
    avatar: JSX.Element
    text: string
}

export const ProfileChip = ({ avatar, text }: Props) => {
    return (
        <Chip
            style={styles.container}
            mode="outlined"
            avatar={avatar}
        >
            <Text style={styles.text} >{text}</Text>
        </Chip>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '40%',
        padding: 5,
        backgroundColor: theme.colors.background,
    },
    text: {
        fontSize: 16
    }
});