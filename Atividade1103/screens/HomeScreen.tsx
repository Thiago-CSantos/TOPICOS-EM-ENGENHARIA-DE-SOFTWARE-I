import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

const HomeScreen = ({ navigation }: { navigation: DrawerNavigationProp<any> }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Tela Home</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.toggleDrawer()}
      >
        <Text style={styles.buttonText}>Abrir Drawer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.jumpTo('CadastroAluno')}
      >
        <Text style={styles.buttonText}>Cadastro de Aluno</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.jumpTo('CadastroFuncionario')}
      >
        <Text style={styles.buttonText}>Cadastro de Funcionário</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.jumpTo('Notifications')}
      >
        <Text style={styles.buttonText}>Ir para Notificações</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  button: {
    backgroundColor: '#4f46e5',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
