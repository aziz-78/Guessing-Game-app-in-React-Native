import { Text ,StyleSheet} from "react-native"
const Title = ({children}) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

export default Title
const styles =  StyleSheet.create({
    title:{
        fontSize:18,
        color:"#ddb52f",
        textAlign:"center",
        fontWeight:"bold",
        borderWidth:2,
        borderColor:"#ddb52f",
        padding:12,
      }
})