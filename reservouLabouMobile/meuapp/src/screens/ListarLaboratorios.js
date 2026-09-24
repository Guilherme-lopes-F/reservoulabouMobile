import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import Header from '../components/Header';

const LABORATORIOS = [
  { id: '1', nome: 'Laboratório 01', capacidade: '30 pessoas', equipamentos: 'PCs, Projetor' },
  { id: '2', nome: 'Laboratório 02', capacidade: '25 pessoas', equipamentos: 'MacBooks, Lousa' },
  { id: '3', nome: 'Laboratório 03', capacidade: '40 pessoas', equipamentos: 'Eletrônica, Bancadas' },
  { id: '4', nome: 'Laboratório 04', capacidade: '20 pessoas', equipamentos: 'Impressoras 3D' },
];

export default function ListarLaboratorios({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.labNome}>{item.nome}</Text>
      <Text style={styles.labInfo}>Capacidade: {item.capacidade}</Text>
      <Text style={styles.labInfo}>Equipamentos: {item.equipamentos}</Text>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('ReservarLaboratorio', { laboratorioSelecionado: item.nome })}
      >
        <Text style={styles.buttonText}>RESERVAR</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.mainCard}>
          <Text style={styles.title}>Laboratórios Disponíveis</Text>
          <FlatList
            data={LABORATORIOS}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 15,
    justifyContent: 'center',
  },
  mainCard: {
    backgroundColor: '#ededed',
    borderRadius: 15,
    padding: 20,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    flex: 1,
  },
  title: {
    fontSize: 22,
    color: '#222',
    textAlign: 'center',
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 10,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  labNome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  labInfo: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3,
  },
  button: {
    backgroundColor: '#3bbfff',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
