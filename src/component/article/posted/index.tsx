import React from 'react'
import { Title, Chip } from 'react-native-paper'
import { View, StyleSheet } from 'react-native'
import { theme } from '../../../theme'

interface Props {
    postedList: any[]
}

export const PostedByList = ({ postedList }: Props) => {
    return (
        <View style={styles.container} >
            <Title>Groups</Title>
            <View style={styles.postedList} >
                {postedList.map((postedBy) => <Chip key={postedBy.id} style={styles.postedItem} mode="outlined" > {postedBy.group_name}</Chip>)}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    postedList: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    postedItem: {
        marginTop: 5,
        marginRight: 5
    }
});