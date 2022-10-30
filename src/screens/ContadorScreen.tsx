import React, {useState} from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import {Fab} from '../components/Fab';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Contador: {contador}</Text>

      <Fab title="+1" onPress={() => setContador(contador + 1)} />
      <Fab title="-1" position="bl" onPress={() => setContador(contador - 1)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    top: -15,
    textAlign: 'center',
  },
});
