import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.logoText}>
        Reservou! <Text style={styles.logoHighlight}>Labou!</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0099ff',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    elevation: 4, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  logoText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  logoHighlight: {
    color: '#d100d1',
  },
});
