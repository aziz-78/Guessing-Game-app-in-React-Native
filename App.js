import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground ,SafeAreaView} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState,useEffect } from "react";
import {useFonts} from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';


import GameScreen from "./screens/GameScreen";
import Colors from "./constants/Colors";
import GameOverScreen from "./screens/GameOverScreen";
import StartGameScreen from "./screens/StartGameScreen";


export default function App() {
  const [userNumber,setUserNumber] = useState("");
  const [gameIsOver,setGameIsOver] = useState(false);
  const [guessRounds,setGuessRounds] = useState(0);

   const[fontsLoaded]=useFonts({
      'open-sans':require("./assets/fonts/OpenSans-Regular.ttf"),
      'open-sans-bold':require("./assets/fonts/OpenSans-Bold.ttf")

    })
    
    useEffect(()=>{
      async function prepare(){
        await SplashScreen.preventAutoHideAsync();
      }
      prepare();
    },[])
    

    if (!fontsLoaded){
      return undefined;
    }
    else{
      SplashScreen.hideAsync();
    }

  const pickedNumberHandler = (pickedNumber) =>{
     setUserNumber(pickedNumber);
  }
  const gameOverHandler = (numberOfRounds) =>{
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }
  const startGameHandler = () =>{
    setUserNumber(null)
    setGuessRounds(null)
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>
  if (userNumber){
    screen = <GameScreen userNumber={userNumber} gameIsOver={gameOverHandler} />
  }
  if(gameIsOver && userNumber){
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds}  onStartNewGame={startGameHandler} />
  }
  return (
    
    <LinearGradient style={styles.rootScreen} colors={[Colors.primary700, Colors.accent500]}>
      <ImageBackground source={require("./assets/images/background.png")} resizeMode="cover" style={styles.rootScreen} imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>  
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage:{
    opacity:0.2,
  }
});
