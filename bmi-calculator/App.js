import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button ,StatusBar,Platform,SafeAreaView,TouchableOpacity,Alert,ImageBackground} from 'react-native';
import { Constants } from 'expo';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = { height: 2,
                   weight: 80,
                   bmi:0,
                   text:"underweight"
                 };
  }

  
  handleclick = () => {
    const height = this.state.height
    const weight = this.state.weight
    const calculated_bmi = weight/(height*height)*10000
    this.setState({bmi:calculated_bmi})
    if(calculated_bmi>=25){
const text="overweight"
      Alert.alert("your bmi is:"+calculated_bmi+<br/>+text)

    }
    else if(calculated_bmi>=18.5 && calculated_bmi<=24.9){
      const text="ideal range"
      Alert.alert("your bmi is:"+calculated_bmi+<br/>+text)
    }
    else{
      const text="underweight"
      Alert.alert("your bmi is:"+calculated_bmi+<br/>+text)
    }
    
  }



  render() {
    return (
      <View style={styles.container}>
      <ImageBackground style={styles.bgimage} source={require("./yoga.jpeg")}>
      <SafeAreaView style={styles.safearea}/>
        <Text style={styles.paragraph}>
          BMI Calculator
        </Text>
       
          <TextInput 
                     placeholder="Please put in your height in centimeters"
                     style={styles.textinput}
                     onChangeText={(new_height) => this.setState({height:new_height})}
                     />
          <TextInput
                     placeholder="Please put in your weight in kg"
                     style={styles.textinput}
                     onChangeText={(new_weight) => this.setState({weight:new_weight})}
                     />
                     
          
          
          <TouchableOpacity style={styles.button} onPress={this.handleclick} >
          <Text style={styles.buttontext}> calculate bmi </Text>
          </TouchableOpacity>
          
</ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
   
    backgroundColor: 'cyan',
    padding: 8,
  },
  safearea:{
    marginTop:Platform.OS==="android"?StatusBar.currentHeight:0
  },
  paragraph: {
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily:"cursive"
  },
  textinput: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 3,
    borderRadius:2,
    marginTop:20,
    fontSize:16

  },
  button:{
    borderRadius:25,
    backgroundColor:'red',
    width:150,
    height:50,
    marginLeft:80,
    alignItems:"center",
    justifyContent:"center",
    marginTop:30
    
  },
  buttontext:{
    fontWeight:"bold",
    fontSize:20

  },
  bgimage:{
    flex:1,
    opacity:1.0,
    width:"120%"
  }

});
