import { View, Text, TouchableOpacity, TextInput, Modal, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import { NavigationProp } from '@react-navigation/native';

export default function CadastroAlunoScreen({ navigation }: { navigation: NavigationProp<any> }) {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(0);
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const [errors, setErrors] = useState({
        nome: false,
        idade: false,
        email: false,
        telefone: false
    });

    const handleCadastro = () => {
        const novoErro = {
            nome: nome.trim() === '',
            idade: idade <= 0,
            email: email.trim() === '',
            telefone: telefone.trim() === ''
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
            <Text style={styles.title}>Cadastro de Aluno</Text>

            <Text style={styles.label}>Nome do Aluno</Text>
            <TextInput
                style={[styles.input, errors.nome && styles.inputError]}
                value={nome}
                onChangeText={setNome}
                placeholder="Digite seu nome"
                placeholderTextColor="#999"
            />
            {errors.nome && <Text style={styles.errorText}>Campo obrigatório</Text>}

            <Text style={styles.label}>Idade</Text>
            <TextInput
                style={[styles.input, errors.idade && styles.inputError]}
                value={idade.toString()}
                onChangeText={(text) => setIdade(Number(text))}
                placeholder="Digite sua idade"
                placeholderTextColor="#999"
                keyboardType="numeric"
            />
            {errors.idade && <Text style={styles.errorText}>Digite uma idade válida</Text>}

            <Text style={styles.label}>Email</Text>
            <TextInput
                style={[styles.input, errors.email && styles.inputError]}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                placeholder="Digite seu email"
                placeholderTextColor="#999"
            />
            {errors.email && <Text style={styles.errorText}>Campo obrigatório</Text>}

            <Text style={styles.label}>Telefone</Text>
            <TextInput
                style={[styles.input, errors.telefone && styles.inputError]}
                value={telefone}
                onChangeText={setTelefone}
                keyboardType="phone-pad"
                placeholder="Digite seu telefone"
                placeholderTextColor="#999"
            />
            {errors.telefone && <Text style={styles.errorText}>Campo obrigatório</Text>}

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
                        <Text style={styles.modalText}>Idade: {idade}</Text>
                        <Text style={styles.modalText}>Email: {email}</Text>
                        <Text style={styles.modalText}>Telefone: {telefone}</Text>

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
        marginBottom: 5,
        fontSize: 16,
        color: '#333',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    inputError: {
        borderColor: '#e53935',
        backgroundColor: '#fff0f0',
    },
    errorText: {
        color: '#e53935',
        fontSize: 12,
        alignSelf: 'flex-start',
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#4f46e5',
        width: '100%',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
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
        marginTop: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
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
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 6 },
        shadowRadius: 10,
        elevation: 10,
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
