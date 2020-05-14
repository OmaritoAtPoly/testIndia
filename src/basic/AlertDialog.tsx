import React from 'react'
import { View } from 'react-native'
import { Button, Dialog, Paragraph, Portal } from 'react-native-paper'

interface Props {
    visible: boolean;
    onDismiss: () => void;
}

export const AlertDialog = ({ visible, onDismiss }: Props) => {
    return (
        <View>
            <Portal>
                <Dialog
                    visible={visible}
                    onDismiss={() => {}}>
                    <Dialog.Title style={{ fontSize: 24 }} >
                        Ups!! Something was wrong
                        </Dialog.Title>
                    <Dialog.Content>
                        <Paragraph style={{ fontSize: 18 }} >User or Password incorrect</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions style={{ justifyContent: 'center' }} >
                        <Button onPress={onDismiss}>Ok</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    )
}