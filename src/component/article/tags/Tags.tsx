import React from 'react'
import { Title, Chip } from 'react-native-paper'
import { View, StyleSheet } from 'react-native'
import { theme } from '../../../theme'

interface Props {
        tags: any;
}

export const Tags = ({ tags }: Props) => {

        const allTags = tags.split(' | ');

        return (
                <View style={styles.container} >
                        <View style={styles.tags} >
                                {allTags.map((tag: any, ind: number) => <Chip key={ind} style={styles.postedItem} mode="outlined" >{tag && tag}</Chip>)}
                        </View>
                </View>
        )
}

const styles = StyleSheet.create({
        container: {
                marginTop: 10
        },
        tags: {
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
        },
        postedItem: {
                marginTop: 5,
                marginRight: 5
        }
});