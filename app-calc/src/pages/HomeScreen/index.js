import { View, Text, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <Text>App de Utilitarios</Text>

      <TouchableOpacity 
        onPress={() => navigation.navigate('Calc')}
      >
        <Text>Calculadora</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.navigate('IMC')}
      >
        <Text>Calcular IMC</Text>
      </TouchableOpacity>

    </View>
  )
}