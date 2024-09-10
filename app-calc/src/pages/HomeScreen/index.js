import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={homeStyles.container}>
      <Text>App de Utilitarios</Text>

      <TouchableOpacity style={homeStyles.botao} onPress={() => navigation.navigate('Calc')}>
        <Text>Calculadora</Text>
      </TouchableOpacity>

      <TouchableOpacity style={homeStyles.botao} onPress={() => navigation.navigate('Help')}>
        <Text>Ajuda</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={homeStyles.botao} onPress={() => navigation.navigate('About')}>
        <Text>Conheça a equipe</Text>
      </TouchableOpacity>
    </View>
  )
}

export const homeStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  botao: {
    backgroundColor: 'lightblue',

    width: 256,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 10,
  },
});