import React from 'react';
import { Text } from 'react-native';
import { Subheading } from 'react-native-paper';

interface Props {
        min_read: string
}

export const ElapseTime = ({ min_read }: Props) => (
        <Text><Subheading style={{ marginLeft: 25 }}>Articule {min_read}</Subheading></Text>
)