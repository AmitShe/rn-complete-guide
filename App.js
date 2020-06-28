import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const goalInputHandler = (enterText) => {
    setEnteredGoal(enterText);
  };

  const addGoalHandler = () => {
    console.log(enteredGoal)
  }

  return (
    <View style={style.screen}>
      <View style={style.inputComtainer}>
        <TextInput
        placeholder='Course Goal'
        style={style.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
        />
        <Button title='ADD' onPress={addGoalHandler}/>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  screen: {
    padding: 30
  },
  inputComtainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  }
});