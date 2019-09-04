import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

const currencyPerRuppee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  BITCOIN: 0.0000041
};

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [result, setresult] = useState("INR");
  
  
  
  
  const DOLLAR = currency => {
      setresult(('$ '+currencyPerRuppee.DOLLAR*inputValue))
  };

  const EURO = e =>{
    setresult(('€ '+currencyPerRuppee.EURO*inputValue))
  }

  const POUND = e =>{
    setresult(('£ '+currencyPerRuppee.POUND*inputValue))
  }

  const BITCOIN = e =>{
    setresult(('B '+currencyPerRuppee.BITCOIN*inputValue))
  }



  return (
    <TouchableWithoutFeedback
    onPress={Keyboard.dismiss}
    >
    <SafeAreaView style={styles.container}>
      <View style={styles.screenview}>
        <View style={styles.resultcontainer}>
          <Text style={styles.result}>{result}</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            selectionColor="#fff"
            keyboardType="numeric"
            placeholder="Enter Value (Rs.)"
            value={inputValue}
            onChangeText={text => setInputValue(text)}
          />
        </View>

        <View style={styles.convertButton}>

          <TouchableOpacity style={styles.button} onPress={DOLLAR}>
            <Text style={styles.text}>$</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={EURO}>
            <Text style={styles.text}>€</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={POUND}>
            <Text style={styles.text}>£</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={BITCOIN}>
            <Text style={styles.text}>BitCoin</Text>
          </TouchableOpacity>
         




        </View>
      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 20
  },
  screenview: {
    flex: 1
  },
  resultcontainer: {
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",

    borderColor: "#c1c1c1",
    backgroundColor: "#0A79DE"
  },
  result: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold"
  },
  inputContainer: {
    height: 70,
    margin: 5,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 5,
    borderColor: "#c1c1c1"
  },
  input: {
    fontSize: 30,
    textAlign: "center"
  },
  convertButton: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20
  },
  button: {
    backgroundColor: "#0A79DE",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
    height:100,
    width: '31.3%',
    margin:2
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
    color:'white'
  }
});
