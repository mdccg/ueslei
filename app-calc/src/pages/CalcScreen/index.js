import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { homeStyles } from '../HomeScreen/index`';

export default function CalcScreen() {
  const [number, setNumber] = React.useState(0);
  const [number2, setNumber2] = React.useState(0);
  const [result, setResult] = React.useState('');

  function somar() {
    let n1 = Number(number);
    let n2 = Number(number2);
    let res = n1 + n2;
    setResult(res)
  }

  function subtrair() {
    let n1 = Number(number);
    let n2 = Number(number2);
    let res = n1 - n2;
    setResult(res)
  }

  function multiplicar() {
    let n1 = Number(number);
    let n2 = Number(number2);
    let res = n1 * n2;
    setResult(res)
  }

  function dividir() {
    let n1 = Number(number);
    let n2 = Number(number2);
    let res = n1 / n2;
    setResult(res)
  }

  function limpar() {
    setNumber(0);
    setNumber(0);
    setResult('');
  }

  return (
    <View style={styles.container}>
      <Text>Calculadora</Text>

      <Text>Informe o primeiro numero</Text>
      <TextInput style={styles.input} onChangeText={(v) => setNumber(v)} inputMode="numeric" />

      <Text>Informe o segundo numero</Text>
      <TextInput style={styles.input} onChangeText={(v) => setNumber2(v)} inputMode="numeric" />

      <TouchableOpacity style={homeStyles.botao} onPress={somar}>
        <Text>Somar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={homeStyles.botao} onPress={subtrair}>
        <Text>Subtrair</Text>
      </TouchableOpacity>

      <TouchableOpacity style={homeStyles.botao} onPress={multiplicar}>
        <Text>Multiplicar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={homeStyles.botao} onPress={dividir}>
        <Text>Dividir</Text>
      </TouchableOpacity>

      <Text>Resultado: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  input: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '80%',
    marginBottom: 10,
    borderRadius: 2,
  },
});