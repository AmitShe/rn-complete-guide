import React, { useState } from 'react'
import {TextInput, StyleSheet, Button, View, Modal} from 'react-native';

const GoalInput= props => {

    const [enteredGoal, setEnteredGoal] = useState('')

    const goalInputHandler = (enterText) => {
        setEnteredGoal(enterText)
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal)
        setEnteredGoal('')
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput
                placeholder='Course Goal'
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}
                />
                <View style={styles.addRemoveButtons}>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} color='red' />
                    </View>
                    <View style={styles.button}>
                        <Button title='ADD' onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        margin: 10
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addRemoveButtons: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        width: '40%'
    }
})

export default GoalInput
