import React, { useState } from 'react'
import {TextInput, StyleSheet, Button, View} from "react-native";

const GoalInput= props => {

    const [enteredGoal, setEnteredGoal] = useState("")

    const goalInputHandler = (enterText) => {
        setEnteredGoal(enterText)
    }


    return (
        <View style={styles.inputContainer}>
            <TextInput
            placeholder="Course Goal"
            style={styles.input}
            onChangeText={goalInputHandler}
            value={enteredGoal}
        />
        <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} />
        </View>
)
}

const styles = StyleSheet.create({
    input: {
        width: "80%",
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
})

export default GoalInput