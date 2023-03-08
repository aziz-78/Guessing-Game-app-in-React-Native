import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";
import Title from "../components/ui/Title";

const generateRandomBetween=(max,min,exclude)=>{
 let rndNum = Math.floor(Math.random()*(max-min))+min;
 if (rndNum === exclude){
  return generateRandomBetween(max,min,exclude);
 }
 else{
  return rndNum;
 }
}


function GameScreen({userNumber}) {
  const initialGuess = generateRandomBetween(1,100,userNumber);
  const [currentGuess,setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponents Guess</Title>
      
      <View>
        <Text>Higher or Lower</Text>
        {/* + - */}
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}
export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  
});
