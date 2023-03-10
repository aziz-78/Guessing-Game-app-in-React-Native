import { View, Image, StyleSheet, Text } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";
const GameOverScreen = ({roundsNumber,userNumber,onStartNewGame}) => {
  return (
    <View style={Styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={Styles.imageConatainer}>
        <Image
          source={require("../assets/images/success.png")}
          resizeMode="cover"
          style={Styles.image}
        />
      </View>
      <Text style={Styles.summaryText}>
        Your phone needed <Text style={Styles.highLight}>{roundsNumber}</Text> rounds to guess the number <Text style={Styles.highLight}>{userNumber}</Text>
        
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New game</PrimaryButton>
    </View>
  );
};
export default GameOverScreen;

const Styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageConatainer: {
    height: 300,
    width: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize:21,
    textAlign:'center',
    marginBottom:24,
  },
  highLight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
