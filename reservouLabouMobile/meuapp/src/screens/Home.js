import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function Home({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>
        Bem-vindo ao ReservasLabs
      </Text>

      <View style={styles.cards}>

        {/* Laboratórios */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Laboratórios
          </Text>

          <Text style={styles.cardText}>
            Consulte os laboratórios disponíveis.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Laboratorios')}
          >
            <Text style={styles.buttonText}>
              Acessar
            </Text>
          </TouchableOpacity>
        </View>

        {/* Equipamentos */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Equipamentos
          </Text>

          <Text style={styles.cardText}>
            Consulte os equipamentos disponíveis.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Equipamentos')}
          >
            <Text style={styles.buttonText}>
              Acessar
            </Text>
          </TouchableOpacity>
        </View>

        {/* Relatórios */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Relatórios
          </Text>

          <Text style={styles.cardText}>
            Visualize os relatórios do sistema.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Relatorios')}
          >
            <Text style={styles.buttonText}>
              Acessar
            </Text>
          </TouchableOpacity>
        </View>

        {/* Minhas Reservas */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Minhas Reservas
          </Text>

          <Text style={styles.cardText}>
            Consulte e acompanhe suas reservas.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('MinhasReservas')}
          >
            <Text style={styles.buttonText}>
              Acessar
            </Text>
          </TouchableOpacity>
        </View>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
    alignItems: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
  },

  cards: {
    width: '100%',
    maxWidth: 500,
  },

  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,

    elevation: 4,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },

  cardTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },

  cardText: {
    fontSize: 15,
    color: '#666',
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#0099ff',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
