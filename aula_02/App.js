import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [celsius, setCelsius] = useState('');
  let [Far, setFar] = useState('');

  const calcularTemp = () => {
    Far = ((9 * parseFloat(celsius) + 160) / 5)
    console.log(Far);
    alert("Temperatura em Fahrenheit: " + Far)
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput style={styles.campo} placeholder='Digite a temperatura' keyboardType='numeric'
      onChangeText={(celsius)=>setCelsius(celsius)}></TextInput>
      <TouchableOpacity style={styles.botao} onPress={calcularTemp}>
        <Text style={styles.botao}>cALCULAR</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00008B',
  },
  titulo: {
    textAlign: "center",
    marginTop: 40,
    marginBottom: 40,
    fontSize: 30,
    color: "#FFF"
  },
  campo: {
    backgroundColor: "#FFF",
    borderRadius: 30,
    margin: 15,
    padding: 10,
    fontSize: 15
  },
  botao: {
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    backgroundColor: "#FFD700",
    padding: 10,
  },
  textoBotao: {
    fontSize: 20
  }
});
