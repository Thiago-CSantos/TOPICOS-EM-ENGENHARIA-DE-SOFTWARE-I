import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert, TextInput, Button } from 'react-native';

export default function App() {

  function msg() {    
    Alert.alert("fjkshkljsdgfhsdbfh", "lkdsjafkjsdkj")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>TITULO</Text>
      <Image style={styles.imagem} source={{ uri: "https://www.ocasaldafoto.com/wp-content/uploads/2018/09/Foto-de-Paisagem-Lago-da-Pampulha-Belo-Horizonte-Charles-Torres.jpg" }}></Image>
      <TextInput style={styles.campo}></TextInput>
      <Button onPress={msg} title='dsalkfjsd'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    width: 200,
    height: 200
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 30,
  },
  campo:{
    backgroundColor:"#ccc",
    borderRadius: 10,
    fontSize: 23,
    color: "#FFF",
    margin: 10,
  }
});
