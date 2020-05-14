import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Subheading } from 'react-native-paper';

interface Props {
        min_read: string
}

export const ElapseTime = ({ min_read }: Props) => (
        <Text><Subheading style={styles.container}>Articule {min_read}</Subheading></Text>
)

const styles = StyleSheet.create({
        container: {
                marginLeft: 25,
        },
});
