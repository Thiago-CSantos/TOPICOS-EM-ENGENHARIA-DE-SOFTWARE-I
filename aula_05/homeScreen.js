import { View, Text, StyleSheet, Button } from "react-native";


const HomeScreen = ({navigation})=>{
    return(
        <View>
            <Text>Tela home</Text>
            <Button title="Abrir Drawer" onPress={()=> navigation.toggleDrawer()}></Button>
            <Button title="Nofication" onPress={()=> navigation.jumpTo("Nofications")}></Button>
        </View>
    )
}

export default HomeScreen;