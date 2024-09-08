import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

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
    <View>
      <Text>CalcScreen</Text>

      <Text>Informe o primeiro numero</Text>
      <TextInput onChangeText={(v) => setNumber(v)} inputMode="numeric" />

      <Text>Informe o segundo numero</Text>
      <TextInput onChangeText={(v) => setNumber2(v)} inputMode="numeric" />

      <TouchableOpacity onPress={somar}>
        <Text>Somar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={subtrair}>
        <Text>Subtrair</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={multiplicar}>
        <Text>Multiplicar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={dividir}>
        <Text>Dividir</Text>
      </TouchableOpacity>

      <Text>Resultado: {result}</Text>
    </View>
  );
}