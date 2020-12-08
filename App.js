import React, { useState } from "react"
import {
  StyleSheet,
  View,
  FlatList,
  Button
} from "react-native"
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ])
    cancelAddGoalModel()
  }

  const cancelAddGoalModel = () => {
    setIsAddMode(false)
  }

  const removeGoal = (goalId) => {
    setCourseGoals((currentGoals) => (currentGoals.filter(goal => goal.id !== goalId)))
  }

  return (
    <View style={style.screen}>
      <Button onPress={() => setIsAddMode(true)} title="Add New" />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelAddGoalModel}/>
      <View>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={(itemDate) => (
              <GoalItem title={itemDate.item.value} onDelete={() => removeGoal(itemDate.item.id)}/>
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
  }
})
