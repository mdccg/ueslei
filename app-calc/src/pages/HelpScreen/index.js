import { View, Text, StyleSheet } from 'react-native';

const HelpScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Precisa de ajuda com suporte técnico? Contate-nos!
      </Text>

      <Text style={styles.paragrafo}>
        0800 777 7000
      </Text>
      
      <Text style={styles.paragrafo}>
        +55 (67) 9999-9999
      </Text>

      <Text style={styles.paragrafo}>
        suporte@ueslei.com.br
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  titulo: {
    fontSize: 24,
  },

  paragrafo: {
    marginBottom: 10,
  },
});

export default HelpScreen;