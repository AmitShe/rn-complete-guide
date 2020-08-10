import React, { useState } from "react"
import {
  StyleSheet,
  View,
  Button,
  FlatList,
} from "react-native"
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("")
  const [courseGoals, setCourseGoals] = useState([])
  const goalInputHandler = (enterText) => {
    setEnteredGoal(enterText)
  }

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal },
    ])
  }

  return (
    <View style={style.screen}>
      <View style={style.inputContainer}>
        <GoalInput inputHandler={goalInputHandler}  Goal={enteredGoal} />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={(itemDate) => (
              <GoalItem title={itemDate.item.value} />
          )}
        />
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  screen: {
    padding: 30,
  },
  inputContainer: {
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
