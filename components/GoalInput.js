import React, { useState } from 'react'
import {TextInput, StyleSheet, Button, View, Modal} from "react-native";

const GoalInput= props => {

    const [enteredGoal, setEnteredGoal] = useState("")

    const goalInputHandler = (enterText) => {
        setEnteredGoal(enterText)
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal)
        setEnteredGoal('')
    }


    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                placeholder="Course Goal"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button title="Cancel" onPress={props.onCancel} color='red' />
            <Button title="ADD" onPress={addGoalHandler} />
            </View>
        </Modal>
)
}

const styles = StyleSheet.create({
    input: {
        width: "80%",
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        margin: 10
    },
    inputContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }
})

export default GoalInput