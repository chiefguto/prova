import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const App = () => {
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [area, setArea] = useState(null);

  const calcularArea = () => {
    const baseFloat = parseFloat(base);
    const alturaFloat = parseFloat(altura);
    const areaCalculada = (baseFloat * alturaFloat) / 2;
    setArea(areaCalculada);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite a base do triângulo:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setBase(text)}
        value={base}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Digite a altura do triângulo:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setAltura(text)}
        value={altura}
        keyboardType="numeric"
      />
      <Button title="Calcular Área" onPress={calcularArea} />
      {area !== null && (
        <Text style={styles.resultado}>
          A área do triângulo é: {area.toFixed(2)}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  resultado: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default App;