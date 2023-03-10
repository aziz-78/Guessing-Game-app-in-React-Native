import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert ,Text} from 'react-native';

import Card from '../components/ui/Card';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/Colors';
import InstructionText from '../components/ui/InstructionText';
function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState('');  // records number inserted by user

  function numberInputHandler(enteredText) { //function to change state to value inserted by user
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() { //resets value of text field
    setEnteredNumber('');
  }

  function confirmInputHandler() { // it is the handler which works when we hit the confirm button 
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {// show alert if number not entered
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }] //array is alert button
      );
      return;
    }

    onPickNumber(chosenNumber) // passes number 
  }

  return (
    <View style={styles.rootContainer}> 
      <Title>Guess my number</Title>
    <Card>
      <InstructionText>Enter a Number</InstructionText>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer:{
   flex:1,
   marginTop:100,
   alignItems:'center',
  },
  
 
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});