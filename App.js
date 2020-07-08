import React, { useState } from "react"
import { StyleSheet, View, TextInput, Button, Text } from "react-native"

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("")
  const [courseGoals, setCourseGoals] = useState([])
  const goalInputHandler = (enterText) => {
    setEnteredGoal(enterText)
  }

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [...currentGoals, enteredGoal])
  }

  return (
    <View style={style.screen}>
      <View style={style.inputComtainer}>
        <TextInput
          placeholder="Course Goal"
          style={style.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>
        {courseGoals.map((goal) => (
          <View key={goal} style={style.listItem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  screen: {
    padding: 30,
  },
  inputComtainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
})
