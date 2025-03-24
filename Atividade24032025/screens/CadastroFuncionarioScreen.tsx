import { View, Text, TouchableOpacity, TextInput, Modal, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import { NavigationProp } from '@react-navigation/native';

export default function CadastroFuncionarioScreen({ navigation }: { navigation: NavigationProp<any> }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [funcao, setFuncao] = useState('');
    const [salario, setSalario] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const [errors, setErrors] = useState({
        nome: false,
        email: false,
        funcao: false,
        salario: false
    });

    const handleCadastro = () => {
        const novoErro = {
            nome: nome.trim() === '',
            email: email.trim() === '',
            funcao: funcao.trim() === '',
            salario: salario.trim() === '' || Number(salario) <= 0
        };

        setErrors(novoErro);

        const temErro = Object.values(novoErro).some((err) => err);

        if (temErro) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos corretamente!');
            return;
        }

        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de Funcionário</Text>

            <Text style={styles.label}>Nome do Funcionário</Text>
            <TextInput
                style={[styles.input, errors.nome && styles.inputError]}
                value={nome}
                onChangeText={setNome}
                placeholder="Digite o nome"
                placeholderTextColor="#999"
            />
            {errors.nome && <Text style={styles.errorText}>Campo obrigatório</Text>}

            <Text style={styles.label}>Email</Text>
            <TextInput
                style={[styles.input, errors.email && styles.inputError]}
                value={email}
                onChangeText={setEmail}
                placeholder="Digite o email"
                placeholderTextColor="#999"
                keyboardType="email-address"
            />
            {errors.email && <Text style={styles.errorText}>Campo obrigatório</Text>}

            <Text style={styles.label}>Função</Text>
            <TextInput
                style={[styles.input, errors.funcao && styles.inputError]}
                value={funcao}
                onChangeText={setFuncao}
                placeholder="Digite a função"
                placeholderTextColor="#999"
            />
            {errors.funcao && <Text style={styles.errorText}>Campo obrigatório</Text>}

            <Text style={styles.label}>Salário</Text>
            <TextInput
                style={[styles.input, errors.salario && styles.inputError]}
                value={salario}
                onChangeText={setSalario}
                placeholder="Digite o salário"
                placeholderTextColor="#999"
                keyboardType="numeric"
            />
            {errors.salario && <Text style={styles.errorText}>Campo obrigatório e maior que zero</Text>}

            <TouchableOpacity style={styles.button} onPress={handleCadastro}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} animationType="slide" transparent={true}>
                <View style={styles.modalWrapper}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>🎉 Cadastro Efetuado!</Text>
                        <Text style={styles.modalText}>Nome: {nome}</Text>
                        <Text style={styles.modalText}>Email: {email}</Text>
                        <Text style={styles.modalText}>Função: {funcao}</Text>
                        <Text style={styles.modalText}>Salário: R$ {salario}</Text>

                        <TouchableOpacity style={styles.modalButton} onPress={handleCloseModal}>
                            <Text style={styles.modalButtonText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f8',
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 30,
    },
    label: {
        alignSelf: 'flex-start',
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
        marginTop: 12,
    },
    input: {
        width: '100%',
        paddingVertical: 12,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 10,
        fontSize: 16,
        color: '#333',
    },
    inputError: {
        borderColor: '#e53935',
    },
    errorText: {
        alignSelf: 'flex-start',
        color: '#e53935',
        fontSize: 12,
        marginBottom: 8,
    },
    button: {
        backgroundColor: '#4f46e5',
        width: '100%',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    goBack: {
        backgroundColor: '#e54646e1',
        width: '100%',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    modalWrapper: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: '#fff',
        width: '85%',
        borderRadius: 12,
        padding: 25,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4f46e5',
        marginBottom: 20,
    },
    modalText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
    },
    modalButton: {
        backgroundColor: '#4f46e5',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginTop: 20,
    },
    modalButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
