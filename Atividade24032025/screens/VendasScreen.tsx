import { DrawerNavigationProp } from "@react-navigation/drawer";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Modal, ScrollView } from 'react-native';
import React, { useState } from 'react';

export default function VendasScreen({ navigation }: { navigation: DrawerNavigationProp<any> }) {

    const [nome, setNome] = useState('');
    const [quantidade, setQauntidade] = useState(0);
    const [valor, setValor] = useState('');
    const [cliente, setCliente] = useState('');
    const [funcionario, setFuncionario] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const [errors, setErrors] = useState({
        nome: false,
        quantidade: false,
        valor: false,
        cliente: false,
        funcionario: false
    });

    const handleCadastro = () => {
        const novoErro = {
            nome: nome.trim() === '',
            quantidade: quantidade === 0,
            valor: valor.trim() === '',
            cliente: cliente.trim() === '',
            funcionario: funcionario.trim() === '',
        };
        setErrors(novoErro);

        if (!Object.values(novoErro).includes(true)) {
            setModalVisible(true);
        }
    };


    const handleCloseModal = () => {
        setModalVisible(false);
    };


    return (
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
            <View style={styles.container}>
                <Text style={styles.title}>Cadastrar uma Venda!</Text>

                <Text style={styles.label}>Nome do Produto:</Text>
                <TextInput
                    style={[styles.input, errors.nome && styles.inputError]}
                    value={nome}
                    onChangeText={setNome}
                    placeholder="Nome"
                    placeholderTextColor="#999"
                />
                {errors.nome && <Text style={styles.errorText}>Campo obrigatório</Text>}

                <Text style={styles.label}>Quantidade</Text>
                <TextInput
                    style={[styles.input, errors.quantidade && styles.inputError]}
                    value={quantidade.toString()}
                    onChangeText={(text) => {
                        const num = Number(text);
                        if (!isNaN(num)) setQauntidade(num);
                    }}
                    placeholder="Quantidade"
                    placeholderTextColor="#999"
                    keyboardType="numeric"
                />
                {errors.quantidade && <Text style={styles.errorText}>Digite um valor válido</Text>}

                <Text style={styles.label}>Valor$</Text>
                <TextInput
                    style={[styles.input, errors.valor && styles.inputError]}
                    value={valor}
                    onChangeText={setValor}
                    keyboardType="decimal-pad"
                    placeholder="Valor"
                    placeholderTextColor="#999"
                />
                {errors.valor && <Text style={styles.errorText}>Campo obrigatório</Text>}

                <Text style={styles.label}>Cliente</Text>
                <TextInput
                    style={[styles.input, errors.cliente && styles.inputError]}
                    value={cliente}
                    onChangeText={setCliente}
                    keyboardType="default"
                    placeholder="Cliente"
                    placeholderTextColor="#999"
                />
                {errors.cliente && <Text style={styles.errorText}>Campo obrigatório</Text>}

                <Text style={styles.label}>Funcionario</Text>
                <TextInput
                    style={[styles.input, errors.cliente && styles.inputError]}
                    value={funcionario}
                    onChangeText={setFuncionario}
                    keyboardType="default"
                    placeholder="Funcionario"
                    placeholderTextColor="#999"
                />
                {errors.funcionario && <Text style={styles.errorText}>Campo obrigatório</Text>}

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
                            <Text style={styles.modalText}>Quantidade: {quantidade}</Text>
                            <Text style={styles.modalText}>Valor: R$ {valor}</Text>
                            <Text style={styles.modalText}>Cliente: {cliente}</Text>
                            <Text style={styles.modalText}>Funcionario: {funcionario}</Text>

                            <TouchableOpacity style={styles.modalButton} onPress={handleCloseModal}>
                                <Text style={styles.modalButtonText}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        paddingVertical: 20,
        alignItems: 'center',
    },
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