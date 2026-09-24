import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Alert } from 'react-native';
import Header from "";

export default function ReservarLaboratorios({ route, navigation }) {
  const { laboratorioSelecionado } = route.params || {};

  const [laboratorio, setLaboratorio] = useState(laboratorioSelecionado || '');
  const [qtdPessoas, setQtdPessoas] = useState('');
  const [data, setData] = useState('');
  const [horaEntrada, setHoraEntrada] = useState('');
  const [horaSaida, setHoraSaida] = useState('');

  const handleReservar = () => {
    Alert.alert('Sucesso', `Reserva realizada para o ${laboratorio || 'Laboratório'}!`);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.mainCard}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backButtonText}>← Voltar para a lista</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Reserva de Laboratório</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Laboratório</Text>
            <TextInput
              style={styles.input}
              value={laboratorio}
              onChangeText={setLaboratorio}
              placeholder="Selecione o Laboratório"
              placeholderTextColor="#aaa"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Quantidade de pessoas</Text>
            <TextInput
              style={styles.input}
              value={qtdPessoas}
              onChangeText={setQtdPessoas}
              keyboardType="numeric"
              placeholder="Digite a quantidade"
              placeholderTextColor="#aaa"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Data</Text>
            <TextInput
              style={styles.input}
              value={data}
              onChangeText={setData}
              placeholder="DD/MM/AAAA"
              placeholderTextColor="#aaa"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Hora de entrada</Text>
            <TextInput
              style={styles.input}
              value={horaEntrada}
              onChangeText={setHoraEntrada}
              placeholder="HH:MM"
              placeholderTextColor="#aaa"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Hora de Saída</Text>
            <TextInput
              style={styles.input}
              value={horaSaida}
              onChangeText={setHoraSaida}
              placeholder="HH:MM"
              placeholderTextColor="#aaa"
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleReservar}>
            <Text style={styles.buttonText}>RESERVAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: 15,
    backgroundColor: '#f4f4f4',
    flexGrow: 1,
    justifyContent: 'center',
  },
  mainCard: {
    backgroundColor: '#ededed',
    borderRadius: 15,
    padding: 20,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    alignItems: 'center',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  backButtonText: {
    color: '#0099ff',
    fontSize: 14,
  },
  title: {
    fontSize: 22,
    color: '#222',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    marginLeft: '5%',
  },
  input: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 14,
    color: '#333',
  },
  button: {
    backgroundColor: '#3bbfff',
    borderRadius: 25,
    paddingVertical: 12,
    width: '90%',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

